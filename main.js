function main() {
    drawWorld(cellSize, columns, rows, seed);
    logCells();
    runSimulation(iterations, interval);
}

function drawWorld(cellSize, columns, rows, seed) {
    root.style.setProperty(cellSize.var, cellSize.value + 'px');
    root.style.setProperty(columns.var, columns.value);
    root.style.setProperty(rows.var, rows.value);

    for (let row = 0; row < columns.value; row++) {

        for (let col = 0; col < rows.value; col++) {
            const div = document.createElement('div')
            div.classList.add('cell')
            div.id = toID(row, col)
            let isAlive = false

            if (row === seed.row && col === seed.col) {
                div.classList.add('cell__alive')
                isAlive = true
            } else {
                div.classList.add('cell__dead')
            }

            world.appendChild(div)
            cells.push({ row, col, isAlive })
        }
    }
}
function runSimulation(iterations, interval) {
    let iteration = 1;
    const intervalFunction = setInterval(() => {
        console.log('iteration', iteration);
        ++iteration;
    }, interval);
    setTimeout(() => {
        clearInterval(intervalFunction);
    }, (iterations + 1) * interval);
}