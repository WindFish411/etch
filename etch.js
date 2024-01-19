//Need to use Javascript to create a 16x16 grid. 

// Creating a 16x16 grid (2D array)



//prompt user for # of squares for grid
//add event listener upon entering input to run function createGrid(numberOfSquares)
const square = document.getElementByClass("square");

function createGrid(){
    const grid = [];
    for (let i = 0; i < 16; i++) {
        grid[i] = [];
        for (let j = 0; j < 16; j++) {
            grid[i][j] = 0; // Initialize each cell with a value (e.g., 0)
        }
    }
}