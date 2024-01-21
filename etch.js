

//Need a new button that alerts the user and prompts input. 
let button2 = document.getElementById("squares");
button2.addEventListener("click", function(){
  let squares = prompt("Please a number under 100.", 16);

  if(squares > 99){
    alert ("Please choose a number under 100.");

  }
  else{
    let size = squares;
    createGrid(size);
  }
});




function createGrid(size) {
    const container = document.getElementById('container');
    container.innerHTML = '';

    

    container.style.setProperty('--columns', size);
    container.style.setProperty('--rows', size);

    for (let i = 0; i < (size * size); i++) {
      const box = document.createElement('div');
      box.className = 'box';
      container.appendChild(box);

      box.addEventListener('mouseover', function(){
            const randomColor = randomRgbColor();
            box.style.backgroundColor = `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]}`
    
      });

    }
  }
  
//randomInteger + randomRgbColor generates a random color. 
function randomInteger(max) {
    return Math.floor(Math.random()*(max + 1));
}


function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}

















