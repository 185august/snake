function spawnFood() {
    const { posX, posY } = randomXYpostion();
    console.log(posX, posY)
    model.data.currentFoodPosition = {
        posX: posX,
        posY: posY
    }
}