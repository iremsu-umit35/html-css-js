const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//kullanılacak tanımlamalar
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeRange = document.getElementById("size");
const colorInput = document.getElementById("color");
const clearBtn = document.getElementById("clear");



let size = 8;
let color = "black";
let isPressed = false;
let x
let y

// daire çizme fonksiyonu
function drawCircle(x,y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color; //daire içi rengi
    ctx.fill();
}

//çizgi çizme
function drawLine(x1,y1,x2,y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1); //hareketi
    ctx.lineTo(x2, y2); //iz bırakması
    ctx.lineWidth = size*2;
    ctx.strokeStyle = color;
    ctx.stroke()
}

canvas.addEventListener("mousedown", e=>{
    isPressed = true;
    x = e.offsetX;//konumunu almak için
    y = e.offsetY;

})

//cizgi mousa tıklama bitince durmasi icin
canvas.addEventListener("mouseup", e=>{
    isPressed = false;
    x = undefined;//konumunu almak için
    y = undefined;

})

//mouse hareket edince isteniken şekil çizecek
canvas.addEventListener("mousemove", e=>{
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)
        x= x2
        y= y2
    }
})

// "Artır" butonuna tıklandığında boyutu artıran olay dinleyicisi
increaseBtn.addEventListener("click", ()=>{
    size+=4
    if (size>64){
        size =64
    }

    updateSizeRange()
})

// Boyut aralığını güncelleyen fonksiyon
function updateSizeRange(){
    sizeRange.innerText = size
}

// "Azalt" butonuna tıklandığında boyutu azaltan olay dinleyicisi
decreaseBtn.addEventListener("click", ()=>{
    size-=4
    if (size < 4){
        size = 4
    }
    updateSizeRange()
})

//ekranı silme
clearBtn.addEventListener("click", ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

// Renk seçici (color input) değiştiğinde renk güncellenir
colorInput.addEventListener("change", (e)=>{
    color = e.target.value;
})