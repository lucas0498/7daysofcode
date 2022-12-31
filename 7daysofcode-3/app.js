const area = prompt('Para qual área da programação deseja seguir? Front-End ou Back-End');
let linguagem = '';
if (area === 'Front-End') {
    let linguagem = prompt('E nessa área de Front-End, deseja aprender React ou Vue?');
    
}
else if (area === 'Back-End') {
    let  linguagem = prompt('E nessa área de Back-End, deseja aprender Java ou C#?');
 
}
else{
    alert('Opção inválida');
}

especializarOuFullStack = prompt(`Pretende seguir se especializando em ${area} ou se desenvolver para se tornar Full-Stack? Digite 1 para Especializar e 2 para Fullstack`);
if(especializarOuFullStack == 1){
    alert(`Continue se especializando em ${linguagem} para dominar a área de ${area}!`);
}
else if(especializarOuFullStack == 2){
    alert(`Chegou a hora de começar a aprender outras linguagens além de ${linguagem} se você quer se tornar Fullstack!`);
}
else{
    alert('Opção inválida');
}
let msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite ok, caso seja positivo.');
while (msg === 'ok' ) {

     let resp = prompt('Qual?');
    alert(`Ah sim, ${resp} é bem interessante...`);
    msg = prompt('Tem mais alguma tecnologia que você gostaria de aprender? Digite ok, caso seja positivo.');
}
