




const button1 = document.getElementById("button");
button1.addEventListener('click',() => createGrid(16));


function createGrid(boxNumber) {
    const container = document.getElementById("container");
  
    for (let i = 0; i < boxNumber; i++) {
      const box = document.createElement('div');
      box.className = 'box';
      container.appendChild(box);
    }
  }
  
 








//Rebuilding logic. Saving old logic just in case. 

//button2.addEventListener('click',() => displayGrid())

/*
function createGrid(boxNumber){
    const container = document.getElementById("container");
    let grid = [];
    for (let i = 0; i < boxNumber; i++) {
        grid[i] = [];
        for (let j = 0; j < boxNumber; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            container.appendChild(box);
            grid[i][j] = box;
      }
    }
    return grid;
}

const container = document.getElementById("container");

function displayGrid(grid){
    container.innerHTML = '';
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            container.appendChild(grid[i][j]);
            console.log(grid);
        }
    }
}
*/




