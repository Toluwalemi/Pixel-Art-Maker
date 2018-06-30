function makeGrid(height, width) {
  var table = document.getElementById("pixel_canvas");
  var grid = '';

  // this loops over each row
  for (var i = 0; i < height; i++){
    grid += '<tr class="row-' + i + '">';
    // loop for each cell
    for (var j = 0; j < width; j++){
      grid += '<td class="cell" id="row-' + i + '_cell-' + j + '"></td>';
    }
    grid += '</tr>';
  }

  // this adds grid into the table element
  table.innerHTML = grid;

  // Add click event to grid cells once the table grid has been created
  addClickEventToCells();
}

// gets values for height and width from form and uses them to call makrGrid()
function formSubmission() {
    event.preventDefault();
    var height = document.getElementById('input_height').value;
    var width = document.getElementById('input_width').value;
    makeGrid(height, width);
}

// this function adds click events to all cells
function addClickEventToCells() {
  var cells = document.getElementsByClassName('cell');
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click",  function(event) {
      var clickedCell = event.target;
      clickedCell.style.backgroundColor = selectedColor;
    });
  }
}

// on color selection return color:
var colorPicker = document.getElementById("colorPicker");
var selectedColor = colorPicker.value; // sets color to defaul(black);
colorPicker.addEventListener("input", function() {
  selectedColor = colorPicker.value;
  }, false);


document.getElementById('sizePicker').onsubmit = function() {
  formSubmission();
};

// Build a default 10x10 grid.
makeGrid(16,16);
