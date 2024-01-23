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
    gerarNumeroAleatorio();
    exibirMensagemInicial();
    limparCampo();
    tentativas = 1;
    getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMensagemInicial();






/*
let numMinimo = 1;
let numMaximo = 100;
let numeroSecreto = 7; //parseInt(Math.random() * numMaximo) + numMinimo;
let chute;
let tentativas = 1;

while (chute != numeroSecreto )
{
    //chute = prompt(`Escolha um número entre ${numMinimo} e ${numMaximo}: `);

    if (chute == numeroSecreto)
    {
        let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.'
        //alert(`Parabéns!\nVocê acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
    }
    else
    {
        if (chute < numeroSecreto)
        {
            //alert(`O número secreto é maior que ${chute}`);
        }
        else
        {
            //alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}
*/