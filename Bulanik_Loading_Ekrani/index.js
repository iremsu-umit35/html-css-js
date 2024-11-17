const loadingText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;  // başlangıç noktası
let int = setInterval(bluring,50) //belli bir fonksiyonu belli sürede o işlemi tekrarlar

function bluring(){
    load++;
    if(load > 99){
        clearInterval(int); // işlemi durdur
    }

    loadingText.innerText = `${load}%`;
    loadingText.style.opacity = scale(load,0,100,1,0);  //zamanla yazı bulanıklaşır
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` //resimin zamanla bulanıklığı düzeliyor
}

//bulanık ekran için kullanılan bir fonksiyon
function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
}