const container = document.getElementById('container')



makeGrid(16);

function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    makeGrid();
}

function pencilGrid(size){
    let totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++){
        const newSquare = document.createElement('div');
        newSquare.classList.add('newSquare');
        gridContainer.appendChild(newSquare);
        newSquare.addEventListener('mouseover', function(e){
            newSquare.style.backgroundColor = 'black';
            newSquare.style.opacity -= '-0.1';
        });    

    }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
}

function colorfulGrid(size){
    let totalSquares = size * size;
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    for (let i = 0; i < totalSquares; i++){
        const newSquare = document.createElement('div');
        newSquare.classList.add('newSquare');
        gridContainer.appendChild(newSquare);
        newSquare.addEventListener('mouseover', function(e){
            newSquare.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            newSquare.style.border = '0px';
        });    

    }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
}


const colorInput = document.querySelector('#color');
colorInput.addEventListener('click', changeColor);

function changeColor() {
    document.documentElement.style.setProperty('--color', this.value);
}


const container = document.querySelector('.container');
let size = 16;

makeGrid();

function makeGrid() {
    const cellSize = (600 - 2)/size;
    for (let i=0; i< (size*size); i++) {
        console.log('row')
        const cell = document.createElement('div');
        cell.style.height = `${cellSize}px`;
        cell.style.width = `${cellSize}px`;
        cell.classList.add('cell');
        container.appendChild(cell);             
        cell.addEventListener('mouseenter', fillColor);
        }
    }



    function makeColor(cell){
        if(cell.style.backgroundColor == `rgb(255, 255, 255)`){
            const red=(Math.floor(Math.random()*(256-1))+1);
            const green=(Math.floor(Math.random()*(256-1))+1);
            const blue=(Math.floor(Math.random()*(256-1))+1);
            const firstColor = `rgb(` + red + `,` + green + `,` + blue + `)`;
            cell.style.backgroundColor = firstColor;        
        } else {
            let currentColor = cell.style.backgroundColor
            currentColor = currentColor.replace(/[^\d,]/g,'').split(',');
            for(i=0; i<currentColor.length; i++){
                currentColor[i] = parseInt(currentColor[i]);
                currentColor[i] = Math.floor(currentColor[i] * 0.2);
            }
            cell.style.backgroundColor = `rgb(` + currentColor[0] + `,` + currentColor[1] + `,` + currentColor[2] + `)`;
        }
      }
    }