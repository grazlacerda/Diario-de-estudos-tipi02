const nome = "joão";
const idade = 30;
const documento = false;

if (nome !== "" && idade == 18  || idade > 18 && documento == true) {
    console.log(`oi ${nome}, seja bem-vindo! você tem ${idade} anos e seu documento está em dia!`)
} else{
    console.log("hm.. algo deu errado.");
}