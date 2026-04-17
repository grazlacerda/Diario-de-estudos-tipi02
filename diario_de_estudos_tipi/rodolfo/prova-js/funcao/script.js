function criarBoasVindas(cidade, temperatura) {
    // As variáveis entram dentro de ${} e o texto flui naturalmente
    return `Bem-vindo a ${cidade}! Hoje está fazendo ${temperatura}°C.`;
}

console.log(criarBoasVindas("São Paulo", 22));
// Resultado: "Bem-vindo a São Paulo! Hoje está fazendo 22°C."