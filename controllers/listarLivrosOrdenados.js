const livros = require('../database')
const read = require('readline-sync')

const listarLivrosOrdenados = () => {
    const opcaoInicial = read.question('Deseja ordenar livros por quantidade de paginas? S/N Resposta: ').toUpperCase()

    if (opcaoInicial === 'S') {
        const paginas = livros.sort((a, b) => {
            return a.paginas - b.paginas
        })
        console.table(paginas)
    }
}

module.exports = listarLivrosOrdenados