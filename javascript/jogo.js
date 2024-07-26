const palavraSecreta = document.getElementsByClassName("palavra-secreta");
const palavraCategoria = document.getElementById("categoria");
const dinamica = document.getElementsByClassName("letras");
const tecla = document.getElementsByClassName("tecla");
const dialog = document.getElementById("dialogo");

let palavraSort;
let tentativas = 0;
let USB = [];
let score = 0;
let dica = 5;
let chances = 3;
let delay = 0;

function playA(V) {
    document.getElementsByTagName('audio')[V].play()
}
function stopA(V) {
    document.getElementsByTagName('audio')[V].pause()
}

document.getElementById("score").innerHTML = score;
document.getElementById("dica").innerHTML = dica;
document.getElementById("chances").innerHTML = chances;

const frasePalavraCorreta = [
    ["Palavra correta! Continue assim!!","Procurando nova palavra no dicionario...","Palavra encontrada!!"],
    ["Você acertou! Parabéns!","Aguarde um momento...","Você conseguiu!!"]
];

const frasePalavraErrada = [
    ["Palavra incorreta!","Aguarde enquanto procuramos uma nova palavra...","Montando nova palavra!!"],
    ["Errado! Tente novamente!","Buscando nova palavra...","Não desista! Nova palavra chegando..."]
];

const fraseReprovado = [
    ["Reprovado!!!","Tente novamente mais tarde!"]
];

const palavras = [
    {
        nome: "Abacate",
        categoria: "comida",
        dica1: 'É uma fruta',
        dica2: 'Tem caroço',
        dica3: 'É verde'
    },
    {
        nome: "Pimentão",
        categoria: "Comida",
        dica1: 'É uma verdura',
        dica2: 'tem em varias cores',
        dica3: 'Mais Conhecidas nas cores vermelho, amarelo e verde'
    },
    {
        nome: "Coruja",
        categoria: "Animal",
        dica1: 'Tem olhos grandes',
        dica2: 'É noturno',
        dica3: 'Pode girar a cabeça em ate 270º'
    },
    {
        origin: "Micro-ondas",
        nome: "Micro-ondas",
        categoria: "objeto",
        dica1: 'Tem tempo',
        dica2: 'Gera calor',
        dica3: 'Tem na cozinha'
    }
];

// Interface button

function reiniciar() {
    setTimeout(() => {
        score = 0
        dica = 5
        chances = 3
        erros = 0
        document.getElementById("score").innerHTML = score;
        document.getElementById("dica").innerHTML = dica;
        document.getElementById("chances").innerHTML = chances;
        USB = []
        restaurar()
        verificarSort()
    }, 1000)
};


function continuar() {
    setTimeout(() => {
        if(dica <= 3) {
            chances = dica  
        } else {
            chances = 3
        }
        document.getElementById("dica").innerHTML = dica
        document.getElementById("chances").innerHTML = chances
        restaurar()
        verificarSort()
    }, 1000)
};

// Interface jogo


function sort(V) {
    const indice = Math.floor(Math.random() * V.length)
    
    return indice
};

verificarSort()
function verificarSort() {
    const indice = sort(palavras)
    
    if (USB.includes(indice)) {
        verificarSort()
    } else {
        USB.push(indice)
        palavraSort = palavras[indice]

        palavraSecreta[0].innerHTML = ""
        palavraSecreta[1].innerHTML = ""
        montarTela()
    }
};

function montarTela() {
    let el = 0;
    for (let i = 0; i < palavraSort.nome.length; i++) {
        if (palavraSort.nome[i] == ' ') {
            el++
            palavraSort.nome = palavraSort.nome.replace(' ', '')
            palavraSecreta[el].innerHTML = palavraSecreta[el].innerHTML + "<div class='letras'>" + " " + "</div>"
        } else if(palavraSort.nome[i] == '-') {
            palavraSecreta[el].innerHTML = palavraSecreta[el].innerHTML + "<div class='letras' style='border: transparent;'>" + "-" + "</div>"
        } else {
            palavraSecreta[el].innerHTML = palavraSecreta[el].innerHTML + "<div class='letras'>" + " " + "</div>"
        }
    }
    palavraCategoria.innerHTML = palavraSort.categoria
};

// teclas/letras/

let tabelaL = [];
let L = 0;
let erros = 0;
let h = 0
let d = 1

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
            erros++
            modal('errou')
        }
    }

    if (palavraSort.nome.toUpperCase().includes("-")) {
        h = 1
    }

    if (L == palavraSort.nome.length-h) {
        if (USB.length == palavras.length && erros == 0) {
            modal('certificado')

        } else if (USB.length == palavras.length && erros > 0) {
            modal('falhou')

        } else {
            trocarImg(tentativas)
            modal('acertou')
        }
    }

};

function trocarStyle(id, letra) {
    document.getElementById(id).style.cursor = "not-allowed"
    document.getElementById(id).disabled = true

    if (palavraSort.nome.toUpperCase().includes(letra)) {
        document.getElementById(id).style.color = "greenYellow"
        
    } else {
        document.getElementById(id).style.color = "red"
    }
};

