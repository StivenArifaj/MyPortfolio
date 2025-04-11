document.addEventListener("DOMContentLoaded", function () {
    const board = document.getElementById("board");
    let currentPlayer = "X";
    let gameBoard = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

    function createCell(row, col) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.dataset.row = row;
        cell.dataset.col = col;
        cell.addEventListener("click", handleCellClick);
        board.appendChild(cell);
    }

    function createBoard() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                createCell(row, col);
            }
        }
    }

    function renderBoard() {
        board.innerHTML = "";
        gameBoard.forEach((row, rowIndex) => {
            row.forEach((cell, colIndex) => {
                const cellElement = document.createElement("div");
                cellElement.className = "cell";
                cellElement.textContent = cell;
                cellElement.dataset.row = rowIndex;
                cellElement.dataset.col = colIndex;
                cellElement.addEventListener("click", handleCellClick);
                board.appendChild(cellElement);
            });
        });
    }

    function handleCellClick(event) {
        const row = parseInt(event.target.dataset.row);
        const col = parseInt(event.target.dataset.col);

        if (gameBoard[row][col] === "") {
            gameBoard[row][col] = currentPlayer;
            renderBoard();

            if (checkWinner()) {
                alert(`Player ${currentPlayer} wins!`);
                highlightWinnerCells();
                resetGame();
            } else if (isBoardFull()) {
                alert("It's a tie!");
                resetGame();
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    function checkWinner() {
        // Check rows, columns, and diagonals
        for (let i = 0; i < 3; i++) {
            if (
                gameBoard[i][0] === currentPlayer &&
                gameBoard[i][1] === currentPlayer &&
                gameBoard[i][2] === currentPlayer
            ) {
                return true; // Row
            }
            if (
                gameBoard[0][i] === currentPlayer &&
                gameBoard[1][i] === currentPlayer &&
                gameBoard[2][i] === currentPlayer
            ) {
                return true; // Column
            }
        }

        if (
            gameBoard[0][0] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][2] === currentPlayer
        ) {
            return true; // Diagonal
        }

        if (
            gameBoard[0][2] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][0] === currentPlayer
        ) {
            return true; // Diagonal
        }

        return false;
    }

    function isBoardFull() {
        return gameBoard.every(row => row.every(cell => cell !== ""));
    }

    function resetGame() {
        currentPlayer = "X";
        gameBoard = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
        ];
        renderBoard();
    }

    function highlightWinnerCells() {
        // Highlight the winning cells
        for (let i = 0; i < 3; i++) {
            if (
                gameBoard[i][0] === currentPlayer &&
                gameBoard[i][1] === currentPlayer &&
                gameBoard[i][2] === currentPlayer
            ) {
                highlightCells(i, 0, i, 1, i, 2); // Row
                return;
            }
            if (
                gameBoard[0][i] === currentPlayer &&
                gameBoard[1][i] === currentPlayer &&
                gameBoard[2][i] === currentPlayer
            ) {
                highlightCells(0, i, 1, i, 2, i); // Column
                return;
            }
        }

        if (
            gameBoard[0][0] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][2] === currentPlayer
        ) {
            highlightCells(0, 0, 1, 1, 2, 2); // Diagonal
            return;
        }

        if (
            gameBoard[0][2] === currentPlayer &&
            gameBoard[1][1] === currentPlayer &&
            gameBoard[2][0] === currentPlayer
        ) {
            highlightCells(0, 2, 1, 1, 2, 0); // Diagonal
        }
    }

    function highlightCells(row1, col1, row2, col2, row3, col3) {
        // Add a class to the winning cells for styling
        const cells = document.querySelectorAll(
            `[data-row="${row1}"][data-col="${col1}"],` +
            `[data-row="${row2}"][data-col="${col2}"],` +
            `[data-row="${row3}"][data-col="${col3}"]`
        );
        cells.forEach(cell => cell.classList.add("win"));
    }

    createBoard();
    renderBoard();
});
