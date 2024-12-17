const notifContainer = document.querySelector('.notifContainer')
const button = document.getElementById('button')

// Bildirimlerde gösterilecek metinler
const notifications = [
    'Whatsapp Bildirim',
    'Twitter Bildirim',
    'YouTube Bildirim',
    'LinkedIn Bildirim',
    'Medium Bildirim',
    'Instagram Bildirim',
]

// Bildirim kutularına atanacak rastgele renkler
const colors = ['red', 'black', 'green', 'blue', 'gray', 'orange', 'purple']

// Butona tıklanınca `createNotification` fonksiyonunu çalıştırıyoruz
button.addEventListener('click', () => createNotification())

// Bildirim kutusunu oluşturan ve ekrana ekleyen fonksiyon
function createNotification() {
    const notif = document.createElement('div')
    notif.classList.add('notif')
    notif.classList.add(getRandomColor())  // Rastgele bir renk sınıfı ekliyoruz

    notif.innerText = getRandomNotif()    // Bildirime rastgele bir metin ekliyoruz

    notifContainer.appendChild(notif)

    // 3 saniye sonra bildirimi ekrandan kaldırıyoruz
    setTimeout(() => {
        notif.remove()
    }, 3000)
}

// Rastgele bir bildirim metni döndüren fonksiyon
function getRandomNotif() {
    return notifications[Math.floor(Math.random() * notifications.length)]
}

// Rastgele bir renk döndüren fonksiyon
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}