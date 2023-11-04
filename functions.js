

function logCells() {
    console.log(cells)
}

function getNeighborCoords(cell) {
    const { row, col } = cell
    return [
        { row: row - 1, col: col - 1 },
        { row: row - 1, col: col },
        { row: row - 1, col: col + 1 },
        { row: row, col: col - 1 },
        { row: row, col: col + 1 },
        { row: row + 1, col: col - 1 },
        { row: row + 1, col: col },
        { row: row + 1, col: col + 1 }
    ]
}

function getCellsFromCoords(coords) {
    return coords.map(coord => {
        const cell = cells.find(cell => {
            return cell.row === coord.row && cell.col === coord.col
        })
        return cell
    })
}
function checkEnvironment(cells){
    let liveCells = 0;
    cells.forEach(cell => {
        liveCells += cell.isAlive ? 1 : 0;
    });
    return liveCells;
}

function toID(row, col) {
    return `cell-${row}-${col}`
}