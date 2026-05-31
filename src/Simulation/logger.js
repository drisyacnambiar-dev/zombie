class Logger{
    constructor() {
        this.entries=[]
    }

    logMove(zombieId,x,y){
        const msg = `zombie ${zombieId} moved to (${x},${y})`;
        this.entries.push(msg)
        console.log(msg)
    }

    logInfection(zombieId,x,y){
        const msg= `zombie ${zombieId} infected creature at (${x},${y})`
        this.entries.push(msg);
        console.log(msg)
    }

    logFinalState(zombies,creatures){
        console.log("final state");
        const zombiePositions = zombies.map(z=>`(${z.x}, ${z.y})`).join('');
        console.log("zombie Positions",zombiePositions)
        const creaturePositions= creatures.length > 0 ? [...creatures].map(c=> ` (${c.x},${c.y})`).join(''):"None";
        console.log("creatures positions",creaturePositions)
    }
}  
export default Logger