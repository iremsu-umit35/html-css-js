const content= document.getElementById('content');
const speedEl = document.getElementById('speed');
const text= 'I am a computer engineering student'
let idx = 1
let speed = 300/speedEl.value

writeText()

// writeText fonksiyonu, metni yazdıran fonksiyon
function writeText(){
    content.innerHTML = text.slice(0,idx)
    idx++
    // Eğer idx text uzunluğundan büyükse, idx'i tekrar 1 yap
    if(idx > text.length){
        idx= 1
    }

    setTimeout(writeText, speed)
}

// speedEl elemanına input olayı dinleyicisi ekle
// Kullanıcı input değeri değiştirdiğinde, speed değeri güncellenir
speedEl.addEventListener('input', (e) => (speed= 300/e.target.value))