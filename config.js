
const config = {
    cellSize: { var: '--cellSize', value: 35 },
    columns: { var: '--columns', value: 20 },
    rows: { var: '--rows', value: 20 },
    seeds: [
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
    ],
    iterations: 100,
    interval: 50,
}