const gridBox = document.getElementById('grid'); //target the grid container
const colorInput = document.getElementById('color') //target the color picker input

//default grid area
function createBoxes() { //create default grid at 16:16
  for (i = 0; i < (16 * 16); i++) {
    const createBox = document.createElement('div'); //create new div
    createBox.setAttribute('id', 'box' + i); //give unique ID to each box
    gridBox.appendChild(createBox); //add the new boxes to the original grid div

    const innerGrid = document.getElementById('box' + i); // add event listener to each box using the loop
    innerGrid.addEventListener('mouseover', colorChange); //change color on hover
    function colorChange() {
      
      colorInput.addEventListener('change', changeBoxColor);
      function changeBoxColor() {

        let colorValue = colorInput.value; //allow color selection
        return colorValue;
      }
      innerGrid.style.backgroundColor = changeBoxColor();
    }
  }
}
createBoxes();

//clear button
const clear = document.getElementById('clear'); 
clear.addEventListener('click', clearColors);

function clearColors() {
  for (i = 0; i < (16 * 16); i++) { //reset the color of every box to white
    const innerGrid = document.getElementById('box' + i);
    innerGrid.style.backgroundColor = 'rgb(255, 255, 255)';
  }
}
//end clear button
//end of default grid area


//custom grid area
const chooseSize = document.getElementById('choose-size');
chooseSize.addEventListener('click', sizePicker); //run sizePicker() when choose size button clicked


function sizePicker() {
  const playerInput = prompt('Choose a number(1-64)');
  if(playerInput > 64) { //if given number was higher than 64 -> cancel
    alert("Please choose a number between 1-64");
    return;
  }


  function removeGrid() { //removing the current grid
    while (gridBox.firstChild) {
      gridBox.removeChild(gridBox.firstChild);
    }
  }
  removeGrid();


  gridBox.style.gridTemplateColumns = 'repeat(' + playerInput + ', 1fr)'; //change the css grid layout according to player's choice

  function createBoxes() { //create the grid according to player's choice
    for (i = 0; i < (playerInput * playerInput); i++) {
      const createBox = document.createElement('div'); //create new div
      createBox.setAttribute('id', 'box' + i); //give unique ID to each box
      gridBox.appendChild(createBox); //add the new boxes to the original grid div
  
      const innerGrid = document.getElementById('box' + i); // add event listener to each box using the loop
      innerGrid.addEventListener('mouseover', colorChange); //change color on hover
      function colorChange() {
      
        colorInput.addEventListener('change', changeBoxColor);
        function changeBoxColor() {

          let colorValue = colorInput.value; //allow color selection
          return colorValue;
        }

        innerGrid.style.backgroundColor = changeBoxColor();
      }
    }
  }
  createBoxes();
  
  //clear button
  const clear = document.getElementById('clear'); 
  clear.addEventListener('click', clearColors);
  
  function clearColors() {
    for (i = 0; i < (playerInput * playerInput); i++) { //reset the color of every box to white
      const innerGrid = document.getElementById('box' + i);
      innerGrid.style.backgroundColor = 'rgb(255, 255, 255)';
    }
  }
  //end clear button
  
}
//end of custom grid area





