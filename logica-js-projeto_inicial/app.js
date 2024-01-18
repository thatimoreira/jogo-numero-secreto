alert('Boas vindas ao Jogo do Número Secreto!');

let numeroSecreto = 11;
let chute;
let tentativas = 1;

while (chute != numeroSecreto & tentativas < 4)
{
    chute = prompt('Escolha um número entre 1 e 30: ');

    if (chute == numeroSecreto)
    {
        alert(`Parabéns!\nVocê acertou o número secreto: ${numeroSecreto}!\nTotal de tentativas: ${tentativas}`);
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
if (tentativas > 3)
{
    alert('Você excedeu o número de tentativas permitido!');
}