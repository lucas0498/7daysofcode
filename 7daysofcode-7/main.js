let n1, n2, res;

let operacao = prompt('Deseja fazer qual operação? divisão, multiplicação, soma ou subtração?');
n1 = parseInt(prompt('Digite o primeiro número: '));
n2 = parseInt(prompt('Digite o segundo número: '));
if(operacao == 'divisão'){
    divisao();
}else if (operacao == 'multiplicação'){
    multiplicacao();
}else if (operacao == 'soma'){
    soma();
}else if (operacao == 'subtração'){
    subtracao();
} else{
    while(operacao != 'divisão' || operacao != 'multiplicação' || operacao != 'soma' || operacao != 'subtração'){
        alert("operação inválida!");
        operacao = prompt('Deseja fazer qual operação? divisão, multiplicação, adição ou subtração?');
    }
    
}

function soma(){
    res = n1+n2;
    return(alert(`A soma dos números é: ${res}`))
}
function subtracao(){
    res = n1-n2;
    return(alert(`A subtração dos números é: ${res}`));
}
function multiplicacao(){
    res = n1*n2;
    return(alert(`A multiplicação entre os números é: ${res}`))
}
function divisao(){
    res = n1 / n2;
    return(alert(`A divisão entre os números é: ${res}`))
}