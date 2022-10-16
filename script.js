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
  console.log(currentMode);
}

function setCurrentSize(newSize) {
  currentSize = newSize
}

const colorPicker = document.getElementById('color-picker');
const colorBtn = document.getElementById('color-mode');
const rainbowBtn = document.getElementById('rainbow-mode');
const eraseBtn = document.getElementById('erase');
const clear = document.getElementById('clear');
const sliderValue = document.getElementById('slider-value');
const sizeSlider = document.getElementById('size-slider');
const grid = document.getElementById('grid');


colorPicker.onchange = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode('color');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraseBtn.onclick = () => setCurrentMode('erase');
clear.onclick = () => remakeGrid(currentSize);
sizeSlider.onmousemove = (e) => matchSliderValue(e.target.value);
sizeSlider.onchange = (e) => remakeGrid(e.target.value);


let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function changeColor(e) {
  if(e.type === 'mouseover' && !mouseDown) return
  if(currentMode === 'color') {
    e.target.style.backgroundColor = currentColor;
  } else if(currentMode === 'erase') {
    e.target.style.backgroundColor = '#fff';
  } else if(currentMode === 'rainbow') {
    let randomR = Math.floor(Math.random() * 256)
    let randomG = Math.floor(Math.random() * 256)
    let randomB = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = 'rgb('+randomR+','+randomG+','+randomB+')';
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