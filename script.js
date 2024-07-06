const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
   
    {
        enunciado: "Qual é a visão mais usada?",
        alternativas: [
            {
                texto: "primeira pessoa: jogado no ponto de vista do personagem",
                afirmacao: "afirmacao"
            },
            {
                texto: "terceira pessoa: jogado no ponto de vista de atrás do personagem",
                afirmação:"afirmacao"
            }
        ]
    },
    {
        enunciado: "Qual FPS mais jogado na Steam?",
        alternativas: [
            {
                texto: Counter Strike 2,
                afirmacao: "afirmacao"
            },
            {
                texto: Call of Duty,
                afirmacao: "afirmacao"
            }
           {
           texto: Battlefield 2042,
              afirmação: "afirmacao"
              }
        ]
    },
    {
        enunciado: "O foco dos Jogos de FPS é?",
        alternativas: [
            {
                texto: Corpo a Corpo,
                afirmacao: "afirmacao"
            },
            {
                texto: Armas de Fogo,
                afirmacao: "afirmacao"
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
