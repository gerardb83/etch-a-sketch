const container = document.getElementById('container');
const button1 = document.getElementById('button1')
const button2 = document.getElementById('button2')
const button3 = document.getElementById('button3')


function makeGrid(){
    let gridSize = size*size;
    for ( i=0; i<gridSize; i++){
        console.log('row');
        const cell = document.createElement('div')
        cell.classList.add('cell');
        container.appendChild(cell);
        if(button1.checked){
            basicGrid(cell);    
        } else if (button2.checked){
            charcoalGrid(cell);
        } else {
            colorGrid(cell);
        }
        document.documentElement.style.setProperty("--rowNum", size);
        document.documentElement.style.setProperty("--colNum", size);
    }
}
let size = 16;

function basicGrid(cell){
    cell.addEventListener('mouseenter', function(e){
        cell.style.backgroundColor = 'black';
    })
}

function charcoalGrid(cell){
    cell.addEventListener('mouseenter', function(e){
        cell.style.backgroundColor = 'black';
        cell.style.opacity -= '-0.15';
    })    
}

function colorGrid(cell){
    cell.addEventListener('mouseenter', function(e){
        cell.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        });    
    }
    
    

    

function clearGrid(){
    let cell = document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    size = prompt("Please select grid resolution (1-100)")
    makeGrid();
}

makeGrid();