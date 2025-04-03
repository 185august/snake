function initGame() {
    makeArray();
    spawnFood();
    spawnSnake();
    updateView();
    moveSnake();
}

function spawnSnake() {
    const snake = model.data.snakePosition;

    snake.head = spawnObject(snake.head)
    snake.body.push({
        posX: snake.head.posX,
        posY: snake.head.posY - 1,
        id: 0
    })
    snake.body.push({
        posX: snake.head.posX,
        posY: snake.body[0].posY - 1,
        id: 1
    })
    if (snake.body.length == 0) {
        snake.tail = {
            posX: snake.head.posX,
            posY: snake.head.posY - 1
        }
    } else {
        snake.tail = {
            posX: snake.head.posX,
            posY: snake.body[0].posY - (snake.body.length)
        }
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
    if (model.data.snakePosition.body == []) return
    const snake = model.data.snakePosition;
    let part;
    for (let i = snake.body.length - 1; i >= 0; i--) {

        if (i === 0) {
            part = model.data.snakePosition.head;
        } else {
            part = snake.body[i - 1];
        }
        switch (model.input.userSetDirection) {
            case 'up':
                console.log(model.data.snakePosition.snakeCurrentDirection)
                /* if (snake.snakeCurrentDirection === 'up') {
                    snake.body[i].posX--
                    break;
                } */
                if (snake.snakeCurrentDirection === 'right') {
                    if (JSON.stringify(part.posX) == JSON.stringify(snake.body[i].posX)) {
                        console.log(part.posX, snake.body[i].posX)
                        snake.body[i].posY++;
                        break;
                    } else {
                        snake.body[i].posX--;
                        break;
                    }
                } else {
                    if (JSON.stringify(part.posX) == JSON.stringify(snake.body[i].posX)) {
                        console.log('does this ever run')
                        snake.body[i].posY--;
                        break;
                    } else {
                        snake.body[i].posX--;
                        break;
                    }
                }
            case 'left':
                if (snake.snakeCurrentDirection === 'up') {

                    if (JSON.stringify(part.posX) != JSON.stringify(snake.body[i].posX)) {
                        snake.body[i].posX--;
                        break;
                    } else {
                        snake.body[i].posY--;
                        break;
                    }
                } else if (snake.snakeCurrentDirection === 'down') {
                    if (JSON.stringify(part.posX) != JSON.stringify(snake.body[i].posX)) {
                        snake.body[i].posX++;
                        break;
                    } else {
                        snake.body[i].posY--;
                        break;
                    }
                } else {
                    snake.body[i].posY--;
                    break;
                }
            case 'right':
                if (snake.snakeCurrentDirection === 'up') {
                    if (JSON.stringify(part.posX) != JSON.stringify(snake.body[i].posX)) {
                        snake.body[i].posX--;
                        break;
                    } else {
                        snake.body[i].posY++
                        break;
                    }
                } else if (snake.snakeCurrentDirection === 'down') {
                    if (JSON.stringify(part.posX) != JSON.stringify(snake.body[i].posX)) {
                        snake.body[i].posX++
                        break;
                    } else {
                        snake.body[i].posY--
                        break;
                    }
                } else {
                    snake.body[i].posY++
                    break;
                }
            case 'down':
                /* if (snake.snakeCurrentDirection === 'down') {
                    snake.body[i].posX++;
                    break;
                } */
                if (snake.snakeCurrentDirection === 'right') {
                    if (JSON.stringify(part.posX) == JSON.stringify(snake.body[i].posX)) {
                        snake.body[i].posY++;
                        break;
                    } else {
                        snake.body[i].posX++;
                        break;
                    }
                } else {
                    if (JSON.stringify(part.posX) == JSON.stringify(snake.body[i].posX)) {
                        snake.body[i].posY--;
                        break;
                    } else {
                        snake.body[i].posX++;
                        break;
                    }
                }
        }
    }
}

function moveSnakeTail() {
    const snake = model.data.snakePosition;
    const part = snake.body.length === 0 ? snake.head : snake.body[snake.body.length - 1]
    if (snake.tail == null) return;
    switch (model.input.userSetDirection) {
        case 'up':
            /* if (snake.snakeCurrentDirection === 'up') {
                snake.tail.posX--;
                break;
            } */
            if (snake.snakeCurrentDirection === 'right') {
                if (JSON.stringify(part.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY++;
                    break;
                } else {
                    snake.tail.posX--;
                    break;
                }
            } else {
                if (JSON.stringify(part.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY--;
                    break;
                } else {
                    snake.tail.posX--;
                    break;
                }
            }
        case 'left':
            if (snake.snakeCurrentDirection === 'up') {
                if (JSON.stringify(part.posX) != JSON.stringify(snake.tail.posX)) {
                    snake.tail.posX--;
                    break;
                } else {
                    snake.tail.posY--;
                    break;
                }
            } else if (snake.snakeCurrentDirection === 'down') {
                if (JSON.stringify(part.posX) != JSON.stringify(snake.tail.posX)) {
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
                if (JSON.stringify(part.posX) != JSON.stringify(snake.tail.posX)) {
                    snake.tail.posX--
                    break;
                } else {
                    snake.tail.posY++
                    break;
                }
            } else if (snake.snakeCurrentDirection === 'down') {
                if (JSON.stringify(part.posX) != JSON.stringify(snake.tail.posX)) {
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
                if (JSON.stringify(part.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY++;
                    break;
                } else {
                    snake.tail.posX++;
                    break;
                }
            } else {
                if (JSON.stringify(part.posX) == JSON.stringify(snake.tail.posX)) {
                    snake.tail.posY--;
                    break;
                } else {
                    snake.tail.posX++;
                    break;
                }
            }

    }
    if (JSON.stringify(snake.head.posX) == JSON.stringify(snake.tail.posX)) {
        model.data.snakePosition.snakeCurrentDirection = model.input.userSetDirection
    }
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