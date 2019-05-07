function renderGrid(){
	var blocks = document.getElementById("grid_container").children;
	var pad = 0, cols = 4, newleft, newtop;
	for(var i = 1; i < blocks.length; i++){
		if (i % cols == 0) {
			newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
		    blocks[i].style.top = newtop+"px";
		} else {
			if(blocks[i-cols]){
				newtop = (blocks[i-cols].offsetTop + blocks[i-cols].offsetHeight) + pad;
				blocks[i].style.top = newtop+"px";
			}
			newleft = (blocks[i-1].offsetLeft + blocks[i-1].offsetWidth) + pad;
			blocks[i].style.left = newleft+"px";	
		}
    }
}
window.addEventListener("load", renderGrid, false);
window.addEventListener("resize", renderGrid, false);

const container = document.querySelector('grid_container');

const newDiv = document.createElement('div');
newDiv.classList.add('newDiv');
newDiv.textContent = 'Hello World!'

container.appendChild(newDiv);


/*
const container = document.querySelector('#container');
let grid;

function createDiv(grid) {
	for (i = 0, i >= grid; i++) {
		const div[i] = document.createElement() 
		container.appendChild(div[i])
	}	
}

const div = document.createElement('div');
container.appendChild(div);
*/