const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

// Sayfa yüklendiğinde otomatik olarak metin alanına odaklanmasını sağlıyoruz.
textarea.focus()

textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value)


    // Eğer basılan tuş 'Enter' ise işlemi başlatıyoruz.
    if(e.key === 'Enter') {

        //ekran temizlemek için verilen süre
        setTimeout( ()=>{
            e.target.value = '';
        },10)

        //oluşturulan random etiket seçme işlemi başlıyor
        randomSelect()
    }
})

// Etiketleri oluşturmak için fonksiyon
function createTags(input) {
    const tags= input
        .split(',')   // Virgül ile bölüyoruz
        .filter(tag => tag.trim() !== '')   // Boşluk veya boş olanları çıkarıyor
        .map(tag => tag.trim())   // Her etiketin başındaki ve sonundaki boşlukları kaldırıyo

    // Daha önce oluşturulan etiketleri temizliyor
    tagsEl.innerHTML = ""

    // Her etiket için bir `span` elementi oluşturup ekliyoruz.
    tags.forEach(tag => {
        const tagEl = document.createElement("span")
        tagEl.classList.add("tag") // Etiketlere `tag` sınıfını ekliyor
        tagEl.innerHTML= tag  // Etiketin metnini belirliyor
        tagsEl.appendChild(tagEl)  // Etiketi konteynere ekliyor
    })
}

// Rastgele bir etiket seçme animasyonu başlatan fonksiyon
function randomSelect() {
    const times= 30

    // Belirli aralıklarla rastgele bir etiketi seçiyor
    const interval= setInterval( () => {
        const randomTag = pickRandomTag()  // Rastgele bir etiket seçiyoruz.

        highlightTag(randomTag) //seçilen etiket vurgulanıyor

        //belli nir süre sonra vurgu kaldırıyor
        setTimeout(()=>{
            unHighlightTag(randomTag)
        },100)
    },100)


    // Animasyonu belirtilen süre sonra durduruyor
    setTimeout(()=>{
        clearInterval(interval)  // Animasyonu durduruyor


        // Animasyon bittikten sonra son bir etiket seçip vurguluyor
        setTimeout(()=>{
            const randomTag = pickRandomTag()
            highlightTag(randomTag)
        },100)
    },times*100)
}


// Rastgele bir etiket seçen fonksiyon
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag') //tüm etiketler seçildi
    return tags[Math.floor(Math.random()*tags.length)]  // rasgale etiket döndürülüyor
}

// Bir etiketi vurgulayan fonksiyon
function highlightTag(tag) {
    tag.classList.add('highlight')
}

// Bir etiketin vurgusunu kaldıran fonksiyon
function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}