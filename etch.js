



//const gridNumber = document.getElementById("grid");
const button1 = document.getElementById("button");

button1.addEventListener('click',() => createGrid(16));

function createGrid(boxNumber){
    //need to create box divs inside of function. I'll worry about activating the input/button later. 
    //First step is to get the 16x16 grid displayed on the page. 

    const container = document.getElementById("container");
    container.innerHTML = "";
    let grid = [];

    for (let i = 0; i < boxNumber; i++) {
        grid[i] = [];
        for (let j = 0; j < boxNumber; j++) {
            const box = document.createElement('div');
            box.className = 'box';
            //container.appendChild(box);
            grid[i][j] = container.appendChild(box);
            container.appendChild(grid[i][j]);
            console.log(i);
            console.log(j);
      }
    }
}





