import './Main.css';
import FirstContents from './ui/FirstContents';
import SecondContents from './ui/secondContents/SecondContents';



const Main = () => {
  return (
    <div className="App">
      <div className="App-first-subContainer">
        <FirstContents />
      </div>
      <div className="App-second-subContainer">
        <SecondContents />
      </div>
    </div>
  );
}

export default Main;
