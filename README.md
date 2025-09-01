# 🎤 Contador com Reconhecimento de Voz e Voz Sintetizada

Este projeto é um **contador interativo** feito em **HTML, CSS e JavaScript**, com suporte a **comandos de voz** para aumentar, diminuir ou reiniciar o contador.
Além disso, o contador possui um **robô falador** que anuncia o valor atual em voz alta sempre que ele é atualizado.

---

## 🚀 Funcionalidades

* Aumentar, diminuir e resetar o contador manualmente (botões).
* Controlar o contador por **comandos de voz** como *"mais"*, *"menos"*, *"resetar"*.
* O contador fala em voz alta o número atualizado.
* Interface moderna com **responsividade** e **feedback visual** ao gravar.

---

## 🛠️ Tecnologias Utilizadas

* **HTML** → Estrutura da aplicação
* **CSS** → Estilização responsiva e moderna
* **JavaScript** → Lógica do contador, reconhecimento de voz e síntese de fala
* **Web Speech API** → Reconhecimento e síntese de voz

---

## 📂 Estrutura do Projeto

```
contador-voz/
│
├── index.html        # Estrutura principal
├── css/
│   └── style.css     # Estilos da aplicação
├── js/
│   └── script.js     # Lógica do contador e reconhecimento de voz
└── README.md         # Documentação
```

---

## ▶️ Como Rodar o Projeto

Existem duas maneiras para ver o projeto, a 1ª é acessar o link logo abaixo e a 2ª seria seguir o passo a passo.

https://contadordad.onrender.com/

1. **Baixe ou clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/contador-voz.git
   ```

2. Abra a pasta do projeto e localize o arquivo `index.html`.

3. Clique duas vezes no `index.html` para abrir no navegador (Chrome ou Edge, que suportam a **Web Speech API**).

⚠️ **Observação:** Alguns navegadores exigem que você esteja rodando o projeto em **https\://** ou em **localhost** para permitir o uso do microfone.

---

## 🎙️ Reconhecimento de Voz

O reconhecimento de voz é feito com a **Web Speech API**:

* O botão **"Falar 🎤"** inicia a gravação.
* Durante a gravação, o botão muda para **"Gravando 🎙️..."** e fica em vermelho.
* Quando você disser algo, o código verifica se a frase contém alguma das palavras definidas em `comandos`.

### Exemplos de Comandos

* **Aumentar** → "mais", "aumentar", "incrementar"...
* **Diminuir** → "menos", "diminuir", "diminui"...
* **Resetar** → "resetar", "reiniciar", "recomeçar"...

---

## 🤖 Robô Falador

Após cada atualização do contador (manual ou por voz), o valor é falado em voz alta usando a **SpeechSynthesis** da Web Speech API:

```js
const utterance = new SpeechSynthesisUtterance(texto)
utterance.lang = "pt-BR"
speechSynthesis.speak(utterance)
```

Isso garante que o usuário receba feedback **visual** e **auditivo**.

---

## 🖌️ Personalização

* As cores mudam de acordo com o valor:

  * 🔵 Positivo → Azul neon (`#00ffea`)
  * 🔴 Negativo → Vermelho (`#ff4d6d`)
  * ⚪ Zero → Cinza (`#aaaaaa`)

* O botão de fala muda para **vermelho** quando está gravando.

---

## 📋 Requisitos

* Estar conectado com a Internet para o uso das APIs
* Permissão de uso do **microfone**.

---

## 💻 Desenvolvedores

Projeto desenvolvido por **Lucca Russo** e **Vinicius Abs**
