var shipData = [
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,"X",null,null],
[null,null,null,null,null,null,null,"X",null,null],
["X",null,"X","X","X","X",null,"X",null,null],
["X",null,null,null,null,null,null,null,null,null],
["X",null,null,null,null,null,null,null,"X",null],
["X",null,null,null,null,null,null,null,"X",null],
["X",null,null,null,null,null,null,null,"X",null],
[null,"X","X",null,null,null,null,null,"X",null]
];

/* Carrier - 5 hits
Battleship -4 hits
Destroyer -4 hits
Submarine -3 hits
Petrol Boat - 2 hits
*/


// if we hit, we wand to add 5pts. 
// If we miss, we deduct one.



//when you click start game
var gameState = [
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null],
[null,null,null,null,null,null,null,null,null,null]

]


function createGameBoard(){
	var gameBoard = document.getElementById("gameBoard");
	for (var i =0; i<10;i++){
			var tableRow =document.createElement("tr");
		tableRow.setAttribute("row",i);
		for (var j=0; j< 10; j++){
			var tableData = document.createElement("td");
			tableData.setAttribute("col",j);
			tableData.setAttribute("onclick","play(this)");
			//display whatever value in the table (x)
			tableData.innerHTML = shipData[i][j];
			tableRow.appendChild(tableData);
		}
		gameBoard.appendChild(tableRow);
	}
}


function play(cell) {
  var col = cell.getAttribute("col");
  var row = cell.parentElement.getAttribute("row");
  var score = Number(document.getElementById("score").innerHTML);


  if (gameState[row][col] == null) {
    if (shipData[row][col] == "X") {
      alert("Hit!");
      gameState[row][col] = "X";
      score +=5;
    } else {
      alert("You hit water!");
      gameState[row][col] = "O";
      score -=1;
    }
  } else {
    alert("You've already tried this one!");
  }
  document.getElementById("score").innerHTML = score;
  populateGameBoard(gameState);
}


function populateGameBoard(gameState) {
  var gameBoard = document.getElementById("gameBoard");
  for (var k = 0; k < gameState.length; k++) {
    var row = gameBoard.children[k];
    console.log(row);
    for (var l = 0; l < gameState[k].length; l++) {
      var col = row.children[l];
      console.log(col);
      col.innerHTML = gameState[k][l];
    }
  }
}




window.onload = function(){
	createGameBoard();
};


var startButton= document.getElementById("startButton");
	startButton.onclick = function (){
		//alert('I clicked a button');
		populateGameBoard(gameState);

	}