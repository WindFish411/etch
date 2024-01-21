

createGrid(16);

//Need a new button that alerts the user and prompts input. 
let button2 = document.getElementById("squares");
button2.addEventListener("click", function(){
  let input = prompt("Please a number between 0 and 100.", 16);

  if(input === null){
    return;
  }

  let squares = parseInt(input);

    if(squares > 99 || squares < 1 || isNaN(squares)){
      alert ("Please choose a valid input.");
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

















