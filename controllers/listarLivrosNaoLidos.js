const livros = require('../database')
const read = require('readline-sync')

const listarLivrosNaoLidos = () => {
    const opcaoInicial = read.question('Deseja listar livros nao lidos? S/N Resposta: ').toUpperCase()

    if (opcaoInicial === 'S') {
        const leu = livros.filter(livros => livros.leu === false)
        console.table(leu)
    }
}

module.exports = listarLivrosNaoLidos