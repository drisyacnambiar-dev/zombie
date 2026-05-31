class Grid{
    constructor(size){
        if(!Number.isInteger(size) || size<1 ){
           throw new Error(`Grid size must be a positive integer, got: ${size}`)
        }
        this.size = size
    }


    wrap(value){
        return ((value % this.size) + this.size) %this.size;
    }

    applyMove(position,direction){
        const deltas = {
            U: {x:0, y:-1},
            D: {x:0, y: 1},
            L: {x:-1, y:0},
            R: {x:1, y:0},

        };

        const delta = deltas[direction];
        if(!delta) {
            throw new Error(`Invalid direction: "${direction}"`)
        }
           
            return {
                x: this.wrap(position.x + delta.x),
                y: this.wrap(position.y + delta.y),
            };
    }
}

export default Grid