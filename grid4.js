const container = document.getElementById('container');



function makeGrid(){
    let gridSize = size*size;
    for ( i=0; i<gridSize; i++){
        console.log('row');
        const cell = document.createElement('div')
        cell.classList.add('cell');
        container.appendChild(cell);
        cell.addEventListener('mouseenter', function(e){
            cell.setAttribute('class', 'darkCell');
        })
        document.documentElement.style.setProperty("--rowNum", size);
        document.documentElement.style.setProperty("--colNum", size);
    }
}
let size = 16;

function clearGrid(){
    let cell = document.querySelector('.container');
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    size = prompt("Please select grid resolution (1-100)")
    makeGrid();
}

makeGrid();