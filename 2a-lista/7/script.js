let textoVisor = document.getElementById("visor");

function clear() {
    textoVisor.value = "";
}

function criptografia1() {
    textoVisor.value = "101010";
}

function criptografia2() {
    textoVisor.value = "42";
}

document.querySelectorAll(".botao").forEach(botao => {
    botao.addEventListener("click", e => {
        if (botao.value === "CE") {
            clear();
        }
        else if (botao.value === "CR 1") {
            criptografia1();
        }
        else if (botao.value === "CR 2") {
            criptografia2();
        }
        else {
            if (textoVisor.value === "101010" || textoVisor.value === "42") {
                clear();
            }
            textoVisor.value = textoVisor.value + botao.value;
        }     
    })
}) 