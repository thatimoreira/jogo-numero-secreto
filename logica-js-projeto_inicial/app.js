alert('Boas vindas ao Jogo do Número Secreto!');

let numMinimo = 1;
let numMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numMaximo) + numMinimo;
let chute;
let tentativas = 1;

while (chute != numeroSecreto )
{
    chute = prompt(`Escolha um número entre ${numMinimo} e ${numMaximo}: `);

    if (chute == numeroSecreto)
    {
        let palavraTentativa = tentativas > 1 ? 'tentativas.' : 'tentativa.'
        alert(`Parabéns!\nVocê acertou o número secreto ${numeroSecreto}!\n com ${tentativas} ${palavraTentativa}`);
    }
    else
    {
        if (chute < numeroSecreto)
        {
            alert(`O número secreto é maior que ${chute}`);
        }
        else
        {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }
}
