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
import homebackground from "./assets/home/background-home-desktop.jpg";

import technologybackground from "./assets/technology/background-technology-desktop.jpg";
import crewbackground from "./assets/crew/background-crew-desktop.jpg";
import destinationbackground from "./assets/destination/background-destination-desktop.jpg";


import spacecappic from "./assets/technology/image-space-capsule-portrait.jpg"
import spaceportpic from "./assets/technology/image-spaceport-portrait.jpg"
import launchpic from "./assets/technology/image-launch-vehicle-portrait.jpg";
import {useState} from 'react'

function App() {
	//i think best way to do it just make useeffect hook and everytime u click u refresh iq and trigger the function taht sends info to the other function about data
	const [data, setData] = useState('')
	const [ctyle, setCtyle] = useState({backgroundImage: `url(${homebackground})` })	
	const [everything , setEverything] = useState('homeE')
	
			const homeig = () =>{
				setData({state:"home clicked"})
				setCtyle({backgroundImage: `url(${homebackground})`})
				setEverything('homeE')
			}
			const destinationig = () =>{
				setData({state:"destination clicked"})
				setCtyle({backgroundImage:`url(${destinationbackground})`})
				setEverything('destinationE')

			}
			const crewig = () =>{
				setData({state:"crew clicked"})
				setCtyle({backgroundImage:`url(${crewbackground})`})
				setEverything('crewE')
			}
			const techig = () =>{
				setData({state:"tech clicked"})
				setCtyle({backgroundImage:`url(${technologybackground})`})
				setEverything('techE')
			}
		console.log(data)
		 return (
		    <div className="App" style={ctyle}>
			 <div className={everything}>
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
	const	[crewto , setCrewto] = useState('')
	const	douglas = () =>{
		setCrewto({crewto:"douglas"})
	}
	const	anousheh = () =>{
		setCrewto({crewto:"anousheh"})
	}
	const	mark = () =>{
		setCrewto({crewto:"mark"})
	}
	const	victor = () =>{
		setCrewto({crewto:"victor"})
	}
	console.log(crewto)
	return(
		<div className="crewd">
			<p className="meetcrew"> <span className="meetcrewnumber"> 02 </span><span className="meetcrewp">Meet your crew Commander</span> </p>
			<Crewcondition {...crewto} className="douglos" />
			<div className="crewbuttons">
				<button className="first" onClick={() => douglas()}/>
				<button className="second"onClick={() => mark()}/>
				<button className="third"onClick={() => anousheh()}/>
				<button className="fourth"onClick={() => victor()}/>
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
	const [tech , setTech] = useState('')
	const circleone = () =>{
		setTech({tech:"circleone"})
	}
	const circletwo = () =>{
		setTech({tech:"circletwo"})
	}
	const circlethree = () =>{
		setTech({tech:"circlethree"})
	}
	return(
		<div className="technologyD">
			<p>  <span className="technum"> 03</span><span className="spacelaunch"> Space launch 101 </span></p>
			<div className="techbottom">
				<div className="techbuttons">
					<button className="circleone" onClick={()=> circleone()}> 1 </button>
					<button className="circletwo" onClick={()=> circletwo()}> 2 </button>
					<button className="circlethree" onClick={()=> circlethree()}> 3 </button>
				</div>
				<Techcondition {...tech}/>
			</div>
		</div>
	)
}

const Launch =() =>{
	return (
		<div className="launchdiv">
			<div className="techparag">
				<p className="terminology">THE TERMINOLOGY...</p>
				<p className="launch"> LAUNCH VEHICLE</p>
				<p className="techpara">  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
			</div>
			<img src={launchpic} alt="launchpichere" className="launchpic" />


		</div>
	)
}
const Spaceport =() =>{
	return (
		<div className="launchdiv">
			<div className="techparag">
				<p className="terminology">THE TERMINOLOGY...</p>
				<p className="launch"> SPACEPORT</p>
				<p className="techpara">  A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
			</div>
			<img src={spaceportpic} alt="space port pichere" className="launchpic" />

		</div>
	)
}

const Spacecapsule =() =>{
	return (
		<div className="launchdiv">
			<div className="techparag">
				<p className="terminology">THE TERMINOLOGY...</p>
				<p className="launch"> SPACE CAPSULE</p>
				<p className="techpara">  Space capsule A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
			</div>
			<img src={spacecappic} alt="space capsule here" className="launchpic" />


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

const Crewcondition = ({crewto}) =>{
	console.log(crewto)
	if(crewto === "douglas"){
		return <Douglas/>
	}else if(crewto === "mark"){
		return <Mark />
	}else if(crewto ==="anousheh"){
		return <Anoushes/>
	}else if(crewto ==="victor"){
		return <Victor/>
	}else return (<Douglas/>);
}

const Techcondition = ({tech}) =>{
	if(tech === "circleone"){
		return <Launch/>
	}else if(tech === "circletwo"){
		return <Spaceport/>
	}else if(tech === "circlethree"){
		return <Spacecapsule/>
	}else return <Launch/>;
}
export default App;
