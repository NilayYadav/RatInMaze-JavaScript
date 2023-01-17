function createMaze() {
    var maze = document.getElementById("maze");
    var mazeArray = [];
    var mazeRows = 15;
    var mazeCols = 15;
  
    // Create a 2D array with random values (0 for path, 1 for wall)
    for (var i = 0; i < mazeRows; i++) {
      mazeArray[i] = new Array(mazeCols);
      for (var j = 0; j < mazeCols; j++) {
        mazeArray[i][j] = Math.round(Math.random());
      }
    }
  
    // Create the maze using the mazeArray
    for (var i = 0; i < mazeArray.length; i++) {
      var row = maze.insertRow();
      for (var j = 0; j < mazeArray[i].length; j++) {
        var cell = row.insertCell();
        if (mazeArray[i][j] == 1) {
          cell.classList.add("wall");
        } else {
          cell.classList.add("path");
        }
      }
    }
    
    // Add the rat to the maze
    var rat = document.getElementById("rat");
    var startingRow = Math.floor(Math.random() * (mazeRows - 2)) + 1;
    var startingCol = Math.floor(Math.random() * (mazeCols - 2)) + 1;
    while (mazeArray[startingRow][startingCol] === 1) {
      startingRow = Math.floor(Math.random() * (mazeRows - 2)) + 1;
      startingCol = Math.floor(Math.random() * (mazeCols - 2)) + 1;
    }
    rat.style.top = startingRow * 50 + "px";
    rat.style.left = startingCol * 50 + "px";
  }
  