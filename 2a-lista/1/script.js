const nome = prompt("Nome");
const idade = parseInt(prompt("Idade"));
const e_maior = idade >= 18;
if (e_maior) {
    const mensagem = `${nome} é maior de idade.`;
    alert(mensagem);
    document.write(mensagem)
} 
else {
    const mensagem = `${nome} não é maior de idade.`;
    alert(mensagem);
    document.write(mensagem);
}