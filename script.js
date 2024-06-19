
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a rotação de culturas pode beneficiar a fertilidade do solo?",
        alternativas: [
            {
                texto: "A rotação de culturas ajuda a melhorar a fertilidade do solo ao alternar plantas com diferentes exigências nutricionais e de manejo, reduzindo a incidência de doenças e pragas específicas de determinadas culturas..",
                afirmacao: "afirmação"
            },
            {
                texto: "A agronomia busca estudar e aplicar princípios científicos para otimizar a produção agrícola, promover a sustentabilidade ambiental e melhorar a qualidade dos alimentos. .",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual é a importância da análise de solo na prática agronômica?",
        alternativas: [
            {
                texto: "A análise de solo é crucial para determinar a fertilidade do solo, fornecendo informações sobre nutrientes disponíveis, pH, matéria orgânica e textura, orientando decisões de manejo como adubação e correção de nutrientes. ",
                afirmacao: "afirmação"
            },
            {
                texto: "Cultivares adaptadas às condições locais são essenciais para maximizar a produtividade e a resistência a estresses bióticos e abióticos, garantindo que as culturas se desenvolvam de maneira mais saudável e eficiente em determinada região.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Qual procedimento vc acha melhor?",
        alternativas: [
            {
                texto: "Henna.",
                afirmacao: "afirmação"
            },
            {
                texto: "micropigmentação.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como vc prefere a henna? ",
        alternativas: [
            {
                texto: "Natural.",
                afirmacao: "afirmação"
            },
            {
                texto: "Marcada.",
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
