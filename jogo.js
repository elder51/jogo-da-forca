const palavraSecreta = document.getElementsByClassName("palavra-secreta");
const palavraCategoria = document.getElementById("categoria");
const dinamica = document.getElementsByClassName("letras");
const tecla = document.getElementsByClassName("tecla");
const dialogWin = document.getElementById("dialogoWin")

let palavraSort;
let tentativas = 0;
let score = 0
let USB = [];


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
    {
        nome: "Leite Condensado",
        categoria: "Comida"
    }
];

// Interface button

function pularPalavra() {
    setTimeout(() => {
        USB.pop()
        sort()
        restaurar()
    }, 2000)
};

function continuar() {
    setTimeout(() => {
        document.getElementById("acertou").style.display = "none"
        document.getElementById("errou").style.display = "none"
        document.getElementById("proximo").style.display = "none"
        document.getElementById("visor").style.display = "table-column"
        sort()
        restaurar()
    }, 1000)
};

// Interface jogo

sort()
function sort() {
    const indice = Math.floor(Math.random() * palavras.length)
    palavraSort = palavras[indice]
    verificarSort(indice)
};

function verificarSort(indice) {
    if (USB.includes(indice)) {
        sort()
    } else {
        USB.push(indice)
        palavraSecreta[0].innerHTML = ""
        palavraSecreta[1].innerHTML = ""
        montarTela()
    }
    document.getElementById("score").innerHTML = score
};

function montarTela() {
    let el = 0;
    for (let i = 0; i < palavraSort.nome.length; i++) {
        if (palavraSort.nome[i] == ' ') {
            el++
            palavraSort.nome = palavraSort.nome.replace(' ', '')
            palavraSecreta[el].innerHTML = palavraSecreta[el].innerHTML + "<div class='letras'>" + " " + "</div>"
        } else {
            palavraSecreta[el].innerHTML = palavraSecreta[el].innerHTML + "<div class='letras'>" + " " + "</div>"
        }
    }
    palavraCategoria.innerHTML = palavraSort.categoria
};

// teclas/letras/

let tabelaL = [];
let L = 0;
let erros = 0

function verificar(letra) {
    tabelaL.push(letra)
    if (palavraSort.nome.toUpperCase().includes(letra)) {
        for (let i = 0; i < palavraSort.nome.length; i++) {
            if (palavraSort.nome.toUpperCase()[i] == letra) {
                dinamica[i].innerHTML = palavraSort.nome[i]
                L++
            }
            trocarStyle("tecla-" + letra, letra)
        }
    } else {
        tentativas++
        trocarStyle("tecla-" + letra, letra)
        trocarImg(tentativas)
        if (tentativas >= 6) {
            setTimeout(() => {
                erros++
                modal(0)
            }, 1000)
        }
    }

    if (L == palavraSort.nome.length) {
        if (USB.length == palavras.length) {
            setTimeout(() => {
                modal(2)
            }, 1000)

        } else {

            document.getElementById("fraseTime").innerHTML = "Palavra Correta! Continue Assim!!"
            setTimeout(() => {
                trocarImg(tentativas)
                modal(1)
            }, 1000)
        }
    }
    
};

function trocarStyle(id, letra) {
    if (palavraSort.nome.toUpperCase().includes(letra)) {
        document.getElementById(id).style.color = "greenYellow"
        document.getElementById(id).style.cursor = "not-allowed"
        document.getElementById(id).disabled = true
    } else {
        document.getElementById(id).style.color = "red"
        document.getElementById(id).style.cursor = "not-allowed"
        document.getElementById(id).disabled = true
    }
};

let cont = 0;
trocarImg(tentativas)
function trocarImg(tentativas) {
    if (tentativas <= 6) {
        switch (tentativas) {
            case 1:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-1.png)";
                cont = 15
                break;
            case 2:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-2.png)";
                cont = 12
                break;
            case 3:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-3.png)";
                cont = 9
                break;
            case 4:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-4.png)";
                cont = 6
                break;
            case 5:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-5.png)";
                cont = 3
                break;
            case 6:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-6.png)";
                cont = 0
                break;

            default:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-0.png)";
                cont = 18
                break;
        }
    }

};

function restaurar() {
    tentativas = 0
    L = 0

    trocarImg(tentativas)

    for (let i = 0; i < tabelaL.length; i++) {
        let id = 'tecla-' + tabelaL[i]

        document.getElementById(id).style.color = "white"
        document.getElementById(id).style.cursor = "pointer"
        document.getElementById(id).disabled = false
    }
    tabelaL = []
};

function modal(V) {
    if (V == 0) {
        if (USB.length == palavras.length) {
            if (erros > 0) { modal(2) }
            return
        }
        document.getElementById("fraseFail").innerHTML = "Você Falhou!!!"

        document.getElementById("errou").style.display = "flex"
        document.getElementById("visor").style.display = "none"

        setTimeout(() => {
            document.getElementById("fraseFail").innerHTML = "Deseja Continuar!?"
            document.getElementById("pergunta").style.display = "flex"
        }, 2000)

    } else if (V == 1) {
        score = score + cont

        document.getElementById("visor").style.display = "none"
        document.getElementById("acertou").style.display = "flex"

        setTimeout(() => {
            document.getElementById("fraseTime").innerHTML = "Procurando nova Palavra no Dicionario..."
            setTimeout(() => {
                document.getElementById("fraseTime").innerHTML = "Palavra Encontrada!!"
                document.getElementById("score").innerHTML = score
                document.getElementById("proximo").style.display = "flex"
            }, 5000)
        }, 2500)

    } else {
        if (erros > 0) {
            document.getElementById("fraseTime").innerHTML = "Reprovado!!!"
            document.getElementById("visor").style.display = "none"
            document.getElementById("acertou").style.display = "flex"
            setTimeout(() => {
                document.getElementById("fraseTime").innerHTML = "Tente de novo na proxima"
                setTimeout(() => {window.location.replace("./index.html");},3000)
            },3000)

        } else {
            dialogWin.showModal()
            setTimeout(() => {
                window.location.replace("./index.html");
            }, 10000)

        } 
    }
};

function prox(escolha) {
    setTimeout(() => {
        document.getElementById("pergunta").style.display = "none"
        if (escolha == "sim") {
            document.getElementById("fraseFail").innerHTML = "Procurando nova Palavra no Dicionario..."
            setTimeout(() => {
                document.getElementById("fraseFail").innerHTML = "Motando palavra!!"
                setTimeout(() => {
                    continuar()
                }, 2000)
            }, 5000)

        } else {
            setTimeout(() => {
                window.location.replace("./index.html")
            }, 1000)

        }
    }, 1000)
};