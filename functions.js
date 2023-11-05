function getNeighborCells(cell) {
    const { row, col } = cell;
    const neighborCoords = [
        { row: row - 1, col: col - 1 },
        { row: row - 1, col: col },
        { row: row - 1, col: col + 1 },
        { row: row, col: col - 1 },
        { row: row, col: col + 1 },
        { row: row + 1, col: col - 1 },
        { row: row + 1, col: col },
        { row: row + 1, col: col + 1 }
    ];
    return state.cells.filter(cell => {
        const match = neighborCoords.find(coord => {
            return cell.row === coord.row && cell.col === coord.col;
        })
        if (match) {
            return cell;
        }
    })
}
function checkNeighbors(cell) {
    const neighbors = getNeighborCells(cell);
    const liveCells = neighbors.reduce((acc, cell) => {
        return cell.isAlive ? ++acc : acc
    }, 0);

    return liveCells;
}

function toID(row, col) {
    return `cell-${row}-${col}`
}

function rePopulateWorld() {
    state.cells.forEach(cell => {
        displayedCell = document.getElementById(toID(cell.row, cell.col));
        displayedCell.classList.remove('cell__dead');
        displayedCell.classList.remove('cell__alive');
        if (cell.isAlive) {
            displayedCell.classList.add('cell__alive');
        } else {
            displayedCell.classList.add('cell__dead');
        }
    })
}