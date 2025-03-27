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
    checkIfInBounds(model.data.snakePosition)
    updateView();

}

function checkIfInBounds(object) {

    if (object.head.posX > 30) {
        object.head.posX = 0;
    } else if (object.head.posX < 0) {
        object.head.posX = 30;
    }

    if (object.head.posY > 30) {
        object.head.posY = 0;
    } else if (object.head.posY < 0) {
        object.head.posY = 30;
    }

    if (object.tail.posX > 30) {
        object.tail.posX = 0;
    } else if (object.tail.posX < 0) {
        object.tail.posX = 30;
    }

    if (object.tail.posY > 30) {
        object.tail.posY = 0;
    } else if (object.tail.posY < 0) {
        object.tail.posY = 30;
    }

    model.data.snakeBoard[object.head.posX][object.head.posY].isSnakeHead = true;
    model.data.snakeBoard[object.tail.posX][object.tail.posY].isSnakeTail = true;

}