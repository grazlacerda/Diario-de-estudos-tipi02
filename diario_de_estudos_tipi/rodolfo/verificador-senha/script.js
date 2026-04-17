function testarSenha() {
    let senhaInput = document.getElementById("senhaInput").value;
    let mensagem = document.getElementById("mensagem");

    if (senhaInput.length < 8) {
        mensagem.style.color = "#ff4d4d";
        mensagem.innerText = `Senha muito curta! Use pelo menos 8 caracteres.`;
    } else if (senhaInput == '12345678') {
        mensagem.style.color = "#ff4d4d";
        mensagem.innerText = `Essa senha é muito óbvia! Troca isso aí.`;
    } else {
        mensagem.style.color = "#00ff66";
        mensagem.innerText = `Senha forte! Cadastro liberado.`;
    };
}