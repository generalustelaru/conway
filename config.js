
// world config
const cellSize = { var: '--cellSize', value: 35 }
const columns = { var: '--columns', value: 20 }
const rows = { var: '--rows', value: 20 }
const seeds = [
    // glider
    { row: 0, col: 1 },
    { row: 1, col: 2 },
    { row: 2, col: 0 },
    { row: 2, col: 1 },
    { row: 2, col: 2 },

    //pulsar
    {row: 4, col: 5},
    {row: 5, col: 5},
    {row: 6, col: 4},
    {row: 6, col: 6},
    {row: 7, col: 5},
    {row: 8, col: 5},
    {row: 9, col: 5},
    {row: 10, col: 5},
    {row: 11, col: 4},
    {row: 11, col: 6},
    {row: 12, col: 5},
    {row: 13, col: 5},
]
const iterations = 100;
const interval = 50;

// selectors
const root = document.documentElement;
const world = document.querySelector('.world')

//state
const state = { cells: [] }