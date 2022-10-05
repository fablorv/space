import './App.css';
import  {ReactComponent as Logo} from "./assets/shared/logo.svg";
import moonpic from "./assets/destination/image-moon.png";
import marspic from "./assets/destination/image-mars.png";
import titanpic from "./assets/destination/image-titan.png";
import europapic from "./assets/destination/image-europa.png";

import douglaspic from "./assets/crew/image-douglas-hurley.png";
import anoushespic from "./assets/crew/image-anousheh-ansari.png";
import markpic from "./assets/crew/image-mark-shuttleworth.png";
import victorpic from "./assets/crew/image-victor-glover.png";
import {useState} from 'react'

function App() {
	//i think best way to do it just make useeffect hook and everytime u click u refresh iq and trigger the function taht sends info to the other function about data
	const [data, setData] = useState('')
	
	
			const homeig = () =>{
				setData({state:"home clicked"})
			}
			const destinationig = () =>{
				setData({state:"destination clicked"})
			}
			const crewig = () =>{
				setData({state:"crew clicked"})
			}
			const techig = () =>{
				setData({state:"tech clicked"})
			}


		 return (
		    <div className="App">
			  <div className="header">
				<div className="logo">
			 <Logo />
				</div>
				<div className="buttonscontrol">
					<button className="home" onClick={() => homeig()}>00 HOME </button>
					<button className="destination" onClick={() => destinationig()}>01 DESTINATION </button>
					<button className="crew"onClick={() => crewig()}>02 CREW  </button>
					<button className="technology" onClick={()=> techig()}>03 TECHNOLOGY </button>
				</div>
			  </div>
			 <Condition state={data.state}/>
		     </div>
		  );


	
 }

const Testing = () =>{

	const [planet, setPlanet] = useState('')
	const [planetpic, setPlanetPic] = useState('')
	console.log(planet)


	const moont = () =>{
		setPlanet({planet:"moon"})
		setPlanetPic('moonpic')
	}
	const marst = () =>{
		setPlanet({planet:"marst"})
		setPlanetPic('marspic')
	}
	const titant = () =>{
		setPlanet({planet:"titant"})
		setPlanetPic('titanpic')
	}
	const europat = () =>{
		setPlanet({planet:"europat"})
		setPlanetPic('europapic')
	}
	let plantopic 
	if(planetpic === "moonpic"){
		plantopic =	<img src={moonpic} alt="moon pic here i believe" className="moonpicture" />
	}else if( planetpic === "marspic"){
		plantopic = <img src={marspic} alt="moon pic here i believe" className="moonpicture" />
	}else if (planetpic === "titanpic"){
		plantopic = <img src={titanpic} alt="moon pic here i believe" className="moonpicture" />
	}else if(planetpic === "europapic"){
		plantopic = <img src={europapic} alt="moon pic here i believe" className="moonpicture" />
	}else {plantopic =	<img src={moonpic} alt="moon pic here i believe" className="moonpicture" />}
	
	console.log(planetpic)
	return(
		<div className="insideDesti">

			<p className="pickdest"> 01 PICK YOUR DESTINATION</p>
			<div className="bottomPart">
			
				{plantopic}
				<div className="buttonDetails">
					<div className="planets">
						<div className="planetbuttons">
							<button className="moont" onClick={() => moont()}>MOON </button>
							<button className="marst" onClick={() => marst()}>MARS </button>
							<button className="europat" onClick={() => europat()}> EUROPA </button>
							<button className="titant" onClick={() => titant()}>TITAN</button>
							<SmallCondition stato={planet.planet}/>
						</div>
					</div>
					
				</div>
			</div>
						
		</div>	
	)
}

const Moont = () =>{
	return(
		<div className="moonplanet">
			<div className="Moont">
					<p className="moonb"> MOON </p>
							
					<p className="moonpara">See our planet as you’ve never seen it before.A perfect relaxing trip away to help regain perspective and come back refreshed .While you’re there,take in some history by visiting the Luna 2 and Apollo 11 landing sites</p>
					<div className="linepara"></div>	
					<div className="bottomparagraph">
								<p className="lastparamoon">Avg. distance</p><p className="travel">Est. travel time</p><p className="distnumbers"> 384,400 km </p><p className="travelnumbers">3 days</p>
					</div>

			</div>
		</div>
	)
}

const Marst = ()=>{
	return(
		<div className="Marst">
			<div className="Moont">
					<p className="moonb"> MARS</p>
							
					<p className="moonpara">Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
					<div className="linepara"></div>	
					<div className="bottomparagraph">
								<p className="lastparamoon">Avg. distance</p><p className="travel">Est. travel time</p><p className="distnumbers">255mil.km</p><p className="travelnumbers">9 months</p>
					</div>

			</div>

		</div>
	)
}

