const solveTheMaze = function(maze, row, column) {
    //Base case
    if (maze[row][column] === "e") {
        return "You win!"
    }
    //General case
    if (maze[row][column + 1] === (" " || "e")) {
        //moving to the right
        return "R" + solveTheMaze(maze, row, column + 1)
    } else if (maze[row + 1][column] === (" " || "e")) {
        //moving down
        return "D" + solveTheMaze(maze, row + 1, column)
    } else if (maze[row][column - 1] === (" " || "e")) {
        //moving left
        return "L" + solveTheMaze(maze, row, column - 1)
    } else if (maze[row][column + 1] === "*") {
        //moving to the right, finding a wall, and moving down
        return "D" + solveTheMaze(maze, row + 1, column)
    } else if (maze[row + 1][column] !== undefined) {
        //moving down and having the exit be next
        return "D" + solveTheMaze(maze, row + 1, column)
    } else if (maze[row][column + 1] !== undefined) {
        //moving to the right and having the exit be next
        return "R" + solveTheMaze(maze, row, column + 1)
    }
}

let baseMaze = [
    ['e']
]

let mySmallMaze = [
    [' ', '*', ' '],
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

console.log(solveTheMaze(mySmallMaze, 0, 0))