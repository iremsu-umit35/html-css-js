const button = document.querySelector('.ripple')


button.addEventListener('click', e => {
    // Tıklamanın yapıldığı noktanın (fare) x ve y koordinatlarını alıyoruz.
    const clientX = e.clientX
    const clientY = e.clientY


    // Butonun üst ve sol kenarının konumunu alıyoruz.
    // Bu, butonun sayfadaki tam yerini bulmamızı sağlar.
    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft


    // Tıklama noktasının butonun içinde nerede olduğunu hesaplıyoruz.
    const xInside = clientX - buttonLeft
    const yInside = clientY - buttonTop


    // Yeni bir <span> elementi oluşturuyoruz. Bu, ripple efektini oluşturacak.
    const circle = document.createElement('span')
    circle.classList.add('circle')
    // Ripple efektinin konumunu, tıklamanın x ve y koordinatlarına göre ayarlıyoruz.
    circle.style.top = yInside + 'px'
    circle.style.left = xInside + 'px'

    button.appendChild(circle)

    // 500 ms sonra 'circle' elementini kaldırıyoruz (ripple kaybolacak).
    setTimeout(() => circle.remove(),500)
})
