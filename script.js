const container = document.querySelector('.container');
const create_Grid = document.querySelector('.create_grid');
const reset = document.querySelector('.reset');

let currentGridSize = 16;

const createGrid = (size) => {
    const squareSize = 520/size;
    container.innerHTML = '';

    for(let i = 0; i < size * size; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    };
}

createGrid(16);

create_Grid.addEventListener('click', () => {
    let noOfSquares = prompt('Please enter the no. of squares per side');
    if (noOfSquares < 1 || noOfSquares > 100){
        alert('Please enter a valid no, between 1 and 100');
    }
    else {
  currentGridSize = noOfSquares;
  createGrid(currentGridSize);
}
});

reset.addEventListener('click', () => {
    container.innerHTML = '';
    createGrid(currentGridSize);
});

container.addEventListener('mousedown', (e) => {
    if(e.button === 0) {
        penDown = true;
    }
});

container.addEventListener('mouseup', () => {
    penDown = false;
});

container.addEventListener('mousemove', (e) => {
    if(penDown && e.target.classList.contains('square')){
            e.target.style.backgroundColor = '#ed0cde';
    }
});
