const palavraSecreta = document.getElementById("tela");
const palavraCategoria = document.getElementById("categoria");
const dinamica = document.getElementsByClassName("letras");

let tentativas = 0

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
montarTela("");
function montarTela(letra) {
    for (let i = 0; i < palavraSort.nome.length;i++){
        palavraSecreta.innerHTML = palavraSecreta.innerHTML +"<div class='letras'>"+letra+"</div>"
    }
    palavraCategoria.innerHTML = palavraSort.categoria
}

console.log(palavraSort.nome)

// teclas/letras
function verificar(letra) {
    if (palavraSort.nome.toUpperCase().includes(letra)) {
        for(let i = 0; i < palavraSort.nome.length;i++) {
            if(palavraSort.nome.toUpperCase()[i] == letra) {
                dinamica[i].innerHTML = palavraSort.nome[i]
            }
        }
    } else {
        tentativas++
        trocarImg(tentativas)
    }
}

//img
function trocarImg(tentativas) {
    switch (tentativas) {
        case 1:
            document.getElementById("image").style.backgroundImage = "url(./img/forca-1.png)"
            break;
        case 2:
            document.getElementById("image").style.backgroundImage = "url(./img/forca-2.png)"
            break;
        case 3:
            document.getElementById("image").style.backgroundImage = "url(./img/forca-3.png)"
            break;
        case 4:
            document.getElementById("image").style.backgroundImage = "url(./img/forca-4.png)"
            break;
        case 5:
            document.getElementById("image").style.backgroundImage = "url(./img/forca-5.png)"
            break;
        case 6:
            document.getElementById("image").style.backgroundImage = "url(./img/forca-6.png)"
            break;
    
        default:
            document.getElementById("image").style.backgroundImage = "url(./img/forca-0.png)"
            break;
    }
}
