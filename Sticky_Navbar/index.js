const nav = document.querySelector('.nav')

const add = 150

window.addEventListener('scroll', () => {

    // Eğer pencere kaydırma (scroll) mesafesi nav yüksekliğini + add değerini geçerse
    if (window.scrollY > nav.offsetHeight + add) {
        // .move sınıfını navigasyon elemanına ekle
        nav.classList.add('move')

    } else {
        // Eğer scroll mesafesi yeterli değilse .move sınıfını kaldır
        nav.classList.remove('move')
    }
})