function checarEntrada(){
    let idadeCandidato = parseInt(document.getElementById("idadeCandidato").value);
    let vipSelect = document.getElementById("vipSelect").value;
    let mensagemPortaria = document.getElementById("mensagemPortaria");

    if (idadeCandidato < 18) {
        mensagemPortaria.style.color = "rgba(255, 48, 48, 1)";
        mensagemPortaria.innerText ="você precisa ter 18 anos para entrar!";
    } else if (idadeCandidato >= 18 && vipSelect === "sim") {
        mensagemPortaria.style.color = "rgba(129, 255, 80, 1)";
        mensagemPortaria.innerText = "Catraca liberada. Entrada gratuita para você!";
    }else {
        mensagemPortaria.style.color = "rgba(79, 161, 255, 1)";
        mensagemPortaria.innerText = "O valor da entrada é R$ 20,00";
    }
}