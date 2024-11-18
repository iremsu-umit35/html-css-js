const sounds= ["applause", "boo", "gasp","tada","victory","wrong" ];//array oluştu


sounds.forEach(sound => { //her bir sounda button oluşturdu
    const btn = document.createElement('button');
    btn.classList.add('btn')

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(sound).play() // click yapınca sesleri oynatmaya başlıyor
    })

    document.getElementById('buttons').appendChild(btn)
})

//butona basınca daha önce çalısan sesi durdurur
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
    })
}