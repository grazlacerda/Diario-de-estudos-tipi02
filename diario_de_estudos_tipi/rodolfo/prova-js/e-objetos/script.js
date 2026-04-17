// Criando o objeto 'livro'
const livro = {
    // Propriedades (Dados)
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    genero: "Romance",
    disponivel: true,

    // Método (Comportamento)
    obterResumo: function() {
        // Atenção aos espaços na concatenação usando Template Literals
        return `${this.titulo} foi escrito por ${this.autor} em ${this.anoPublicacao}.`;
    }
};

// --- Como acessar as informações ---

// 1. Usando a notação de ponto (mais comum)
console.log(livro.titulo); // Resultado: Dom Casmurro

// 2. Chamando o método do objeto
console.log(livro.obterResumo()); 
// Resultado: Dom Casmurro foi escrito por Machado de Assis em 1899.

// 3. Alterando uma propriedade
livro.disponivel = false;
console.log(livro.disponivel); // Resultado: false