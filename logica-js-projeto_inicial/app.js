alert('Boas vindas ao Jogo do Número Secreto!');

let numeroSecreto = 11;
let chute
let tentativas = 0;

while (chute != numeroSecreto & tentativas < 3)
{
    chute = prompt('Escolha um número entre 1 e 30: ');
    tentativas++;

    if (chute == numeroSecreto)
    {
        console.log(`Parabéns! Você acertou o número secreto: ${numeroSecreto}!`);
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
    }
}
if (tentativas > 3)
{
    alert('Você excedeu o número de tentativas permitido!');
}