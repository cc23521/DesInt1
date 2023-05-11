let textoVisor = document.getElementById("visor").value;

document.querySelectorAll(".botao").forEach(botao => {
    botao.addEventListener("click", e => {
        document.getElementById("visor").value = document.getElementById("visor").value + botao.value;
    })
})