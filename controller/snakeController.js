function initGame() {
    makeArray();
    spawnFood();
    spawnSnake();
    updateView();
    moveSnake();
}

function spawnSnake() {
    const { posX, posY } = randomXYpostion();
    model.data.snakePoistion.push({ posX: posX, posY: posY })

}

function moveSnake() {
    setInterval(() => {
        renderSnakeAndFood();
        moveSnakeIncurrentDirection();
        if (JSON.stringify(model.data.snakePoistion) == JSON.stringify(model.data.foodPosition)) {

            console.log('does this ever run')
            model.data.foodPosition = [];
            spawnFood();
            updateView();
        }
    }, 500);
}

function moveSnakeIncurrentDirection() {
    const snake = model.data.snakePoistion
    switch (model.input.currentDirection) {
        case 'left':
            snake[0].posY = snake[0].posY - 1
            break;
        case 'right':
            snake[0].posY = snake[0].posY + 1
            break;
        case 'up':
            snake[0].posX = snake[0].posX - 1
            break;
        case 'down':
            snake[0].posX = snake[0].posX + 1
            break;
    }
}

function snakeEat() {

}

function changeDirection(direction) {
    model.input.currentDirection = direction;
    console.log(model.currentDirection)
}