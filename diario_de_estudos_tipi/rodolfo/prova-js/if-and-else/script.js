//if e else
const nome = prompt("qual o seu nome?");
const idade = prompt("qual é a sua idade?");

if(idade >= 18) {
    alert(`olá ${nome}, seu acesso foi liberado.`);
} else if(idade==16 && idade<18) {
    alert(`olá ${nome}, você precisa de uma autorização do seu responsável.`);
} else {
    alert(`desculpe ${nome}, mas você tem apenas ${idade} anos e não pode entrar.`);
}


