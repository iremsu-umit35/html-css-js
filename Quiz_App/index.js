const quizData = [
    {
        question: 'En aktif Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'a',
    },
    {
        question: 'En komik Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'b',
    },
    {
        question: 'En gezen Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'd',
    },
    {
        question: 'En üretken Twitter kullanıcısı?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'c',
    },
    {
        question: ' Co-founder zetupme?',
        a: 'Fatih Kadir Akın',
        b: 'İlker Kurtel',
        c: 'Didem Küçükkaraaslan',
        d: 'Azmi Mengü',
        e: 'Onur Aslan',
        correct: 'e',
    },
]

//gerekli şeyler htlmden alındı
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEls=document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const e_text = document.getElementById('e_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0
let score = 0

loadQuiz()// İlk soruyu yüklemek için fonksiyonu çağırıyoruz


function loadQuiz(){
    const currentQuizData = quizData[currentQuiz]  // O anki sorunun verilerini alıyoruz

    deselectedAnswers()

    // Soruyu ve şıkları dolduruyoruz
    questionEls.innerText = currentQuizData.question; //soru yazıcak
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    e_text.innerText = currentQuizData.e;

}

//seçilmemiş cevapların checked false oldu yani seçili cevaplar temizlendi
function deselectedAnswers(){
    answerEls.forEach(answerEls=> answerEls.checked = false)// Her cevabın seçimini kaldırıyor
}

// Kullanıcının seçtiği cevabı alır
//hangi soruya tıkladığımızı görmek için onun id sine erişildi
function getSelected(){
    let answer

    answerEls.forEach(answerEl=>{
        if (answerEl.checked){
            answer= answerEl.id   // Seçili olanı bulursak id sini alırız
        }
    })
    return answer  // Seçili cevabı döner
}

//butona tıklandığında
submitBtn.addEventListener('click', () =>{
    const answer = getSelected() // Kullanıcının seçtiği cevabı al, yukarda tanımlandı

    if (answer){
        if (answer === quizData[currentQuiz].correct){
            score++//doğru cevap ise puan artır
        }
        currentQuiz++//sonraki soru

        if (currentQuiz<quizData.length){ //sorular halen var ise
            loadQuiz()//yeni soru yüklendi
        }else {
            quiz.innerHTML = `
      <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
      <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
    `
        }
    }

})
