
// world config
const cellSize = { var:'--cellSize', value: 35}
const columns = { var:'--columns', value: 15}
const rows = { var:'--rows', value: 15}
const seed = {
    row: 0,
    col: 0
}
const iterations = 10
const interval = 100

// selectors
const root = document.documentElement;
const world = document.querySelector('.world')

//state
const cells = []