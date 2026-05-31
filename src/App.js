
import './App.css';
import Simulation from './Simulation/simulation'
import { parseInput } from './Simulation/parser';
function App() {

  const runSimulation = () => {
    const input = `4
    (3,1)
    (0,1)(1,2)(1,1)
    RDRU`;

    const { gridSize, zombieStart, creatures, moves } = parseInput(input);
    const sim = new Simulation(gridSize, zombieStart, creatures, moves);
    sim.run();
  }

  return (
    <div className="app-container">
      <div className="simulation-card">
        <h1 className="title">Zombie Simulation</h1>

        <button
          className="run-button"
          onClick={runSimulation}
        >
          Run Simulation
        </button>

        <p className="note">
          Open the browser console to view movement logs and final results.
        </p>
      </div>
    </div>
  );
}

export default App;
