const search = document.querySelector(".search"); //eğer id olsaydı # işareri kullanılır
const input = document.querySelector(".input");//class olduğu için nokta işareti kullandı
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    search.classList.toggle('active') // açıksa bastığımızda kapanır ,kapalı ise bastığımızda açılır  hem ekleme hem çıkarma
    input.focus() // inputu vurgulamak için

}); //tıklandığında ne olacağı işlemi
