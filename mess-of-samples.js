const container = document.getElementById('container')


function makeGrid(size) {
    let gridSize = size * size;
    for (i=0; i<gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.append(cell);
        cell.addEventListener('mouseenter', function(e) {
            const radio = document.getElementsByClassName('radio')
            if radio.document.documentElement.value=="gridReg" 
            cell.style.backgroundColor = 'black';
        });
    }
    document.documentElement.style.setProperty("--rowNum", size);
    document.documentElement.style.setProperty("--colNum", size);
}

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

