import logo from './assets/logo.png';
import './App.css';
import './pages/navbar.css'
import Navbar from "./pages/navbar";
import ProgressBar from "@ramonak/react-progress-bar";
import ContactHeader from "./pages/contactHeader";

function App() {
  return (
    <div className="App">
        {/*<ContactHeader/>*/}
      <Navbar/>
        <div>
            <header className="App-header">
                <h1 className="h1-main">Coming Soon</h1>
                <img src={logo} style={{height: "200px", paddingTop: "30px"}} alt="logo"/>
                {/*<div className="progress">*/}
                {/*    <ProgressBar width='100%' height={35} baseBgColor="white" labelColor="#FFD744" bgColor="#FFD744"*/}
                {/*                 borderRadius={5} completed={20}/>*/}
                {/*    <div className="percentage-flex">*/}
                {/*        <span className="percentage-progress">0%</span>*/}
                {/*        <span className="percentage-progress">100%</span>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="send-to-insta">

                </div>
            </header>
        </div>
    </div>
  );
}

export default App;
