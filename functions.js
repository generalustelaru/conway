function countLiveNeighbors(cells, currentCell) {
    // calculate the coordinates of possible neighbors
    const { row, col } = currentCell;
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
    // collect all neighbor cells from state
    const neighbors = cells.filter(cell => {
        if (neighborCoords.find(coord => {
            return cell.row === coord.row && cell.col === coord.col;
        })) {
            return cell;
        }
    })
    // return the number of live neighbors
    return neighbors.reduce((alive, cell) => {

        return cell.isAlive ? ++alive : alive;
    }, 0);
}

function toID(row, col) {
    return `cell-${row}-${col}`
}

function updateClasses(cells) {
    cells.forEach(cell => {
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