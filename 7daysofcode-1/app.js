let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

let numUm = 1;
let num = 29;

if(numeroUm == stringUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.');
}else{
    console.log("As variáveis numeroUm e stringUm não tem o mesmo valor");
}
if(numeroTrinta == stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes.');
}else{
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo valor ');
}
if(numeroDez == stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.')
}else{
    console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

// comparando tipos E valores com if

if(numeroUm === numUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor e mesmo tipo.')
}else if(numeroUm == numUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes.')
}else{
    console.log("As variáveis numeroUm e stringUm não tem o mesmo valor");
}
if(numeroTrinta === num){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo.')
}else if(numeroTrinta == num){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor, mas tipos diferentes.')
}else{
    console.log("As variáveis numeroTrinta e stringTrinta não tem o mesmo valor");
}
if(numeroDez === stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor e mesmo tipo.')
}else if(numeroDez == stringDez){
    console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes.')
}else{
    console.log("As variáveis numeroDez e stringDez não tem o mesmo valor");
}