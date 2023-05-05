const num1 = parseInt(prompt("Número 1: "));
const num2 = parseInt(prompt("Número 2: "));

const soma = num1 + num2;
window.alert("Soma: " + soma);

let subtracao = num1 - num2;
window.alert("Subtração 1: " + subtracao);
subtracao = num2 - num1;
window.alert("Subtração 2: " + subtracao);

const produto = num1 * num2;
window.alert("Produto: " + produto);

let divisao = num1 / num2;
window.alert("Divisão: " + divisao);
divisao = Math.floor(divisao);
window.alert("Divisão inteira: " + divisao);
const resto = num1 % num2;

window.alert("Resto: " + resto);