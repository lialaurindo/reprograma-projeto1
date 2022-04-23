//const livros = require ('./database')
//console.log(livros[0])
//teste para ver se conseguimos acessar as infos da database
//utilizar npm start

const read = require ('readline-sync')
//utilizando a biblioteca

const buscarLivros = require ('./controllers/buscarLivros')
//para ter acesso a função em outra pasta

//const resposta = read.question ('Está funcionando? S/N').toUpperCase()
//console.log (reposta)
//fazendo uma pergunta para o usuario e guardando a resposta em uma varíavel

const resposta = read.question (`
============== Menu ==============

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de página
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros não lidos

5 - SAIR

Digite um número[1-5]

`)

switch (resposta) {
    case "1":
        buscarLivros ()
        break
        default: 
        console.log ('fim do algoritmo')
        
}
