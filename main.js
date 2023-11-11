
const state = { cells: [] }

function main() {
    const { cellSize, columns, rows } = config;
    const root = document.documentElement;
    // set CSS variables
    root.style.setProperty(cellSize.var, cellSize.value + 'px');
    root.style.setProperty(columns.var, columns.value);
    root.style.setProperty(rows.var, rows.value);

    const { seeds } = config;
    const cellGrid = document.querySelector('.cellGrid')
    // create cells for state and DOM
    for (let row = 0; row < columns.value; row++) {

        for (let col = 0; col < rows.value; col++) {
            const div = document.createElement('div')
            div.classList.add('cell')
            div.id = toID(row, col)
            const isSeed = seeds.find(seed => {
                return seed.row === row && seed.col === col
            })
            div.classList.add(isSeed ? 'cell__alive' : 'cell__dead')

            cellGrid.appendChild(div)
            state.cells.push({ row, col, isAlive: isSeed})
        }
    }

    const { interval } = config;
    // run automata
    const intervalFunction = setInterval(() => {
        const newGeneration = state.cells.map(cell => {
            const liveNeighbors = countLiveNeighbors(state.cells, cell);
            return {
                ...cell,
                isAlive: cell.isAlive
                    ? [2, 3].includes(liveNeighbors) ? true : false
                    : liveNeighbors === 3 ? true : false
            };
        });
        state.cells = newGeneration;
        updateClasses(newGeneration);
    }, interval);

    const { iterations } = config;
    // stop automata after iterations complete
    setTimeout(() => {
        clearInterval(intervalFunction);
        console.info('Simulation complete after', iterations, 'iterations');
    }, (iterations) * interval);
}