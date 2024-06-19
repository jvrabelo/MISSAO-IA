const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Já pensou em ser agronomo",
        alternativas: [
            {
                texto: "Sim!",
                afirmacao: "afirmação"
            },
            {
                texto: "Ainda não!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual melhor trator?",
        alternativas: [
            {
                texto: "T7 200",
                afirmacao: "afirmação"
            },
            {
                texto: "7J 1200",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual melhor marca",
        alternativas: [
            {
                texto: "case",
                afirmacao: "afirmação"
            },
            {
                texto: "new holland",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual marca vc prefere",
        alternativas: [
            {
                texto: "Valtra",
                afirmacao: "afirmação"
            },
            {
                texto: "john deere",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual bazuca é melhor",
        alternativas: [
            {
                texto: "Jam 1500",
                afirmacao: "afirmação"
            },
            {
                texto: "Jam 2000",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();
