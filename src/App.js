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
          <Timer timeSet='70000' />
          <Period />
      </div>
    </>
  );
}

export default App;
