function initGame() {
    makeArray();
    spawnFood();
    spawnSnake();
    updateView();
    moveSnake();
}

function spawnSnake() {
    model.data.snakePosition.head = spawnObject(model.data.snakePosition.head)
    model.data.snakePosition.tail = {
        posX: model.data.snakePosition.head.posX,
        posY: model.data.snakePosition.head.posY - 1
    }

}

function moveSnake() {
    setInterval(() => {
        renderSnakeAndFood();
        moveSnakeTail();
        moveSnakeHead();

        if (JSON.stringify(model.data.snakePosition.head) == JSON.stringify(model.data.foodPosition)) {
            model.data.foodPosition = [];
            spawnFood();
            updateView();
        }

    }, 500);
}
function moveSnakeTail() {
    const snake = model.data.snakePosition

    switch (model.input.userSetDirection) {

        case 'up':
            if (snake.snakeCurrentDirection === 'down') return;
            if (snake.snakeCurrentDirection === 'up') {
                snake.tail.posX--;
                break;
            }
            if (snake.snakeCurrentDirection === 'right') {
                if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY++;
                    break;
                } else {
                    snake.tail.posX--;
                    break;
                }
            } else {
                if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY--;
                    break;
                } else {
                    snake.tail.posX--;
                    break;
                }
            }
        case 'left':
            if (snake.snakeCurrentDirection === 'right') return;
            if (snake.snakeCurrentDirection === 'up') {

                if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.tail.posX)) {
                    snake.tail.posX--;
                    break;
                } else {
                    snake.tail.posY--;
                    break;
                }
            } else if (snake.snakeCurrentDirection === 'down') {
                if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.tail.posX)) {
                    snake.tail.posX++;
                    break;
                } else {
                    snake.tail.posY--;
                    break;
                }
            } else {
                snake.tail.posY--;
                break;
            }
        case 'right':
            if (snake.snakeCurrentDirection === 'left') return;
            if (!snake.snakeCurrentDirection === 'up') {
                if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.tail.posX)) {
                    snake.tail.posX--
                    break;
                } else {
                    snake.tail.posY++
                    break;
                }
            } else if (snake.snakeCurrentDirection === 'down') {
                if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.tail.posX)) {
                    snake.tail.posX++
                    break;
                } else {
                    snake.tail.posY--
                    break;
                }
            } else {
                snake.tail.posY++
                break;
            }
        case 'down':
            if (snake.snakeCurrentDirection === 'up') return;
            if (snake.snakeCurrentDirection === 'down') {
                snake.tail.posX++;
                break;
            }
            if (snake.snakeCurrentDirection === 'right') {
                if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY++;
                    break;
                } else {
                    snake.tail.posX++;
                    break;
                }
            } else {
                if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY--;
                    break;
                } else {
                    snake.tail.posX++;
                    break;
                }
            }
    }
    model.data.snakePosition.snakeCurrentDirection = model.input.userSetDirection
}

function moveSnakeHead() {
    const snake = model.data.snakePosition
    switch (model.input.userSetDirection) {
        case 'left':
            snake.head.posY--
            break;
        case 'right':
            snake.head.posY++
            break;
        case 'up':
            snake.head.posX--
            break;
        case 'down':
            snake.head.posX++
            break;
    }
}

function snakeEat() {

}

function changeDirection(direction) {
    model.input.userSetDirection = direction;
}