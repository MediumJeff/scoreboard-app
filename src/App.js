import logo from './logo.svg';
import './App.css';
import Timer from './Components/Timer/Timer';
import TeamScore from './Components/Score/TeamScore';


function App() {
  return (
    <div className="App">
      <TeamScore />
      <Timer />
      <TeamScore />
    </div>
  );
}

export default App;
