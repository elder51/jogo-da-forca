let tentativas = 6
const palavraSecreta = document.getElementById("tela");
const palavradica = document.getElementById("categoria");

const palavras = [
    {
        nome: "Banana",
        dica: "fruta"
    },
    {
        nome: "Alface",
        dica: "verdura"
    },
    {
        nome: "Jumento",
        dica: "animal"
    },
]

const indice = Math.floor(Math.random() * palavras.length)
const palavraSort = palavras[indice]

palavradica.innerHTML = palavraSort.dica

for(let i = 0; i < palavraSort.nome.length;i++){
    palavraSecreta.innerHTML = palavraSecreta.innerHTML +"<div class='letras'>"+""+"</div>"
}
console.log(palavraSort.nome)

// BETA
function verificar() {
    if(tentativas == 0) {
    }

}