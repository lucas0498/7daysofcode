let hortifruti = [];
let congelados = [];
let laticinios = [];
let doces = [];
let removeProd = '';
let produto = '';
let indexProd;

let alterarLista = ''; 



while(alterarLista != 'não'){

    validaPergunta();
    
    if (alterarLista == 'sim'){
    
        produto = prompt('O que?');
        let categoria = prompt('Em qual categoria isso se encaixa? Responda 1 para HORTIFRUTI, 2 para CONGELADOS, 3 para LATICINIOS e 4 para DOCES');
    
    if(categoria == 1){
        adicionarProduto(hortifruti)
    }
    else if(categoria == 2){
        adicionarProduto(congelados)
    }
    else if(categoria == 3){
        adicionarProduto(laticinios)
    }
    else if(categoria == 4){
        adicionarProduto(doces)
    } else{
        alert('Categoria Inválida.');
    }

}else if(alterarLista == 'não'){
    alert(`Lista de compras: \n 
    Hortifruti: ${hortifruti} \n
    Congelados: ${congelados} \n
    Laticinios: ${laticinios} \n
    Doces: ${doces} \n`);
}
else if (alterarLista == 'remover'){
    categoria = prompt('Deseja remover um item de qual categoria? Responda 1 para HORTIFRUTI, 2 para CONGELADOS, 3 para LATICINIOS e 4 para DOCES');
    if(categoria == 1){
        removerProduto(hortifruti);
    }
    else if(categoria == 2){
        removerProduto(congelados);
    }
    else if(categoria == 3){
        removerProduto(laticinios);
    }
    else if(categoria == 4){
        removerProduto(doces);
    }else{
        alert('Categoria Inválida.');
    }
}
}
function validaPergunta(){
    if(hortifruti.length > 0 || congelados.length > 0 || laticinios.length > 0 || doces.length > 0){
        alterarLista = prompt(`Deseja adicionar algo à sua lista de compras? (sim ou não) \n
    Caso queira remover algo, digite remover.`);
    } else{
        alterarLista = prompt('Deseja adicionar algo à sua lista de compras? (sim ou não)');
    }
}

function adicionarProduto(array){
    array.push(produto);
}


function removerProduto(array){
    alert(array);
        removeProd = prompt("Qual produto deseja remover?");
        array.includes(removeProd);
            indexProd = array.indexOf(removeProd);
            if(indexProd >= 0){
                array.splice(indexProd, 1);
                alert(`Produto ${removeProd} foi removido com sucesso! \n
                ${array}`);
            }else{
                alert('Produto não encontrado!');
            }           
        
        } 


