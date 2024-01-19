




const button1 = document.getElementById("button");
button1.addEventListener('click', function(){
    let gridInput = document.getElementById("grid").value;
    let size = gridInput;
    createGrid(size);
});


function createGrid(size) {
    const gridInput = document.getElementById('container');
    container.innerHTML = '';

    container.style.setProperty('--columns', size);
    container.style.setProperty('--rows', size);

    for (let i = 0; i < (size * size); i++) {
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




