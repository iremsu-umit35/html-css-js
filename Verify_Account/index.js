const codes = document.querySelectorAll('.code');

// İlk input elemanına (ilk .code) odaklanır
codes[0].focus();

codes.forEach((code, index) =>{
    // Her bir .code öğesi için 'keydown' olayı dinleyicisi ekler
    code.addEventListener('keydown', (e) => {
        if (e.key >=0 && e.key <=9){      // Eğer basılan tuş 0-9 arasında bir rakamsa

            codes[index].value = ''// Geçerli input'u temizler
            setTimeout(() => codes[index+1].focus(), 10)  // 10ms sonra bir sonraki input'a odaklanır
        }
        else if (e.key === 'backspace'){   // Eğer basılan tuş Backspace (geri silme) ise
            setTimeout(() => codes[index-1].focus(), 10)// 10ms sonra bir önceki input'a odaklanır
        }
    })
})