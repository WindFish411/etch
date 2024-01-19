



//const gridNumber = document.getElementById("grid");
const button1 = document.getElementById("button");
let boxNumber = 0; 

button1.addEventListener('click',() => createGrid(16));


function createGrid(boxNumber){
    const grid = [];
    for (let i = 0; i < boxNumber; i++) {
        grid[i] = [];
        for (let j = 0; j < boxNumber; j++) {
            grid[i][j] = 0; 
           console.log(grid);
        }
    }
}