const Europat = ()=>{
	return(
		<div className="Europat">
			<div className="Moont">
					<p className="moonb"> EUROPA </p>
							
					<p className="moonpara">Europa The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin</p>
					<div className="linepara"></div>	
					<div className="bottomparagraph">
								<p className="lastparamoon">Avg. distance</p><p className="travel">Est. travel time</p><p className="distnumbers">628Mil.km</p><p className="travelnumbers">3 years</p>
					</div>

			</div>
		</div>
	)
}
const Titant = ()=>{
	return(
		<div className="Titant">
			<div className="Moont">
					<p className="moonb"> TITAN</p>
							
					<p className="moonpara">Titan The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
					<div className="linepara"></div>	
					<div className="bottomparagraph">
								<p className="lastparamoon">Avg. distance</p><p className="travel">Est. travel time</p><p className="distnumbers"> 1.6bil.km </p><p className="travelnumbers">7 years</p>
					</div>

			</div>
		</div>
	)
}

const Home = () =>{ 
	console.log("from home")
	return(
		 <div className="textandexplore">
			<div className="text">
				<p className="text1">SO, YOU WANT TO TRAVEL TO</p>
				<p className="space">SPACE </p>
				<p className="parag">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
			</div>		

				<button className="circle-hover"> EXPLORE </button>
		  </div>

	)
}

const Crew = () =>{
	console.log("from desitionation")
	return(
		<div className="crewd">
			<p className="meetcrew"> <span className="meetcrewnumber"> 02 </span><span className="meetcrewp">Meet your crew Commander</span> </p>
			<Douglas/>
			<div className="crewbuttons">
				<button className="first"/>
				<button className="second"/>
				<button className="third"/>
				<button className="fourth"/>
			</div>
		</div>
	)
}

const Douglas = () =>{
	return(
		<div className="crewstuff">
			<div className="crewparag">
				<p className="comm">COMMANDER  </p>
				<p className="comname">DOUGLAS HURLEY </p>
				<p className="compara"> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
			</div>
			<img src={douglaspic} alt="douglas pic here" className="compic" />

		</div>
	)
}
const Mark = () =>{
	return(
		<div className="crewstuff">
			<div className="crewparag">
				<p className="comm">COMMANDER  </p>
				<p className="comname">DOUGLAS HURLEY </p>
				<p className="compara"> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
			</div>
			<img src={markpic} alt="douglas pic here" className="compic" />

		</div>
	)
}
const Anoushes = () =>{
	return(
		<div className="crewstuff">
			<div className="crewparag">
				<p className="comm">COMMANDER  </p>
				<p className="comname">DOUGLAS HURLEY </p>
				<p className="compara"> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
			</div>
			<img src={anoushespic} alt="douglas pic here" className="compic" />

		</div>
	)
}
const Victor = () =>{
	return(
		<div className="crewstuff">
			<div className="crewparag">
				<p className="comm">COMMANDER  </p>
				<p className="comname">DOUGLAS HURLEY </p>
				<p className="compara"> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
			</div>
			<img src={victorpic} alt="douglas pic here" className="compic" />

		</div>
	)
}
const Technology = () =>{
	console.log("from destination")
	return(
		<div className="technologyD">
			<p>   Space launch 101</p>
			<div className="techbottom">
				<div className="techbuttons">
					<button className="circleone"> 1 </button>
					<button className="circletwo"> 2 </button>
					<button className="circlethree"> 3 </button>
				</div>
				<div className="techparag">
					<p>THE TERMINOLOGY...</p>
					<p> LAUNCH VEHICLE</p>
					<p>  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
				</div>
				<p> and simply a pic here </p>
			</div>
		</div>
	)
}
const Condition = (props) =>{
	if (props.state === "home clicked"){
		
		return(
			<div>
				<Home/>
			</div>
		)
	}else if (props.state === "destination clicked"){
		return <Testing/>
	}else if (props.state === "crew clicked"){
		return <Crew />
	}else if (props.state === "tech clicked"){
		return <Technology/>
	}else return <Home/>
}

const SmallCondition = (props) =>{
	console.log(props.stato)
	if(props.stato === "marst"){
		return(
			<Marst/>
		)

	}else if (props.stato === "titant"){
		return(
			<Titant/>
		)
	}else if(props.stato === "moon"){
		return(

			<Moont/>
		)
	}else if (props.stato === "europat"){
		return(
			<Europat/>
		)
	}else return ( <Moont/>);
}
export default App;
