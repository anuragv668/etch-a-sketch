const body = document.querySelector('body');
const container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < 16; i++ ) {
  let row = document.createElement('div')
  row.classList.add('row');
  for (let j = 0; j < 16; j++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'black';
    });
    row.appendChild(square);
  }
  container.appendChild(row);
}


body.insertBefore(container, body.firstChild);
