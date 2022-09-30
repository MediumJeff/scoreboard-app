import './App.css';
import Timer from './components/Timer/Timer';
import TeamScore from './components/Score/TeamScore';
import Period from './components/Period/Period';
import { GAME_DETAILS } from './data/GAME_DETAILS';

function App() {

  return (
    <>
      <div className="App">
          <span className='d-inline-flex' >
            <TeamScore teamName={GAME_DETAILS.homeTeam} />
            <TeamScore teamName={GAME_DETAILS.awayTeam} />
          </span>
          <Timer timeSet={(GAME_DETAILS.minutesPerPeriod * 60000)} />
          <Period />
      </div>
    </>
  );
}

export default App;
