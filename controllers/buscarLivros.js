const livros = require('../database')
//usa ../ para voltar a pasta, pois colocando só . ele só traz os arquivos da pasta controller

const read = require('readline-sync')
//para usar recursos da biblioteca, ela que permite receber inputs 

const buscarLivros = () => {
    const opcaoInicial = read.question('Deseja buscar por categoria? S/N Resposta: ').toUpperCase()
    if (opcaoInicial === 'S') {
        const categorias = livros.map(livro => livro.categoria)
        console.table(categorias)

        const inputCategoria = read.question('Digite uma categoria conforme tabela acima')
        const confirmacao = read.question('Tem certeza? S/N').toUpperCase()
        if (confirmacao === 'S') {
            const livrosFiltrados = livros.filter(livro => livro.categoria === inputCategoria)
            console.table(livrosFiltrados)
            //olha pra categoria livros e verifica se a categoria é igual ao que o usuario digitou, se for, mostra no console

        }
    }
}

//Quando a função buscarLivros for chamada, entra outra pergunta e se a resposta for sim, mostra a tabela de categorias para escolher
// criar um else para caso o usuario coloque 'N'
//incluir mensagem para o usuario digitar o nome da categoria
//se colocar console.log ele retorna só a array sem tabela


module.exports = buscarLivros