
// world config
const cellSize = { var: '--cellSize', value: 35 }
const columns = { var: '--columns', value: 20 }
const rows = { var: '--rows', value: 20 }
const seeds = [
    { row: 0, col: 1 },
    { row: 1, col: 2 },
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },
]
const iterations = 100;
const interval = 100;

// selectors
const root = document.documentElement;
const world = document.querySelector('.world')

//state
const state = { cells: [] }