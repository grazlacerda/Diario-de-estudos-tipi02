// O Desafio: A Vaquinha do Rolê no Parque Burle Marx
// "Sextou e a ideia é colar no Parque Burle Marx com a galera pra trocar uma ideia e fazer um piquenique. O problema é que ninguém quer ficar no prejuízo, então precisamos rachar o valor dos lanches e refrigerantes de forma justa.
// O arquivo index.html com a tela do nosso aplicativo já está pronto e bonitão, mas o botão 'Calcular' não faz nada ainda. O cérebro do app está faltando!
// Sua Missão no arquivo script.js:
// Crie uma função chamada calcularRacha().
// Capture o valor total da compra (do input valorTotal).
// Capture a quantidade de pessoas que vão no rolê (do input qtdPessoas).
// Faça o cálculo de quanto cada um deve pagar.
// Mostre o resultado na tela substituindo o texto do parágrafo que tem o id resultado.
// Bônus de Mestre: Se o número de pessoas digitado for 0 ou vazio, use um alert para avisar: 'Opa! Tem que ter pelo menos você no rolê, né?'."
 
function calcularRacha() {
    let valorTotal = parseFloat(document.getElementById("valorTotal").value);
    let qtdPessoas = parseInt(document.getElementById("qtdPessoas").value);
    let resultado = document.getElementById("resultado");

    // Validação para evitar divisão por zero ou campos vazios
    if (isNaN(valorTotal) || isNaN(qtdPessoas) || qtdPessoas <= 0) {
        alert("Opa! Insira valores válidos. Tem que ter pelo menos você no rolê, né?");
        return; 
    }

    // Realiza o cálculo
    let divisao = valorTotal / qtdPessoas;

    // Exibe o resultado formatado com 2 casas decimais
    // Note o espaço após o 'R$' para a frase ficar correta
    resultado.innerText = `Cada um deve pagar R$ ${divisao.toFixed(2)}`;
}