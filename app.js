let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numerosecreto = gerarNumeroAleatorio();
let tentativas = 1;
function TextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    Responsivevoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    TextoNaTela('h1', 'jogo do número secreto');
    TextoNaTela('p', 'Escolha um número entre 1 e 10');    
}
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numerosecreto);
    if(chute == numerosecreto){
        let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';
        let mensagemTentativa = 'voce descobriu o numero secreto com '+tentativas+' ' +palavraTentativa+ '!';
        TextoNaTela('h1', 'acertou!!');
        TextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        if (chute > numerosecreto){
            TextoNaTela('h1', 'o numero secreto é menor');
        } else {
            TextoNaTela('h1', ' o numero secreto é maior');
        } tentativas++;
          limparCampo();  
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = []        
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido)
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}

function reiniciarJogo() {
    numerosecreto = gerarNumeroAleatorio();
    tentativas = 1;
    exibirMensagemInicial();   
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}