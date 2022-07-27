import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer/Timer';
import TeamScore from './Components/Score/TeamScore';


function App() {
  return (
    <div className="App">
      <span md='6' className='d-inline-flex' >
        <TeamScore />
        <TeamScore />
      </span>
      <Timer />
      
    </div>
  );
}

export default App;
