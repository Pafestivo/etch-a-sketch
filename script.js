const gridBox = document.getElementById('grid'); //target the grid container

function createBoxes() {
  for (i = 0; i < (16 * 16); i++) {
    const createBox = document.createElement('div'); //create new div
    createBox.classList.add('inner-grid');
    createBox.setAttribute('id', 'box' + i);
    gridBox.appendChild(createBox);

    const innerGrid = document.getElementById('box' + i);
    innerGrid.addEventListener('mouseover', colorChange);

    function colorChange() {
    innerGrid.classList.add('red-background');
    }
  }
}

//clear button
const clear = document.getElementById('btn'); 
clear.addEventListener('click', clearColors);

function clearColors() {
  for (i = 0; i < (16 * 16); i++) {
    const innerGrid = document.getElementById('box' + i);
    innerGrid.classList.remove('red-background');
  }
}
//end clear button

createBoxes();




