function parseCoord(str){
    const match = str.trim().match(/^\((\d+),(\d+)\)$/);
    if(!match) throw new Error (`Invalid coordinate format: "${str}"`);
    return {x: parseInt(match[1],10), y:parseInt(match[2],10)};

}

function parseCoordlist(str){
    const matches = str.trim().match(/\(\d+,\d+\)/g);
    if(!matches) return [];
    return matches.map(parseCoord)
}

function parseMoves(str){
    const valid = new Set(['U','D','L','R']);
    const moves = str.trim().toUpperCase().split('');
    const invalid = moves.filter(m=>!valid.has(m));
    if(invalid.length>0) throw new Error (`Invalid move(s):${invalid.join(',')} `);
    return moves;
}

function parseInput(input){
    const lines = input.trim().split('\n').map(l => l.trim()).filter(Boolean);

    if(lines.length<4){
        throw new Error (`Input must have at least 4 lines: gridSize, zombie, creatures, moves`);

    }
    const gridSize = parseInt(lines[0],10);
    if (isNaN(gridSize)) throw new Error(`Grid size must be a number,got: "${lines[0]}"`);

    const zombieStart = parseCoord(lines[1])
    const creatures = parseCoordlist(lines[2])
    const moves = parseMoves(lines[3]);
    return {gridSize,zombieStart,creatures,moves};

}

export {parseInput, parseCoord,parseCoordlist, parseMoves};