console.log("JavaScript é uma linguagem de programação!");

const whatconst = "é uma variável que não pode ser mudada.";
const nameconst = "const";
console.log(nameconst + " " + whatconst);

let whatlet = "é uma váriavel de valores que podem ser reatribuídos ao longo do código.";
let namelet = "let";
console.log(namelet + " " + whatlet);


//_________________________________________________________________________________________________________________


//Você também pode passar múltiplos valores para console.log() separados por vírgulas
let name = "Alice";
let age = 25;
console.log("Name:", name, "Age:", age); // Name: Alice Age: 25

//você pode fazer uma "colagem" com variaveis
let hello = "Hello" + " " + "world!";

console.log(hello);

//e criar uma variavel com uma varivavel
let name2 = "Grazielly";
let hi = "hi! my name is" + " " + name2;
console.log(hi);


//_________________________________________________________________________________________________________________


/*Um índice é a posição de um caractere dentro de uma string e é baseado em zero
 Isso significa que o primeiro caractere de uma string tem um índice 0, o segundo caractere tem um índice 1 e assim por diante.
*/ 
const comprimento = "hello!";
console.log(comprimento[1]); // e
console.log(comprimento[0]); //b

//você também pode acessar o utimo length com -1'
const extenso = "Essa é uma frase de exemplo para aprender sobre length";
console.log(extenso[extenso.length-1]);
//A propriedade length de uma string informa quantos caracteres ela contém, então para acessar o último caractere, você deve subtrair um do length!

//Se você quiser obter múltiplos caracteres, pode usar a notação de colchetes assim:
let firstTwo = comprimento[0] + comprimento[1];
console.log(firstTwo); // "he"
//aqui usamos uma nova variavel para ser simples utilizar no console
