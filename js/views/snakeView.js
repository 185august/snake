function snakeView() {
    makeArray();

    let hmtl = /*HTML*/`
    <table>
    ${model.snakeBoard.map((row) =>
        `<tr>
            ${row.map((col) => `
                <td class="square"></td>`).join('')}
            </tr>`
    ).join('')}
    <table>
  `
    return hmtl;
}

function makeArray() {
    model.snakeBoard = [];
    let row = []
    for (let i = 0; i < 30; i++) {
        row.push(i)
        let column = [];
        for (let col = 0; col < 30; col++) {
            column.push({ isSnake: false })
        }
        model.snakeBoard.push(column)
    }
    model.snakeBoard.push(row)
}

function spawnSnake() {
    randomX = Math.floor(Math.random() * 31)
    randomY = Math.floor(Math.random() * 31)
}