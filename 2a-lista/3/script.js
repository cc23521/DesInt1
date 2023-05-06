const num1 = parseInt(prompt("Número 1: "));
const num2 = parseInt(prompt("Número 2: "));

const soma = num1 + num2;
window.alert("Soma: " + soma);
document.write("Soma: " + soma + "<br>");

let subtracao = num1 - num2;
window.alert("Subtração 1: " + subtracao);
document.write("Subtração 1: " + subtracao + "<br>");

subtracao = num2 - num1;
window.alert("Subtração 2: " + subtracao);
document.write("Subtração 2: " + subtracao + "<br>");

const produto = num1 * num2;
window.alert("Produto: " + produto);
document.write("Produto: " + produto + "<br>");

let divisao = num1 / num2;
window.alert("Divisão: " + divisao);
document.write("Divisão: " + divisao + "<br>");

divisao = Math.floor(divisao);
window.alert("Divisão inteira: " + divisao);
document.write("Divisão: " + divisao + "<br>");

const resto = num1 % num2;
window.alert("Resto: " + resto);
document.write("Resto: " + resto + "<br>");