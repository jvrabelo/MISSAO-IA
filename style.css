const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
                                              
const perguntas = [
    {
        enunciado: "Qual seu estilo de roupa favorito?",
        alternativas: [
          texto: "Elegante",
          afirmação: "Casual"
        ]
    },
    {
        enunciado: "Qual combinação de cores você prefere?",
        alternativas: [
          texto: "Branco e bege.",
          afirmação: "Branco e preto.",
        ]
    },
    {
        enunciado: "Ao sair de casa, vocẽ escolhe ir com acessórios ou sem?",
        alternativas: [
          texto: "Com acessórios.",
          afirmação: "Sem acessórios."
        ]
    },
    {
        enunciado: "Na hora de se arrumar, vocẽ prioriza conforto ou elegãncia?",
        alternativas: [
          texto: "Conforto.",
          afirmação: "Elegãncia."
        ]
    },
    {
        enunciado: "Você sabe montar looks com truques visuais?",
        alternativas: [
          texto: "Sim.",
          afirmação: "Não."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", function () {
          atual++;
          mostraPergunta();
        })
      caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();
