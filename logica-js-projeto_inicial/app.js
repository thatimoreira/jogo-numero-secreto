alert('Boas vindas ao Jogo do Número Secreto!');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto )
{
    chute = prompt('Escolha um número entre 1 e 100: ');

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
