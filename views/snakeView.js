function snakeView() {
    let hmtl = /*HTML*/`
    <table>
    ${model.data.snakeBoard.map((row) =>
        `<tr>
            ${row.map((col) => `
                <td class="${getCssClass(col)}">${col.pos}</td>`).join('')}
            </tr>`
    ).join('')}
    
    </table>
    <br>
    <button onclick="changeDirection('left')">←</button>
    <button onclick="changeDirection('up')">↑</button>
    <button onclick="changeDirection('right')">→</button>
    <button onclick="changeDirection('down')">↓</button>
  `
    return hmtl;
}

function makeArray() {
    model.data.snakeBoard = [];
    let row = []
    let column = []
    for (let i = 0; i <= 30; i++) {
        row.push(i)
        column = [];
        for (let col = 0; col <= 30; col++) {
            column.push({ pos: [i, col], isSnake: false, isFood: false })
        }
        model.data.snakeBoard.push(column);
    }

}

function renderSnakeAndFood() {
    makeArray();
    model.data.snakeBoard[model.data.foodPosition.posX][model.data.foodPosition.posY].isFood = true;
    const snake = model.data.snakePosition;
    //to check if snake is out of bounds
    if (snake.head.posX > 30) {
        snake.head.posX = 0;
        model.data.snakeBoard[snake.head.posX][snake.head.posY].isSnake = true;
    } else if (snake.head.posX < 0) {
        snake.head.posX = 30;
        model.data.snakeBoard[snake.head.posX][snake.head.posY].isSnake = true;
    } else if (snake.head.posY > 30) {
        snake.head.posY = 0;
        model.data.snakeBoard[snake.head.posX][snake.head.posY].isSnake = true;
    } else if (snake.head.posY < 0) {
        snake.head.posY = 30;
        model.data.snakeBoard[snake.head.posX][snake.head.posY].isSnake = true;
    } else
        model.data.snakeBoard[snake.head.posX][snake.head.posY].isSnake = true;
    updateView();
}