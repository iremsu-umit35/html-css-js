const container = document.getElementById('container');

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    // Kareye fare ile üzerine gelme (mouseover) olay dinleyicisi eklenir
    square.addEventListener('mouseover',() => setColor(square))

    // Kareye fare ile üzerinden ayrılma (mouseout) olay dinleyicisi eklenir
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)
}
// Kareye renk atanmasını sağlayan fonksiyon
function setColor(div) {
    const randomColor = getRandomColor()
    div.style.backgroundColor = randomColor
    div.style.boxShadow = ` 0 0 2px ${randomColor} , 0 0 10px ${randomColor}`

}

// Rastgele bir renk döndüren fonksiyon
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}

// Kareden renk kaldırılmasını sağlayan fonksiyon
function removeColor(div) {
    div.style.backgroundColor = '#111'
    div.style.boxShadow = '0 0 2px #000'

}