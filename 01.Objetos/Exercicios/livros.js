const livro = {
    titulo: 'O Retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    anoPublicacao: 2000,
    genero: 'Drama',
    avaliacao: null
}

livro.anoAtual = new Date().getFullYear();
livro.idadePublicacao = livro.anoAtual - livro.anoPublicacao;
livro.mostrarDetalhes = `O livro "${livro.titulo}" de "${livro.autor}" do gênero "${livro.genero}" publicado no ano "${livro.anoPublicacao}" tem "${livro.idadePublicacao}" anos`;

console.log(livro.mostrarDetalhes);

livro.avaliacao = "sensacional";
livro.genero = "Aventura";