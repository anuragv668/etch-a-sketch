const randomclr = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

let gridsize = 16;

const btn = document.createElement('button');
btn.onclick = () => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  gridsize = parseInt(window.prompt('Enter dimensions: '));
  mkgrid(gridsize);
};
btn.innerText = 'change';
body.insertBefore(btn, body.firstChild);

const btnDesc = document.createElement('h3');
btnDesc.innerText = 'Choose the grid dimensions';
body.insertBefore(btnDesc, body.firstChild);

const mkgrid = (gridDimensions) => {
    
  for (let i = 0; i < gridDimensions; i++ ) {
    let row = document.createElement('div')
    row.classList.add('row');
    for (let j = 0; j < gridDimensions; j++) {
      let square = document.createElement('div');
      square.classList.add('square');
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = randomclr();
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }

};

mkgrid(gridsize);


body.insertBefore(container, body.lastChild);

const title = document.createElement('h1');
title.innerText = 'Etch A Sketch';
body.insertBefore(title, body.firstChild);

