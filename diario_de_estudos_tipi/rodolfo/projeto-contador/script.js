function verificarIngresso() {
    let granaInput = document.getElementById("granaInput").value;
    let mensagemFinal = document.getElementById("mensagemFinal");

    if (granaInput >= 600) {
        mensagemFinal.innerText = `Aí sim! Ingresso garantido, partiu festival!`;
        mensagemFinal.style.color = "green";
    } else {
        let falta = 600 - granaInput; 
        mensagemFinal.innerText = `Deu ruim! Ainda faltam R$ ${falta} pra você colar no festival.`;
        mensagemFinal.style.color = "red";
    }
}