import './App.css';
import  {ReactComponent as Logo} from "./assets/shared/logo.svg";
import {useState} from 'react'

function App() {

	const [data, setData] = useState('')
	
		const parentToChild = () => {setData("this is data for the other thing ig " )}
		 return (
		    <div className="App">
			  <div className="header">
				<div className="logo">
					<Logo />
				</div>
				<div className="buttonscontrol">
					<button className="home" onClick={() => parentToChild()}>00 HOME </button>
					<button className="destination">01 DESTINATION </button>
					<button className="crew">02 CREW  </button>
					<button className="technology">03 TECHNOLOGY </button>
				</div>
			  </div>
			 <Condition parentToChild={data}/>
		     </div>
		  );


	
 }

const Testing = () =>{
	console.log("from testing")
	return(
		<div className="insideDesti">

			<p> 01 PICK YOUR DESTINATION</p>
			<div className="bottomPart">
				<p>moon pic here</p>
				<div className="buttonDetails">
					<div className="planets">
						<div className="planetbuttons">
							<button>Moon </button>
							<button>Mars </button>
							<button>Europa</button>
							<button>Titan </button>
						</div>
						<p> MOON </p>
						<p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites</p>
						<p>Avg. distance 384,400 km Est. travel time 3 days</p>
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
const Condition = ({parentToChild}) =>{
	if (false){
		return(
			<div>
				{parentToChild}	
				<Home/>
			</div>
		)
	}else if (false){
		return <Testing/>
	}else if (false){
		return <Destination />
	}else if (true){
		return <Technology/>
	}
}
export default App;
