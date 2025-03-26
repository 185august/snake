function spawnFood() {
    const { posX, posY } = randomXYpostion();
    console.log(posX, posY)
    model.data.foodPosition.push({ posX: posX, posY: posY })
}