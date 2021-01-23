const solveTheMaze = function(maze) {
    function moving(paths, row, column) {
        console.log(row, column)
        console.log(`"${maze[row][column]}"`)
        // //Base case
        if (maze[row][column] === "e") {
            //When the cell you start in has "e" in it, return "You win!"
            return paths
        }
        //General case
        console.log(paths)
        if ((maze[row + 1]?.[column] !== "*") && (maze[row + 1]?.[column] !== undefined)) {
            //moving down
            console.log("Trying to go down")
            const downPaths = solveTheMaze(maze, row + 1, column)
            paths = [...paths, ...downPaths].map(path => {
                return "D" + path
            })
            // paths.push("D" + " " + solveTheMaze(maze, row + 1, column))
        }
        if ((maze[row]?.[column + 1] !== "*") && (maze[row]?.[column + 1] !== undefined)) {
            //moving right
            console.log("Trying to go right")
            const rightPaths = solveTheMaze(maze, row, column + 1)
            paths = [...paths, ...rightPaths].map(path => {
                return "R" + path 
            })
            // paths.push("R" + " " + solveTheMaze(maze, row, column + 1))
        }
        if ((maze[row]?.[column - 1] !== "*") && (maze[row]?.[column - 1] !== undefined)) {
            //moving left
            const leftPaths = solveTheMaze(maze, row, column - 1)
            paths = [...paths, ...leftPaths].map(path => {
                return "L" + path
            })
            // paths.push("L" + " " + solveTheMaze(maze, row, column - 1))
        }
        if ((maze[row - 1]?.[column] !== "*") && (maze[row - 1]?.[column] !== undefined)) {
            //moving up
            const upPaths = solveTheMaze(maze, row - 1, column)
            paths = [...paths, ...upPaths].map(path => {
                return "U" + path
            })
            // paths.push("U" + " " + solveTheMaze(maze, row - 1, column))
        }
    }
    const paths = []
    return moving(paths, 0, 0)
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

console.log(solveTheMaze(mySmallMaze))