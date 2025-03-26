const model = {
    input: {
        currentDirection: 'right',
        isFoodEaten: false
    },
    data: {
        snakeBoard: [],
        snakePosition: {
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
    if (col.isSnake == true) {
        return 'snake';
    } else if (col.isFood == true) {
        return 'food';
    }
    else {
        return 'emptySquare'
    }
}