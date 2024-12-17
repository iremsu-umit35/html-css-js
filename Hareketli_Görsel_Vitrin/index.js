const imgContainer = document.getElementById('images')
const img = document.querySelectorAll('#images img');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// Her 2 saniyede bir `play` fonksiyonunu çağıran bir zamanlayıcı başlatıyoruz.
let interval = setInterval(play,2000)
let idx = 0

function play() {
    idx++
    changeImage() // Görüntüyü değiştiriyoruz.
}

// Resmi değiştiren ve konteynırı sola veya sağa kaydıran fonksiyon.
function changeImage() {
    // İndeks, mevcut resim sayısını aştıysa sıfıra ayarla (sondan başa dön).
    if(idx>img.length-1){
        idx = 0
    }
    // İndeks sıfırın altına düştüyse son resme ayarla (baştan sona dön).
    else if (idx<0){
        idx = img.length-1
    }
    // Resim konteynırını uygun pozisyona kaydır.
    imgContainer.style.transform = `translateX(${-idx * 600}px)`
}

// İleri butonuna tıklanınca resim değiştirme ve zamanlayıcıyı sıfırlama işlemleri.
nextBtn.addEventListener('click',()=>{
  idx++
  changeImage()
  resetInterval()// Zamanlayıcıyı sıfırla.
})

// Geri butonuna tıklanınca resim değiştirme ve zamanlayıcıyı sıfırlama işlemleri.
prevBtn.addEventListener('click',()=>{
    idx--
    changeImage()
    resetInterval()
})

// Zamanlayıcıyı sıfırlayan fonksiyon.
function resetInterval(){
    clearInterval(interval)
    interval = setInterval(play,2000)
}