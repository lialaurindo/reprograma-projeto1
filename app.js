//const livros = require ('./database')
//console.log(livros[0])
//teste para ver se conseguimos acessar as infos da database
//utilizar npm start

const read = require('readline-sync')
//utilizando a biblioteca

const buscarLivros = require('./controllers/buscarLivros')
const listarLivrosOrdenados = require('./controllers/listarLivrosOrdenados')
const listarLivrosRecomendados = require('./controllers/listarLivrosRecomendados')
const listarLivrosNaoLidos = require('./controllers/listarLivrosNaoLidos')

//para ter acesso a função em outra pasta


const resposta = read.question(`
============== Menu ==============

1 - CATEGORIA: Buscar livro por categoria
2 - ORDENAR: Ordenar livros por quantidade de pagina
3 - RECOMENDADOS: Buscar livros recomendados
4 - LISTA DE DESEJO: Busca livros nao lidos

5 - SAIR

Digite um numero[1-5]

`)

switch (resposta) {
    case '1':
        buscarLivros()
        break
    case '2':
        listarLivrosOrdenados()
        break
    case '3':
        listarLivrosRecomendados()
        break
    case '4':
        listarLivrosNaoLidos()
        break
    default:
        console.log('fim do algoritmo')
        break
}