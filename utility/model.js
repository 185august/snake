const model = {
    input: {
        userSetDirection: 'right',
        isFoodEaten: false
    },
    data: {
        snakeBoard: [],
        snakePosition: {
            snakeCurrentDirection: 'right',
            head: null,
            body: [],
            tail: null
        },
        foodPosition: {},
    }
}

function randomXYpostion() {
    const randomX = Math.floor(Math.random() * 30)
    const randomY = Math.floor(Math.random() * 30)
    return { posX: randomX, posY: randomY };
}

function getCssClass(col) {
    if (col.isSnakeHead == true) {
        return 'snake-head';
    }
    else if (col.isSnakeTail == true) {
        return 'snake-tail'
    } else if (col.isFood == true) {
        return 'food';
    }
    else {
        return 'emptySquare'
    }
}

function spawnObject(object) {
    const { posX, posY } = randomXYpostion();
    object = { posX: posX, posY: posY }
    return object
}