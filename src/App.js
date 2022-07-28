import './App.css';
import Timer from './Components/Timer/Timer';
import TeamScore from './Components/Score/TeamScore';
import Period from './Components/Period/Period';


function App() {
  return (
    <div className="App">
      <span md='6' className='d-inline-flex' >
        <TeamScore />
        <TeamScore />
      </span>
      <span>
        <Timer />
        <Period />
      </span>
    </div>
  );
}

export default App;
