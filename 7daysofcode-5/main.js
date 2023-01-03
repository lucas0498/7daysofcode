let hortifruti = [];
let congelados = [];
let laticinios = [];
let doces = [];
let adicionarMais = '';

while(adicionarMais != 'não'){
    adicionarMais = prompt('Deseja adicionar algo à sua lista de compras?(sim ou não)')
    if (adicionarMais == 'sim'){
    
        let produto = prompt('O que?')
        let categoria = prompt('Em qual categoria isso se encaixa? Responda 1 para HORTIFRUTI, 2 para CONGELADOS, 3 para LATICINIOS e 4 para DOCES')
    
    if(categoria == 1){
        hortifruti.push(produto)
    }
    else if(categoria == 2){
        congelados.push(produto)
    }
    else if(categoria == 3){
        laticinios.push(produto)
    }
    else if(categoria == 4){
        doces.push(produto)
    } else{
        alert('Categoria Inválida.')
    }

}else if(adicionarMais == 'não'){
    alert(`Lista de compras: \n 
    Hortifruti: ${hortifruti} \n
    Congelados: ${congelados} \n
    Laticinios: ${laticinios} \n
    Doces: ${doces} \n`)
}
}


