const elementoChute = document.getElementById("chute");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
  chute = e.results[0][0].transcript;
  exibeChuteNaTela(chute);
  verificaSeOChutePossuiValorValido(chute);
}

function exibeChuteNaTela(chute) {
 if (chute == "game over") {
    document.body.innerHTML = `
        <h2> GAME OVER </h2>        
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    document.body.style.backgroundColor = "#050C9C";
    return
 }
 
 elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `;
}

recognition.addEventListener('end', () => recognition.start());
