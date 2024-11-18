const boxes = document.querySelectorAll('.box'); // bütün classlara erişildi

//sayfa kaydığında scroll tetiklenir ve her bu olay olduğunda checkbox fonksiyon çağırılır
window.addEventListener('scroll', checkBoxes)


checkBoxes()//kaydırma olmadan önce bir kez çalıştırılır

//görülürlük fonksiyonu
function checkBoxes() {
    const triggerBotom = (window.innerHeight/6)*4  //kutuların görünmesi için ne kadar aşağıda olması gerketiğini belirler


    //her bir kutunun üst kısmının, viewport'un üst kısmına olan uzaklığı alınır.
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop< triggerBotom){  //class ekledi
            box.classList.add("show");
        }else{      //class sildi
            box.classList.remove("show");
        }
    })
}
