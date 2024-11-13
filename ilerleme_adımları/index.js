const progress= document.getElementById("progress");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;  /* aktif olan daireyi tutuyor*/

/* "next" düğmesine tıkladığında*/
next.addEventListener("click", () => {
    currentActive++; /* bir sonraki daireye geçiş*/
    if (currentActive >circles.length) {
        currentActive = circles.length ;
    }
    update(); /* güncelleme fonksiyonu*/
});

/* prev düğmesine tıklandığında*/
prev.addEventListener("click", () => {
    currentActive--;  /* bir önceki daireye döner*/

    if (currentActive < 1) {
        currentActive = 1;
    }

    update();
});

/* her bir daire için*/
function update() {
    circles.forEach((circle,index) => {
        if (index < currentActive) {
            circle.classList.add("active");
        } else {
            circle.classList.remove("active");
        }
    })

    /* ilerlemenin ne kadar olduğu bilgisi*/
    const actives = document.querySelectorAll(".active");

    /*lerleme çubuğunun genişliğini günceller.*/
    progress.style.width = (actives.length-1) / (circles.length-1) *100 +'%';



    if (currentActive === 1) {
        prev.disabled = true; /* ilk adımdayız prev butonu devre dışı*/
    }else if (currentActive === circles.length) {
        next.disabled = true; /* son adımdayız next butonu devre dışı*/
    }else{
        prev.disabled = false;  /* aralarda geziniyoruz ikiside aktif*/
        next.disabled = false;
    }
}
