const DEFAULT_COLOR = '#000';
const DEFAULT_MODE = 'color';
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;


function setCurrentColor(newColor) {
  currentColor = newColor
}

function setCurrentMode(newMode) {
  currentMode = newMode
}

function setCurrentSize(newSize) {
  currentSize = newSize
}


const grid = document.getElementById('grid');
const colorMode = document.getElementById('color-mode');
const rainbowMode = document.getElementById('rainbow-mode');
const eraseBtn = document.getElementById('erase');
const clear = document.getElementById('clear');
const sliderValue = document.getElementById('slider-value');
const sizeSlider = document.getElementById('size-slider');
const colorPicker = document.getElementById('color-picker');


sizeSlider.onchange = (e) => remakeGrid(e.target.value);



function remakeGrid(size) {
  reloadGrid();
  createGrid(size);
}


function reloadGrid() {
  grid.innerHTML = "";
}

function createGrid(size) {
  grid.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';

  for(i = 0; i < size * size; i++) {
    const innerBox = document.createElement('div')
    innerBox.setAttribute('id', 'box' + i)
    grid.appendChild(innerBox);
  }

}