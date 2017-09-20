var shipData = [ // shows exactly where our ships are

    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, "X", null],
    [null, null, null, null, null, null, null, null, "X", null],
    [null, null, null, null, null, null, null, null, "X", null],
    [null, null, "X", "X", "X", "X", "X", null, null, null],
    ["X", null, null, null, null, null, null, null, null, null],
    ["X", null, null, null, null, null, null, null, null, null],
    ["X", null, null, null, null, null, null, null, null, null],
    ["X", null, null, null, null, null, null, null, null, null],
    [null, null, "X", null, null, null, null, "X", "X", null],

];


var gameState = [ // shows the natural state/reset of the board

    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
]



// below we are create a 10 row / 10 column grid


function createGameBoard() {
    var gameBoard = document.getElementById("gameBoard");
    for (i = 0; i < 10; i++) {
        var tableRow = document.createElement("tr");
        tableRow.setAttribute("row", i);

        for (var j = 0; j < 10; j++) {
            var tableData = document.createElement("td");
            tableData.setAttribute("col", j);
            tableData.setAttribute("onclick", "play(this)");
            tableData.innerHTML = shipData[i][j];
            tableRow.appendChild(tableData);
        }
        gameBoard.appendChild(tableRow);
    }
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


function hasGameEnded(hits){
 	if (hits === 0){
     	alert("You won the game");
        var tds = document.getElementsByTagName("td");
        for (var i = 0; i < tds.length; i++){
			tds[i].onclick = function(){
             	alert("The game has finished!"); 
            }
        }
    }
}

function play(cell) {
    var col = cell.getAttribute("col")
    var row = cell.parentElement.getAttribute("row");
    var score = Number(document.getElementById("score").innerHTML);
    var hits = Number(document.getElementById("hits").innerHTML);

     if (gameState[row][col] == null) {
        if (shipData[row][col] == "X") {
            alert("Hit!");
            gameState[row][col] = "X";
            score += 5;
            hits -= 1;
        } else {
            alert("You hit water!");
            gameState[row][col] = "O";
            score -= 1;
        }
    } else {
        alert("you're aleady tried this one");

    }
    document.getElementById("score").innerHTML = score;
    document.getElementById("hits").innerHTML = hits;
    populateGameBoard(gameState);
    hasGameEnded(hits);
}



window.onload = function () {
    createGameBoard();
};

var startButton = document.getElementById("startButton");
startButton.onclick = function () {
    // alert("i clicked a button");
    populateGameBoard(gameState);
};