function initGame() {
    makeArray();
    spawnFood();
    spawnSnake();
    updateView();
    moveSnake();
}

function spawnSnake() {
    const { posX, posY } = randomXYpostion();
    model.data.snakePosition.head = { posX: posX, posY: posY }
}

function moveSnake() {
    setInterval(() => {
        renderSnakeAndFood();
        moveSnakeHead();

        if (JSON.stringify(model.data.snakePosition.head) == JSON.stringify(model.data.foodPosition)) {
            model.data.foodPosition = [];
            spawnFood();
            updateView();
        }

    }, 500);
}
function moveSnakeTail() { }

function moveSnakeHead() {
    const snakes = model.data.snakePosition
    switch (model.input.currentDirection) {
        case 'left':
            snakes.head.posY--
            break;
        case 'right':
            snakes.head.posY++
            break;
        case 'up':
            snakes.head.posX--
            break;
        case 'down':
            snakes.head.posX++
            break;
    }
}

function snakeEat() {

}

function changeDirection(direction) {
    model.input.currentDirection = direction;
}