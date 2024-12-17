//Şifre uzunluğunu analiz eder.
// Şifre uzadıkça arka planın bulanıklık seviyesi azalır.
//Şifre uzunluğu 10 karaktere ulaştığında, "Password" etiketi "Strong Password" olarak değişir.


const password = document.getElementById("password");
const background = document.getElementById("background");
const passwordLabel = document.getElementById("passwordLabel");

// her karakter yazdığında ya da sildiğinde tetiklenir.
password.addEventListener("input", e => {
    const length = e.target.value.length;  //Şifre alanındaki mevcut karakter uzunluğunu hesaplar

    const backgroundBlur = 20-length*2  //her karakterde 2 birim azalır ve görüntü netleşmeye başlar
    background.style.filter = ` blur(${backgroundBlur}px)`    // Arka planın blur efekti dinamik olarak güncellenir.


//Şifre Güçlendikçe Etiketi Güncelleme
    if(length>= 10){
        password.innerText = 'strong password'
    }
})


