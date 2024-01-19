
//randomInteger + randomRgbColor generates a random color. 
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}


function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
    //need to find a way to add this to CSS for boxes
}


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

      box.addEventListener('mouseover', function(){
            const randomColor = randomRgbColor();
            box.id = 'coloredBox';
            coloredBox.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}}`
      });
    }
  }
  
//How I want to approach: Create new class -> upon mouse hover -> add new class
















