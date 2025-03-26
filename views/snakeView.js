function snakeView() {
    let hmtl = /*HTML*/`
    <table>
    ${model.data.snakeBoard.map((row) =>
        `<tr>
            ${row.map((col) => `
                <td class="${getCssClass(col)}"></td>`).join('')}
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
    for (let i = 0; i < 30; i++) {
        row.push(i)
        let column = [];
        for (let col = 0; col < 30; col++) {
            column.push({ isSnake: false, isFood: false })
        }
        model.data.snakeBoard.push(column);
    }
    model.data.snakeBoard.push(row);
}

function renderSnakeAndFood() {
    makeArray();
    model.data.snakeBoard[model.data.foodPosition[0].posX][model.data.foodPosition[0].posY].isFood = true;
    for (snake of model.data.snakePoistion) {
        console.log(snake.posX, snake.posY)
        if (snake.posX === 31) {
            snake.posX = 0;
            model.data.snakeBoard[snake.posX][snake.posY].isSnake = true;
        } else if (snake.posX < 0) {
            snake.posX = 30;
            model.data.snakeBoard[snake.posX][snake.posY].isSnake = true;
        } else if (snake.posY === 30) {
            snake.posY = 0;
            model.data.snakeBoard[snake.posX][snake.posY].isSnake = true;
        } else if (snake.posY < 0) {
            snake.posY = 29;
            model.data.snakeBoard[snake.posX][snake.posY].isSnake = true;
        } else
            model.data.snakeBoard[snake.posX][snake.posY].isSnake = true;
    }

    updateView();
}