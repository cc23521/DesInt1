"use strict"

const linhas = parseInt(prompt("Altura da pirâmide: "));
for (let i = linhas; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        if (i >= 10) {
            document.writeln(i);
        }
        else {
            document.writeln("0" + i);
        }
    }
    document.write("<br>");
}