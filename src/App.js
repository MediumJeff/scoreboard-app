import './App.css';
import Timer from './Components/Timer/Timer';
import TeamScore from './Components/Score/TeamScore';
import Period from './Components/Period/Period';

function App() {
  return (
    <>
      <div className="App">
          <span className='d-inline-flex' >
            <TeamScore teamName='Tigers' />
            <TeamScore teamName='Guardians' />
          </span>
          <Timer />
          <Period />
      </div>
    </>
  );
}

export default App;
