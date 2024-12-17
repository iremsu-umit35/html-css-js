const contents = document.querySelectorAll('.content')
const navBtn = document.querySelectorAll('nav ul li')// Navigasyon menüsündeki tüm li öğelerini seçer.

// Her bir navigasyon butonuna tıklama olayı ekliyor
navBtn.forEach((btn, idx) => {

    btn.addEventListener('click', (e) => {
        hideAllContents() //içerikleri gizle
        hideAllBtns()     // Tüm butonların aktif sınıfını kaldırıyoruz

        // Tıklanan butona 'active' sınıfı ekliyoruz (aktif duruma getiriyoruz)
        btn.classList.add('active')


        // İlgili içerik bölümüne 'show' sınıfı ekliyoruz (görünür yapıyoruz)
        contents[idx].classList.add('show')
    })
})

// Tüm içeriklerin 'show' sınıfını kaldıran fonksiyon
function hideAllContents() {
    contents.forEach((content) => content.classList.remove('show'))
}

// Tüm butonların 'active' sınıfını kaldıran fonksiyon
function hideAllBtns() {
    navBtn.forEach((item) => item.classList.remove('active'))
}