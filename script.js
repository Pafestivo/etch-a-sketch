const gridBox = document.getElementById('grid'); //target the grid container




//choose size button
const chooseSize = document.getElementById('choose-size');
chooseSize.addEventListener('click', sizePicker);

function sizePicker() {
  
  const playerInput = prompt('Choose a number(1-64)');
  if(playerInput > 64) {
    alert("Please choose a number between 1-64");
    return;
  }

  function removeGrid() {
    while (gridBox.firstChild) {
      gridBox.removeChild(gridBox.firstChild);
    }
  }
  removeGrid();

  gridBox.style.gridTemplateColumns = 'repeat(' + playerInput + ', 1fr)';

  function createBoxes() {
    for (i = 0; i < (playerInput * playerInput); i++) {
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
  createBoxes();
  
  //clear button
  const clear = document.getElementById('clear'); 
  clear.addEventListener('click', clearColors);
  
  function clearColors() {
    for (i = 0; i < (playerInput * playerInput); i++) {
      const innerGrid = document.getElementById('box' + i);
      innerGrid.classList.remove('red-background');
    }
  }
  //end clear button
  
}

//end choose size button






