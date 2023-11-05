function main() {
    drawWorld(cellSize, columns, rows, seeds);
    runSimulation(iterations, interval);
}

function drawWorld(cellSize, columns, rows, seeds) {
    root.style.setProperty(cellSize.var, cellSize.value + 'px');
    root.style.setProperty(columns.var, columns.value);
    root.style.setProperty(rows.var, rows.value);

    for (let row = 0; row < columns.value; row++) {

        for (let col = 0; col < rows.value; col++) {
            const div = document.createElement('div')
            div.classList.add('cell')
            div.id = toID(row, col)
            let isAlive = false
            const seed = seeds.find(seed => {
                return seed.row === row && seed.col === col
            })
            if (seed) {
                div.classList.add('cell__alive')
                isAlive = true
            } else {
                div.classList.add('cell__dead')
            }

            world.appendChild(div)
            state.cells.push({ row, col, isAlive })
        }
    }
}
function runSimulation(iterations, interval) {
    const intervalFunction = setInterval(() => {
        const newGeneration = state.cells.map(cell => {
            const liveNeighbors = checkNeighbors(cell);
            return {
                ...cell,
                isAlive: cell.isAlive
                    ? [2, 3].includes(liveNeighbors) ? true : false
                    : liveNeighbors === 3 ? true : false
            };
        });
        state.cells = newGeneration;
        rePopulateWorld();
    }, interval);
    setTimeout(() => {
        clearInterval(intervalFunction);
        console.info('Simulation complete after', iterations, 'iterations');
    }, (iterations) * interval);
}