let listaDeLinguagens = [];

function aperteBotao() {    

    let palavra = prompt("Digite uma linguagem")
    listaDeLinguagens.push(palavra);
    let posicaoDaLista = parseInt(prompt("Digite qual posição da lista você quer acessar"));
    posicaoDaLista--;
    console.log(`O item ${posicaoDaLista + 1} da lista é: ${listaDeLinguagens[posicaoDaLista]}`)
    console.log(listaDeLinguagens.length)
    let ultimoElemento = listaDeLinguagens[listaDeLinguagens.length-1];
    console.log(ultimoElemento)
}

