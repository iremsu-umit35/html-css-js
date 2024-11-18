const left = document.querySelector('.left');
const right = document.querySelector('.right');

const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left')
    changeFontSize('4rem', '1.5rem')
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left')
    changeFontSize('2rem', '2rem')
})

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right')
    changeFontSize('1.5rem', '4rem')

})
right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right')
    changeFontSize('2rem', '2rem')
})


//h1 boyut değişimi
function changeFontSize(leftSize, rightSize) {
    document.querySelector('.left h1').style.fontSize = leftSize;  // Sol yazıyı büyüt
    document.querySelector('.right h1').style.fontSize = rightSize; // Sağ yazıyı küçült
}