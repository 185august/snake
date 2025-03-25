function updateView() {
    let html = `
    ${snakeView()}
    `;
    document.getElementById('app').innerHTML = html;
}