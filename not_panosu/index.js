const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem('note')) || [];

if(notes){
    notes.forEach(note => addNewNote(note));
}

addBtn.addEventListener("click", (e) => addNewNote())//tıklandığında yeni not blokları oluşacak

function addNewNote(text = "") {
    const note =document.createElement("div");//div oluştur
    note.classList.add("note"); //note class verdik

    //div içine atama yaptık
    note.innerHTML = `
          <img src="./pin.png" alt="pin">
           <div class="tools">
                <button class="edit"><i class="fa-solid fa-pencil"></i></button>
                <button class="delete"><i class="fa-solid fa-eraser"></i></button>
              </div>
        
              <div class="main ${text ? '' : 'hidden'}"></div> <!--bir şey yazıp yazmadığımıza göre değişecek-->
              <textarea class=" ${text ? 'hidden' : ''}"></textarea>
          `

    // notu silmek için yazıldı
    const deleteBtn = note.querySelector(".delete");
    deleteBtn.addEventListener("click", (e) => {
        note.remove();
        updateLS()

    })


    // Düzenleme butonunu seçiyoruz
    const editBtn = note.querySelector(".edit");
    const main = note.querySelector(".main");
    const textarea = note.querySelector("textarea");

    //kalem tuşuna basınca yazı görünüp gizlenecek
    editBtn.addEventListener("click", (e) => {
        main.classList.toggle("hidden");
        textarea.classList.toggle("hidden");
    })



    // Textarea'da bir değişiklik olduğunda
    textarea.addEventListener("input", (e) => {
        const { value } = e.target;
        main.innerHTML = marked(value);

    updateLS()
    })
    // Yeni oluşturulan notu sayfaya ekliyoruz
    document.body.appendChild(note);

}


// LocalStorage'ı güncellemek için fonksiyon
function updateLS(){
    const notesText = document.querySelectorAll("textarea");

    const notes = []

    notesText.forEach((note) => notes.push(note.value))
    localStorage.setItem("notes", JSON.stringify(notes));
}


