const model = {
    input: {
        currentDirection: 'right',
        isFoodEaten: false
    },
    data: {
        snakeBoard: [],
        snakePoistion: [],
        currentFoodPosition: {},
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