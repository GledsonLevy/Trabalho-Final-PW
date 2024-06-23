var questoes = [
    {
        enunciado: "Qual é o nome do protagonista de Jujutsu Kaisen?",
        opcoes: ["Yuji Itadori", "Megumi Fushiguro", "Nobara Kugisaki", "Satoru Gojo"],
        resposta: "Yuji Itadori"
    },
    {
        enunciado: "Qual é a instituição onde os feiticeiros estudam e treinam em Jujutsu Kaisen?",
        opcoes: ["Escola Técnica de Feiticeiros de Kyoto", "Escola Técnica de Feiticeiros de Shibuya", "Escola Técnica de Feiticeiros de Tóquio", "Escola Técnica de Feiticeiros de Jujutsu"],
        resposta: "Escola Técnica de Feiticeiros de Tóquio"
    },
    {
        enunciado: "Escola Jujutsu já havia reunido quantos dedos do Rei das Maldições?",
        opcoes: ["3 dedos", "5 dedos", "6 dedos", "9 dedos"],
        resposta: "6 dedos"
    },
    {
        enunciado: "Quem é o Rei Das Maldições?",
        opcoes: ["Kashimo Hajime", "Kenjaku", "Ryomen Sukuna", "Satoru Gojo"],
        resposta: "Ryomen Sukuna"
    },
    {
        enunciado: "Quem era o melhor amigo de Satoru Gojo?",
        opcoes: ["Suguru Geto", "Megumi Fushiguro", "Kashimo Hajime ", "Ryomen Sukuna"],
        resposta: "Suguru Geto"
    },
    {
        enunciado: "Qual o nome da Técnica Inata de Toge Inumaki?",
        opcoes: ["Fala amaldiçoada", "Fuga", "Copia de maldição", "Infinito"],
        resposta: "Fala amaldiçoada"
    },
    {
        enunciado: "Quem derrotou Satoru Gojo?",
        opcoes: ["Ryomen Sukuna", "Yuji Itadori", "Suguru Geto", "Kenjaku"],
        resposta: "Ryomen Sukuna"
    },
    {
        enunciado: "Qual o nome da expansão de dominio de Yuta Okkotsu?",
        opcoes: ["Dualismo do amor verdadeiro", "Vazio Infinito", "Santuario Malevolente", "Trem do Amor Puro"],
        resposta: "Dualismo do amor verdadeiro"
    },
    {
        enunciado: "Quem foi o segundo Receptáculo de Ryomen Sukuna?",
        opcoes: ["Megumi Fushiguro", "Yuji Itadori", "Yuta Okkotsu", "Toge Inumaki"],
        resposta: "Megumi Fushiguro"
    },
    {
        enunciado: "Qual é o Shikigami de Yuta Okkotsu",
        opcoes: ["Rika", "Divine Dogs", "Nue", "Piercing Ox"],
        resposta: "Rika"
    },
]

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


function preencher() {
    pergunta.textContent = questoes[questaoAtual]['enunciado'];
    embaralhar(questoes[questaoAtual]['opcoes']);


    for (let i = 0; i < 4; i++) {
        campos[i].textContent = questoes[questaoAtual]['opcoes'][i];
    }
}
function reiniciar() {
    window.location.reload();
}

function apaga() {
    body.innerHTML = ""
}

var pergunta = document.querySelector('h5');
var campos = document.querySelectorAll('h4');
var questaoAtual = 0;
var score = document.querySelector('.score');
var somascore = 0;
var podejogar = true;
var body = document.querySelector('.body');

embaralhar(questoes)

preencher();

campos.forEach(campo => {
    campo.addEventListener('click', function () {
      
        if (podejogar) {
            if (this.textContent == questoes[questaoAtual]['resposta']) {
                this.classList.add('acerto');
                podejogar = false;
                somascore += 100;
                score.innerHTML = "Score: " + somascore;
            } else {
                this.classList.add('erro');
                podejogar = false;
                if (somascore > 0) {
                    somascore -= 50;
                    score.innerHTML = "Score: " + somascore;
                }
            }
            setTimeout(() => {
                this.classList.remove('erro', 'acerto');
                podejogar = true;
                questaoAtual++;
                 
        if (questaoAtual == questoes.length) {

            body.innerHTML = `	<div class="modal" style="display: block" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">ACABOU O QUIZ</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
              <p class="score2"><p>
                <p>QUER JOGAR DE NOVO?</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="apaga()">Não</button>
                <button type="button" class="btn btn-primary" onclick="reiniciar()" >Sim</button>
              </div>
            </div>
          </div>
        </div>
  `
            document.querySelector(".score2").innerHTML = "Score: " + somascore;
        }
                preencher();


            }, 1000);
        }
    })
}); 