function spawnFood() {
    const { posX, posY } = randomXYpostion();
    model.data.foodPosition = { posX: posX, posY: posY }
}