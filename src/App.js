import './App.css';
import  {ReactComponent as Logo} from "./assets/shared/logo.svg";
import moonpic from "./assets/destination/image-moon.png";
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
			ean
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
	console.log("from testing")
	return(
		<div className="insideDesti">

			<p className="pickdest"> 01 PICK YOUR DESTINATION</p>
			<div className="bottomPart">
				<img src={moonpic} alt="moon pic here i believe" className="moonpicture" />
				<div className="buttonDetails">
					<div className="planets">
						<div className="planetbuttons">
							<button className="moont">MOON </button>
							<button className="marst">MARS </button>
							<button className="europat"> EUROPA </button>
							<button className="titant">TITAN</button>
						</div>
						<p className="moonb"> MOON </p>
						<p className="moonpara">See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites</p>
						<p className="lastparamoon">Avg. distance 384,400 km Est.</p>
						<p className="lastparamoonb">travel time 3 days</p>
					</div>
					
				</div>
			</div>
						
		</div>	
	)
}

const Home = () =>{ console.log("from home")
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

const Destination = () =>{
	console.log("from desitionation")
	return(
		<div className="crewd">
			<p> 02 Meet your crew Commander </p>
			<div className="crewstuff">
				<div className="crewparag">
					<p>COMMANDER </p>
					<p>DOUGLAS HURLEY </p>
					<p> Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
				</div>
				<p> here should be a pic </p>

			</div>
			<button className="first"/>
			<button className="second"/>
			<button className="third"/>
			<button className="fourth"/>
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
				{props.state}	
				<Home/>
			</div>
		)
	}else if (props.state === "destination clicked"){
		return <Testing/>
	}else if (props.state === "crew clicked"){
		return <Destination />
	}else if (props.state === "tech clicked"){
		return <Technology/>
	}else console.log("this is else")
}
export default App;
