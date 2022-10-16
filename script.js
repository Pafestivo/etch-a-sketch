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

const colorPicker = document.getElementById('color-picker');
const colorMode = document.getElementById('color-mode');
const rainbowMode = document.getElementById('rainbow-mode');
const eraseBtn = document.getElementById('erase');
const clear = document.getElementById('clear');
const sliderValue = document.getElementById('slider-value');
const sizeSlider = document.getElementById('size-slider');
const grid = document.getElementById('grid');

clear.onclick = () => resetGrid();
sizeSlider.onmousemove = (e) => matchSliderValue(e.target.value);
sizeSlider.onchange = (e) => remakeGrid(e.target.value);

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeColor(e) {
  if(e.type === 'mouseover' && !mouseDown) return
  if(currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  }
}

function resetGrid() {
  for(i = 0; i > currentSize * currentSize; i++) {
    const innerBox = getElementById('box' + i);
    innerBox.style.backgroundColor = 'white';
  }
}

function matchSliderValue(value) {
  sliderValue.innerHTML = `${value} x ${value}`;
}

function remakeGrid(size) {
  setCurrentSize(size)
  matchSliderValue(size)
  reloadGrid()
}

function reloadGrid() {
  clearGrid();
  createGrid(currentSize);
}

function clearGrid() {
  grid.innerHTML = "";
}

function createGrid(size) {
  grid.style.gridTemplateColumns = 'repeat(' + size + ', 1fr)';

  for(i = 0; i < size * size; i++) {
    const innerBox = document.createElement('div')
    innerBox.setAttribute('id', 'box' + i)
    innerBox.addEventListener('mouseover', changeColor)
    innerBox.addEventListener('mousedown', changeColor)
    grid.appendChild(innerBox);
  }
}

window.onload = () => createGrid(currentSize);