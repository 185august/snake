function initGame() {
    makeArray();
    spawnFood();
    spawnSnake();
    updateView();
    moveSnake();
}

function spawnSnake() {
    model.data.snakePosition.head = spawnObject(model.data.snakePosition.head)
    model.data.snakePosition.body.push({
        posX: model.data.snakePosition.head.posX,
        posY: model.data.snakePosition.head.posY - 1
    })
    model.data.snakePosition.tail = {
        posX: model.data.snakePosition.head.posX,
        posY: model.data.snakePosition.body[0].posY - (model.data.snakePosition.body.length)
    }
}

function moveSnake() {
    setInterval(() => {
        renderSnakeAndFood();
        moveSnakeTail();
        moveSnakeBody();
        moveSnakeHead();

        if (JSON.stringify(model.data.snakePosition.head) == JSON.stringify(model.data.foodPosition)) {
            model.data.foodPosition = [];
            spawnFood();
            updateView();
        }

    }, 500);
}

function moveSnakeBody() {
    const snake = model.data.snakePosition
    for (let i = 0; i < snake.body.length; i++) {
        switch (model.input.userSetDirection) {
            case 'up':
                if (snake.snakeCurrentDirection === 'up') {
                    snake.body.posX--
                    break;
                }
                if (snake.snakeCurrentDirection === 'right') {
                    if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.body.posX)) {
                        snake.body.posY++;
                        break;
                    } else {
                        snake.body.posX--;
                        break;
                    }
                } else {
                    if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.body.posX)) {
                        snake.body.posY--;
                        break;
                    } else {
                        snake.body.posX--;
                        break;
                    }
                }
            case 'left':
                if (snake.snakeCurrentDirection === 'up') {

                    if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.body.posX)) {
                        snake.body.posX--;
                        break;
                    } else {
                        snake.body.posY--;
                        break;
                    }
                } else if (snake.snakeCurrentDirection === 'down') {
                    if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.body.posX)) {
                        snake.body.posX++;
                        break;
                    } else {
                        snake.body.posY--;
                        break;
                    }
                } else {
                    snake.body.posY--;
                    break;
                }
            case 'right':
                if (snake.snakeCurrentDirection === 'up') {
                    if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.body.posX)) {
                        snake.body.posX--
                        break;
                    } else {
                        snake.body.posY++
                        break;
                    }
                } else if (snake.snakeCurrentDirection === 'down') {
                    if (JSON.stringify(snake.head.posX) != JSON.stringify(snake.body.posX)) {
                        snake.body.posX++
                        break;
                    } else {
                        snake.body.posY--
                        break;
                    }
                } else {
                    snake.body.posY++
                    break;
                }
            case 'down':
                if (snake.snakeCurrentDirection === 'down') {
                    snake.body.posX++;
                    break;
                }
                if (snake.snakeCurrentDirection === 'right') {
                    if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.body.posX)) {
                        snake.body.posY++;
                        break;
                    } else {
                        snake.body.posX++;
                        break;
                    }
                } else {
                    if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.body.posX)) {
                        snake.body.posY--;
                        break;
                    } else {
                        snake.body.posX++;
                        break;
                    }
                }
        }
    }
}

function moveSnakeTail() {
    const snake = model.data.snakePosition

    switch (model.input.userSetDirection) {
        case 'up':
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
            if (snake.snakeCurrentDirection === 'up') {
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

function arrowKeys() {
    if (model.input.keyPressed['ArrowLeft']) changeDirection('left');
    if (model.input.keyPressed['ArrowRight']) changeDirection('right');
    if (model.input.keyPressed['ArrowUp']) changeDirection('up');
    if (model.input.keyPressed['ArrowDown']) changeDirection('down');
}

function changeDirection(direction) {
    const snakedir = model.data.snakePosition.snakeCurrentDirection
    if (snakedir === 'left' && direction === 'right') {
        return
    } else if (snakedir === 'right' && direction === 'left') {
        return
    } else if (snakedir === 'up' && direction === 'down') {
        return
    } else if (snakedir === 'down' && direction === 'up') {
        return
    } else {
        model.input.userSetDirection = direction;
    }
}