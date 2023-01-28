worldSize = {
    width: 990,
    height: 590,
}
const worldElement = document.querySelector('.world')
let lifeCount = 0
let cells = []

function createCell() {
    // create cell record
    const id = lifeCount++
    const x = randomizeCoordinate('width')
    const y = randomizeCoordinate('height')
    const energy = 20
    const cell = new Cell(id, {x, y})
    cells.push(cell)
    // create cell element
    // const cell = document.createElement('div')
    // cell.className = 'cell'
    // cell.id = id
    // cell.style.marginLeft = x + 'px'
    // cell.style.marginTop = y + 'px'
    // worldElement.appendChild(cell)
}

function randomizeCoordinate(axis) {
    const axisProperty = axis === 'height' ? worldSize.height : worldSize.width
    roll = Math.round(Math.random() * axisProperty)
    return roll
}

let iterations = 10

const simulation = setInterval(()=>{
    cells.forEach(cell => {
        ({ energy } = cell.getCellData())
        if (energy <= 0) {
            return
        }
        if (energy > 10) {
            energy -= 20
            createCell() // add arguments to position the new cell next to parent
        }
        if (cell.energy > 0) {
            // move cell
        }
    })
    if (iterations > 0) {
        iterations -= 1
    } else {
        endSimulation()
    }
},1000)

function endSimulation() {
    clearInterval(simulation)
}

createCell()

