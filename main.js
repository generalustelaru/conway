
const state = { cells: [], isRunning: false, intervalFunction: null }
let newGeneration; // extracted for comparison
const root = document.documentElement;
const cellGrid = document.querySelector('.cellGrid');

function main() {
    const { cellSize, columns, rows } = config;
    setParameters(cellSize, columns, rows);
    populateGrid(columns, rows);
}

function setParameters(cellSize, columns, rows) {
    root.style.setProperty(cellSize.var, cellSize.value + 'px');
    root.style.setProperty(columns.var, columns.value);
    root.style.setProperty(rows.var, rows.value);
}

function populateGrid(columns, rows) {
    const { seeds } = config;
    for (let row = 0; row < columns.value; row++) {

        for (let col = 0; col < rows.value; col++) {
            const div = document.createElement('div')
            div.classList.add('cell');
            div.id = toID(row, col);
            const isSeed = seeds.find(seed => {
                return seed.row === row && seed.col === col
            })
            div.classList.add(isSeed ? 'cell__alive' : 'cell__dead');

            cellGrid.appendChild(div);
            state.cells.push({ row, col, isAlive: isSeed});
        }
    }
}

function runAutomata() {
    const { interval } = config;
    state.intervalFunction = setInterval(() => {
        // switch to forEach to include side effects
        newGeneration = state.cells.map(cell => {
            const liveNeighbors = countLiveNeighbors(state.cells, cell);
            return {
                ...cell,
                isAlive: cell.isAlive
                    ? [2, 3].includes(liveNeighbors) ? true : false
                    : liveNeighbors === 3 ? true : false
            }
        });
        state.cells = newGeneration;
        updateClasses(newGeneration);
    }, interval);
}

function toggleRun() {
    if (state.intervalFunction) {
        clearInterval(state.intervalFunction);
        state.intervalFunction = null;
        console.log('stopped');
    } else {
        runAutomata();
        console.log('running');
    }
}