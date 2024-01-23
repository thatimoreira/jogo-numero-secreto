let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirMensagemTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
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
    return parseInt((Math.random() * 100) + 1);
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