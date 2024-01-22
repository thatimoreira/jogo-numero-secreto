alert('Boas vindas ao Jogo do Número Secreto!');

let numeroSecreto = parseInt(Math.random() * 10);
let chute;
let tentativas = 1;

while (chute != numeroSecreto && tentativas < 4)
{
    chute = prompt('Escolha um número entre 1 e 30: ');

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
        if (tentativas > 3)
        {
            alert('Você excedeu o número de tentativas permitido!');
            alert(`${numeroSecreto} era o número secreto.`);
        }
    }
}
