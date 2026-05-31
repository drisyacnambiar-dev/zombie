
import './App.css';
import Simulation from './Simulation/simulation'
import { parseInput } from './Simulation/parser';
function App() {

  const runSimulation = ()=>{
    const input =`4
    (3,1)
    (0,1)(1,2)(1,1)
    RDRU`;

    const {gridSize,zombieStart,creatures,moves}=parseInput(input);
    const sim = new Simulation(gridSize,zombieStart,creatures,moves);
    sim.run();
  }






  return (
   <div>
    <h1>Zombie Simulation</h1>
    <button onClick={runSimulation}>
      Run Simulation
    </button>
    <p>Simulation output can be viewed in the browser console</p>
   </div>
  );
}

export default App;
