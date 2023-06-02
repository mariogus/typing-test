const paragraphs = [
    "aposento como um fantasma, uma aparicao. O unico ruido que acompanhava seus movimentos era o da capa rocando-lhe a pele desnuda. E foi justamente esse tenue e quase inaudivel som que despertou o bruxo ? ou talvez apenas o tenha emergido do estado de sonolencia no qual se embalava monotonamente, como se estivesse submerso em profundezas insondaveis, pairando entre o fundo e a superficie de um mar sereno, cercado por ondulantes algas marinhas.",
   "com seu brilho a enevoada luminosidade matinal. Ele tentou se mover, porem ela, mantendo a pressao das maos, impediu-o de mudar de posicao e, com suaves mas decididos movimentos dos quadris, exigiu uma resposta. E ele respondeu. A jovem parou de fugir de suas maos e, jogando a cabeca para tras, deixou cair os cabelos. Sua pele era fresca e surpreendentemente lisa. Seus olhos ? que ele pode ver quando ela aproximou o rosto do dele ? eram enormes e negros com os de uma ondina. O balanco o fez mergulhar em um mar de camomila agitado e murmurante, envolvendo-o de paz,",
    "O taberneiro limpou as maos no puido avental eencheu uma velha caneca de barro.O desconhecido nao era velho, mas tinha oscabelos quase totalmente brancos. Sob a capa,vestia um surrado gibao de couro, amarrado nosombros e nas axilas. Quando tirou a capa, todospuderam ver a longa espada de dois gumes presa ascostas por um cinturao. Nada havia de extraordinarionaquilo, ja que em Wyzim quase todos andavamarmados, mas ninguem carregava uma espada ascostas como se fosse um arco ou uma aljava.O desconhecido nao se sentou a mesa com ospoucos fregueses. Permaneceu de pe junto dobalcao, encarando o taberneiro com olhospenetrantes. Bebeu um trago da caneca.? Estou procurando um quarto para passar anoite.? Nao temos vagas ? respondeu rudemente otaberneiro, olhando para as empoeiradas botas dorecem-chegado. ? Procure no Velho Narakort.? Prefiro aqui.? Impossivel. ? O taberneiro finalmentereconheceu o sotaque do desconhecido: era deRivia.? Pagarei bem ? sussurrou o estranho, como seestivesse inseguro.Foi entao que a confusao teve inicio. Ummagricela bexiguento, que desde o momento emque o desconhecido entrara na taberna o observavasoturnamente, levantou-se da mesa e aproximou-sedo balcao. Dois de seus companheiros se postaramatras, a menos de dois passos.? Nao ouviu que nao ha lugar aqui para tiposcomo voce, seu vagabundo riviano? ? rosnou o",

];
const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
        alert("acabou o tempo")
        location.reload("true")
    }
    if(timeLeft === 0){
        clearInterval(timer);
        alert("acabou o tempo")
        location.reload("true")
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}
window.addEventListener('keydown', function (event) {
    var keycaps = document.getElementsByClassName('keycaps');
    var capsLock = document.getElementById('capsLock');
    var keyPressed = event.key.toLowerCase();
   
  
    Array.from(keycaps).forEach(function (keycap) {
      if (keycap.textContent.toLowerCase() === keyPressed) {
        keycap.classList.add('active-keycap');
        setTimeout(function () {
          keycap.classList.remove('active-keycap');
        }, 250);
      }
    });
  });

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);
//keybord

const menuzin = document.querySelector('.menu')

function menuz(){
    var menu = document.getElementById("config").style.display = "block";
    const menus = document.querySelector('.menu');
    menus.classList.toggle('active');
}

const back = document.querySelector('.menu');

function voltar(){
  var menuu = document.getElementById('config').style.display = "none";
  
}

back.addEventListener("click", voltar);



localStorage.setItem('tema', 'claro'); 

localStorage.getItem('tema');
function active(){
const troca = document.getElementById("check");
const tema = window.localStorage.getItem("tema");

/* verifica se o tema armazenado no localStorage é escuro
se sim aplica o tema escuro ao body */

  if (tema === "claro") document.body.classList.add("claro");

//serve por exemplo, quando um usuário clica em um botão\\
  troca.addEventListener("click", () => {
   
  document.body.classList.toggle("claro");
  if (tema === "claro") {
    window.localStorage.setItem("tema", "claro");
  } else 
  window.localStorage.setItem("tema", "escuro");
  localStorage.setItem('tema', 'escuro');
});
}