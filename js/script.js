let count = 0

const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')

console.log(btns)

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        
        if (styles.contains('decrease')){
            count--;
            falarNumero(count)
        } else if(styles.contains('increase')){
            count++;
            falarNumero(count)
        } else {
            count = 0;
            falarNumero("Contador zerado")
        }
        if (count > 0){
            value.style.color = 'green'
        }
        if (count < 0){
            value.style.color = 'red'
        }
        if (count === 0){
            value.style.color = 'black'
        }
        value.textContent = count
    })
})

function falarNumero(texto) {
  const utterance = new SpeechSynthesisUtterance(texto);
  utterance.lang = "pt-BR"; 
  speechSynthesis.speak(utterance);
}