let lErradas = 60;
function trocarImg(tentativas) {
    if (tentativas <= 6) {
        switch (tentativas) {
            case 1:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-1.png)";
                lErradas = 50
                break;
            case 2:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-2.png)";
                lErradas = 40
                break;
            case 3:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-3.png)";
                lErradas = 30
                break;
            case 4:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-4.png)";
                lErradas = 20
                break;
            case 5:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-5.png)";
                lErradas = 10
                break;
            case 6:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-6.png)";
                lErradas = 0
                break;

            default:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-0.png)";
                lErradas = 60
                break;
        }
    } else {
        return
    }
};

function restaurar() {
    tentativas = 0
    L = 0
    h = 0
    d = 1

    trocarImg(tentativas)

    document.getElementById("visorDialogo").style.display = "none"
    document.getElementById("visor").style.display = "table-column"

    if(dica > 0) {
        document.getElementById('Pedirdica').disabled = false
        document.getElementById('Pedirdica').style.color = "white"
        document.getElementById('Pedirdica').style.cursor = "pointer"
    }

    for (let i = 0; i < tabelaL.length; i++) {
        let id = 'tecla-' + tabelaL[i]

        document.getElementById(id).style.color = "white"
        document.getElementById(id).style.cursor = "pointer"
        document.getElementById(id).disabled = false
    }

    tabelaL = []

    if(palavraSort.origin) {
        palavraSort.nome = palavraSort.origin
        return
    }
};

let cUsadas = 40;
function modal(V) {

    if (V == 'certificado') {
        dialog.showModal()
        scoreload()
        setTimeout(() => {
            window.location.replace("./index.html");
        }, 10000)

    } else if (V == 'acertou') {
        setTimeout(() => {
            score = score + lErradas + cUsadas
            if (tentativas == 0) {
                dica++
            }
            colocarFrase(frasePalavraCorreta)
        }, 1000)

    } else if (V == 'errou') {
        setTimeout(() => {
            score = (score - (score / 10))

            colocarFrase(frasePalavraErrada)
        }, 1000)
        

    } else {
        setTimeout(() => {
            colocarFrase(fraseReprovado)
        }, 1000)

    }
};

function dicas(V) {
    if(V == "pedir") {
        document.getElementById("menu-1").style.display = "none"
        document.getElementById("menu-2").style.display = "contents"
        setTimeout(() => {
            document.getElementById("menu-2").style.display = "none"
            document.getElementById("menu-1").style.display = "contents"
        },5000)
    }

    if (V == "voltar") {
        document.getElementById("menu-2").style.display = "none"
        document.getElementById("menu-1").style.display = "contents"
    }
    
    
    if(V == "letra") {
        const indice = sort(palavraSort.nome)
        if(tabelaL.includes(palavraSort.nome[indice].toUpperCase())) {
            dicas('letra')
        } else {
            dica--
            chances--
            verificar(palavraSort.nome[indice].toUpperCase())
        }
    }

    if (V == 'dica') {
        switch (d) {
            case 1:
                document.getElementById('dica1').innerHTML = palavraSort.dica1
                document.getElementById('dica-1').style.display = 'flex'
                d++
                break;
            case 2:
                document.getElementById('dica2').innerHTML = palavraSort.dica2
                document.getElementById('dica-2').style.display = 'flex'
                d++
                break;
            case 3:
                document.getElementById('dica3').innerHTML = palavraSort.dica3
                document.getElementById('dica-3').style.display = 'flex'
                break;
        }
    }

    if(chances == 0) {
        document.getElementById('Pedirdica').disabled = true
        document.getElementById('Pedirdica').style.color = "gray"
        document.getElementById('Pedirdica').style.cursor = "not-allowed"

        setTimeout(() => {
            document.getElementById("menu-2").style.display = "none"
            document.getElementById("menu-1").style.display = "contents"
        },500)
    }

    document.getElementById("dica").innerHTML = dica
    document.getElementById("chances").innerHTML = chances

    switch (chances) {
        case 0:
            cUsadas = 0
            break;
        case 1:
            cUsadas = 20
            break;
        case 2:
            cUsadas = 35
            break;
    
        default:
            cUsadas = 40
            break;
    }

};

function colocarFrase(arrayDeFrases) {
    delay = 0

    document.getElementById("visor").style.display = "none"
    document.getElementById("visorDialogo").style.display = "flex"

    const indice = sort(arrayDeFrases)
    const frase = arrayDeFrases[indice]

    document.getElementById('frase').innerHTML = frase[delay]
    document.getElementById("score").innerHTML = score

    proximaFrase(frase)
    function proximaFrase(frase){
        
        setTimeout(()=>{
            if (delay >= frase.length - 1) {
                if (frase.length == 2) {
                    window.location.replace("./index.html")

                } else {
                    document.getElementById("menu-2").style.display = "none"
                    document.getElementById("menu-1").style.display = "contents"
                    continuar()

                }

            } else {
                delay++
                document.getElementById('frase').innerHTML = frase[delay]
                proximaFrase(frase)

            } 
        },2000)
    }
}

function scoreload() {

    const score = document.getElementById('score').innerHTML

    const users = JSON.parse(localStorage.getItem('users'))
    const nick =  JSON.parse(localStorage.getItem('nick'))

    if(!nick){
        for(let user of users) {
            if(user.nick == nick) {
                if(score > user.score) {
                    user.score = score
                    localStorage.setItem('users',JSON.stringify(users))
                    break
                }
            }
        }
    }
    
    window.location.replace("./index.html");
}