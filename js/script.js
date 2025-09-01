let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
const falar = document.querySelector('#falar')

const modal = document.getElementById("tutorial");
const btnAjuda = document.getElementById("ajuda");
const closeBtn = document.querySelector(".close");

const comandos = {
    aumentar: [
        "mais", "aumentar", "aumenta", "mais um",
        "mais uma", "incrementar", "incrementa",
    ],
    diminuir: [
        "menos", "menos um", "menos uma",
        "diminuir", "diminua", "diminui"
    ],
    resetar: [
        "reiniciar", "reinicia", "resetar",
        "reseta", "recomeçar", "recomeça"
    ]
}

// Janela do tutorial

btnAjuda.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Lógica dos botões

btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList

        if (styles.contains('aumentar')) {
            count++
        }
        else if (styles.contains('diminuir')) {
            count--
        }
        else if (styles.contains('reiniciar')) {
            count = 0
        }

        if (!styles.contains('speech')) {
            atualizarDisplay()
        }

    })
})

function atualizarDisplay() {
    value.textContent = count

    if (count > 0) {
        value.style.color = '#00ffea'
    }
    else if (count < 0) {
        value.style.color = '#ff4d6d'
    }
    else {
        value.style.color = '#aaaaaa'
    }

    falarNumero(count)
}

// Robô falador

function falarNumero(texto) {
    const utterance = new SpeechSynthesisUtterance(texto)
    utterance.lang = "pt-BR"
    speechSynthesis.speak(utterance)
}

// Reconhecimento de voz

falar.addEventListener('click', reconhecer)

function reconhecer() {
    const rec = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    rec.lang = "pt-BR"

    rec.start()

    rec.onstart = () => {
        falar.textContent = "Gravando 🎙️..."
        falar.classList.add("gravando")
    }

    rec.onend = () => {
        falar.textContent = "Falar 🎤"
        falar.classList.remove("gravando")
    }

    rec.onresult = (e) => {
        const fala = e.results[0][0].transcript.toLowerCase()
        console.log("Você disse:", fala)

        if (comandos.aumentar.some(palavra => fala.includes(palavra))) {
            count++
        }
        else if (comandos.diminuir.some(palavra => fala.includes(palavra))) {
            count--
        }
        else if (comandos.resetar.some(palavra => fala.includes(palavra))) {
            count = 0
        }

        atualizarDisplay()
    }

    rec.onerror = (e) => console.error("Erro:", e.error)
}
