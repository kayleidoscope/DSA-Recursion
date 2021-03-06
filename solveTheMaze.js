let ticks = 0;

const solveTheMaze = function(maze, row, column, step) {
    let currentMaze = maze
    // //Base case
    if (currentMaze[row][column] === "e") {
        ticks++;
        console.log({ticks})
        return "You win!"
    }
    currentMaze[row][column] = "*"
    //General case
    if ((currentMaze[row + 1]?.[column] !== "*") && (currentMaze[row + 1]?.[column] !== undefined)) {
        //moving down
        ticks++;
        return "D" + " " + solveTheMaze(maze, row + 1, column, step + 1)
    }
    if ((currentMaze[row]?.[column + 1] !== "*") && (currentMaze[row]?.[column + 1] !== undefined)) {
        //moving right
        ticks++;
        return "R" + " " + solveTheMaze(maze, row, column + 1, step + 1)
    }
    if ((currentMaze[row]?.[column - 1] !== "*") && (currentMaze[row]?.[column - 1] !== undefined)) {
        //moving left
        ticks++;
        return "L" + " " + solveTheMaze(maze, row, column - 1, step + 1)
    }
}

let baseMaze = [
    ['e']
]

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(solveTheMaze(mySmallMaze, 0, 0, 0))