import './App.css';
import  {ReactComponent as Logo} from "./assets/shared/logo.svg";

function App() {
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
	  <div className="textandexplore">
	  	<div className="text">
			<p className="text1">SO, YOU WANT TO TRAVEL TO</p>
			<p className="space">SPACE</p>
			<p className="parag">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
		</div>		

	 		<button className="circle-hover"> EXPLORE </button>
	  </div>
    </div>
  );
}

export default App;
