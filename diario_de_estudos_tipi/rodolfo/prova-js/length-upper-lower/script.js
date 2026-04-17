const nome = prompt("Qual o seu nome?");

let contletras = alert(`Oi ${nome}! o seu nome tem ${nome.length} letras`);
let maiusculo = alert(`Esse é o seu nome em maiusculo: ${nome.toUpperCase()}`);
let minusculo = alert(`E assim fica o seu nome em minusculo: ${nome.toLowerCase()}`);
//-----------------------------------------------------------------------------------------------------------------

const cidade = prompt("Em qual cidade você mora?");

if(cidade !== ""){
    alert("Que legal! Essa é uma cidade é muito bonita!")
} else {
    alert("Você não registrou uma cidade...")
}
