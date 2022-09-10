import './App.css';
import  {ReactComponent as Logo} from "./assets/shared/logo.svg";

function App() {
	if(true){
		 return (
		    <div className="App">
			  <div className="header">
				<div className="logo">
					<Logo />
				</div>
				<div className="buttonscontrol">
					<button className="home">00 HOME </button>
					<button className="destination">01 DESTINATION </button>
					<button className="crew">02 CREW  </button>
					<button className="technology">03 TECHNOLOGY </button>
				</div>
			  </div>
			 <Condition/>
		     </div>
		  );

	}else{
		return <div> testing those </div>
	}

	
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

const Condition = () =>{
	if (false){
		return 	<Home/>
	}else {return <Testing/>}
}
export default App;
