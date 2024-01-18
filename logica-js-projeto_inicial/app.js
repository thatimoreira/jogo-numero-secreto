alert('Boas vindas ao Jogo do Número Secreto!');

let numeroSecreto = 11;
let chute = prompt('Escolha um número entre 1 e 30: ');

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

