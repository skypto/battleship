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


function createGameBoard(){
	var gameBoard = document.getElementById("gameBoard");
	for (var i =0; i<10;i++){
			var tableRow =document.createElement("tr");
		tableRow.setAttribute("row",i);
		for (var j=0; j< 10; j++){
			var tableData = document.createElement("td");
			tableData.setAttribute("col",j);
			//display whatever value in the table (x)
			tableData.innerHTML = shipData[i][j];
			tableRow.appendChild(tableData);
		}
		gameBoard.appendChild(tableRow);
	}
}

window.onload = function(){
	createGameBoard();
};