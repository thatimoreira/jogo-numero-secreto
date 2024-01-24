let numerosSorteados = [];
let totalNumerosSortear = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.0});
}

function exibirMensagemInicial()
{
    exibirMensagemTela('h1', 'Jogo do Número Secreto');
    exibirMensagemTela('p', 'Escolha um número entre 1 e 100:');
}

exibirMensagemInicial();

function verificarChute()
{
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto)
    {
        exibirMensagemTela('h1', 'Parabéns!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirMensagemTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if (chute < numeroSecreto)
            exibirMensagemTela('p', `O número secreto é maior que ${chute}`);
        else
            exibirMensagemTela('p', `O número secreto é menor que ${chute}`);
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio()
{
    let numeroEscolhido = parseInt((Math.random() * totalNumerosSortear) + 1);
    let qtdeElementosDaLista = numerosSorteados.length;

    if(qtdeElementosDaLista == numerosSorteados.length)
        numerosSorteados = [];
    if (numerosSorteados.includes(numeroEscolhido))
        return gerarNumeroAleatorio();
    else
    {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo()
{
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}