let currentPlayer = "X";
let gameState = [["", "", ""], ["", "", ""], ["", "", ""]];

function makeMove(row, col) {
  if (gameState[row][col] === "") {
    gameState[row][col] = currentPlayer;
    document.getElementById("board").children[row].children[col].innerText = currentPlayer;
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + " wins!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin(player) {
  // Check rows
  for (let i = 0; i < 3; i++) {
    if (
      gameState[i][0] === player &&
      gameState[i][1] === player &&
      gameState[i][2] === player
    ) {
      return true;
    }
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    if (
      gameState[0][i] === player &&
      gameState[1][i] === player &&
      gameState[2][i] === player
    ) {
      return true;
    }
  }

  // Check diagonals
  if (
    gameState[0][0] === player &&
    gameState[1][1] === player &&
    gameState[2][2] === player
  ) {
    return true;
  }
  if (
    gameState[0][2] === player &&
    gameState[1][1] === player &&
    gameState[2][0] === player
  ) {
    return true;
  }

  return false;
}

function resetBoard() {
  currentPlayer = "X";
  gameState = [["", "", ""], ["", "", ""], ["", "", ""]];
  let cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}