document.getElementById("start").addEventListener("click", () => {
    let tentativas = 1;
    const numeroAleatorio = Math.floor(Math.random() * 9 + 1);
    while (tentativas <= 3) {
        const chute = prompt(`${tentativas}a tentativa`);
        if (chute == numeroAleatorio) {
            alert("Parabéns, você acertou!");
            break;
        }
        else if (chute > numeroAleatorio) {
            alert("Muito alto!");
        }
        else {
            alert("Muito baixo!");
        }
        tentativas++;
    }
    if (tentativas > 3) {
        alert(`O número secreto era ${numeroAleatorio}`);
    }
})