let tentativas = 6
const palavraSecreta = document.getElementById("tela");
const palavraCategoria = document.getElementById("categoria");
let dinamica = document.getElementsByClassName("letras");


const palavras = [
    {
        nome: "Banana",
        categoria: "Fruta"
    },
    {
        nome: "Alface",
        categoria: "Verdura"
    },
    {
        nome: "Jumento",
        categoria: "Animal"
    },
]

const indice = Math.floor(Math.random() * palavras.length)
const palavraSort = palavras[indice]

// palavra e categoria na tela
palavraCategoria.innerHTML = palavraSort.categoria
tela("");
function tela(letra) {
    for (let i = 0; i < palavraSort.nome.length;i++){
        palavraSecreta.innerHTML = palavraSecreta.innerHTML +"<div class='letras'>"+letra+"</div>"
    }
}

console.log(palavraSort.nome)
console.log(dinamica[1])

// Button
function verificar(letra) {
    if (palavraSort.nome.toUpperCase().includes(letra)) {
        console.log(letra)
        for (let i = 0; i < palavraSort.nome.length; i++) {
            if(letra == palavraSort.nome[i]) {
                tela(letra);
                                
            }        
        }
    }
}