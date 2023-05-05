document.getElementById("enviar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const is_maior_idade = idade >= 18;
    if (is_maior_idade) {
        const mensagem = `${nome} é maior de idade.`
        window.alert(mensagem);
    } else {
        const mensagem = `${nome} não é maior de idade.`
        window.alert(mensagem);
    }
    document.write(mensagem)
})