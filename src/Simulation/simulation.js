import Grid from './grid';
import Logger from './logger';



class Simulation {
    
    constructor(gridSize, zombieStart,creatureList,moves){
       this.grid= new Grid(gridSize);
       this.moves =moves;
       this.logger= new Logger() 

       this.zombies=[{x: zombieStart.x, y:zombieStart.y}];
       this.creatures = new Map(creatureList.map(c=>[this._key(c.x,c.y),{x:c.x,y:c.y}]))
    }

    run(){
        for (let id=0;id<this.zombies.length;id++){
            this._runZombie(id);
        }
        this.logger.logFinalState(this.zombies, Array.from(this.creatures.values()));
    }

    _runZombie(id){
        for (const direction of this.moves){
            const newPos = this.grid.applyMove(this.zombies[id],direction)
            this.zombies[id]= newPos;
            this.logger.logMove(id, newPos.x, newPos.y)
            this._checkInfection(id,newPos)
        }
    }

    _checkInfection(zombieId,pos){
        const key = this._key(pos.x, pos.y)
        if(this.creatures.has(key)){
            this.creatures.delete(key);
            this.zombies.push({x: pos.x, y:pos.y});
            this.logger.logInfection(zombieId,pos.x,pos.y)

        }
    }
    _key(x,y){
     return `${x},${y}`;
    }
    
}
export default Simulation