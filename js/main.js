const descricaoInicio = document.querySelector('.descricao__inicio');

const topicoEmbarcados = document.querySelector('.btn-embarcados');
const descricaoEmbarcados = document.querySelector('#embarcados');

const topicoWeb = document.querySelector('.btn-web');
const descricaoWeb = document.querySelector('#web');

const topicoFront = document.querySelector('.btn-front');
const descricaoFront = document.querySelector('#front');

const topicoDados = document.querySelector('.btn-dados');
const descricaoDados = document.querySelector('#dados');

const botoes = [topicoEmbarcados, topicoWeb, topicoFront, topicoDados];
const descricoes = [descricaoEmbarcados, descricaoWeb, descricaoFront, descricaoDados];

botoes.forEach((botao, i) => {
    botao.addEventListener('click', () => {
        descricaoInicio.classList.add('hidden');
        descricoes.forEach((descricao, j) => {
            if(!descricao.classList.contains('hidden')) {
                descricao.classList.add('hidden');
            };
            if(i == j){
                descricao.classList.remove('hidden');
            };
        });
    })
})