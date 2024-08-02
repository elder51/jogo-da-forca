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

const users = JSON.parse(localStorage.getItem('users'));
const nick = JSON.parse(localStorage.getItem('nick'));

if (nick) {
    for (let user of users) {
        if (nick == user.nick) {
            score = parseInt(user.score)
            USB = user.usb
            dica = user.dica
            break
        }
    }
};

document.getElementById("score").innerHTML = score;
document.getElementById("dica").innerHTML = dica;
document.getElementById("chances").innerHTML = chances;

const frasePalavraCorreta = [
    ["Palavra correta! Continue assim!!", "Procurando nova palavra no dicionario...", "Palavra encontrada!!"],
    ["Você acertou! Parabéns!", "Aguarde um momento...", "Você conseguiu!!"]
];

const frasePalavraErrada = [
    ["Palavra incorreta!", "Aguarde enquanto procuramos uma nova palavra...", "Montando nova palavra!!"],
    ["Errado! Tente novamente!", "Buscando nova palavra...", "Não desista! Nova palavra chegando..."]
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
        nome: "Micro-ondas",
        categoria: "objeto",
        dica1: 'Tem tempo',
        dica2: 'Gera calor',
        dica3: 'Tem na cozinha'
    },
    {
        nome: "Cachorro quente",
        categoria: "Comida",
        dica1: "Salsicha",
        dica2: "Molho",
        dica3: "Vai querer completo?"
    },
    {
        nome: "Amendoim",
        categoria: "Comida",
        dica1: "Possui Casca",
        dica2: "Fornece outras comidas",
        dica3: "Paçoca"
    },
    {
        nome: "Arroz",
        categoria: "Comida",
        dica1: "Branco",
        dica2: "Grão",
        dica3: "Alomoço"
    },
    {
        nome: "Amora",
        categoria: "Comida",
        dica1: "Cor Preta",
        dica2: "Antioxidante",
        dica3: "Cacho",
    },
    {
        nome: "Abacaxi",
        categoria: "Comida",
        dica1: "Possui cor amarela",
        dica2: "Coroa",
        dica3: "Possui Casca"
    },{
        nome: "Balde",
        categoria: "Objeto",
        dica1: "É de plástico ou alumínio",
        dica2: "Pode ser de tinta ou de manteiga",
        dica3: "Pode ter alças"
    },
    {
        nome: "Carta",
        categoria: "Objeto",
        dica1: "É envelopado",
        dica2: "Escrito a mão",
        dica3: "Destinatário / Remetente"
    },
    {
        nome: "Cadeira",
        categoria: "Objeto",
        dica1: "Pode ser de plástico ou madeira",
        dica2: "Usada em cômodos",
        dica3: "Serve pra sentar"
    },
    {
        nome: "Computador",
        categoria: "Objeto",
        dica1: "Aparelho eletrônico",
        dica2: "Tem periféricos",
        dica3: "Sistemas operacionais"
    },
    {
        nome: "Caneta",
        categoria: "Objeto",
        dica1: "Tinta azul, preta ou vermelha",
        dica2: "Pode ser esferográfica",
        dica3: "Usada geralmente em provas"
    },
    {
        nome: "Disco",
        categoria: "Objeto",
        dica1: "É redondo",
        dica2: "Música",
        dica3: "Relíquia"
    },
    {
        nome: "Despertador",
        categoria: "Objeto",
        dica1: "Tempo",
        dica2: "Serve como lembrete",
        dica3: "Faz barulho"
    },
    {
        nome: "Dicionário",
        categoria: "Objeto",
        dica1: "Palavras",
        dica2: "Idiomas",
        dica3: "Significados"
    },
    {
        nome: "Dentadura",
        categoria: "Objeto",
        dica1: "Molde",
        dica2: "Feito de acrílico",
        dica3: "Pessoas idosas usam"
    }
];

// Interface button

function reiniciar() {
    setTimeout(() => {
        score = 0
        dica = 5
        chances = 3
        document.getElementById("score").innerHTML = score;
        document.getElementById("dica").innerHTML = dica;
        document.getElementById("chances").innerHTML = chances;
        USB = []
        restaurar()
        verificarSort()
        if(nick) {scoreload()}
    }, 500)
};


function continuar() {
    setTimeout(() => {
        if (dica <= 3) {
            chances = dica
        } else {
            chances = 3
        }
        document.getElementById("dica").innerHTML = dica
        document.getElementById("chances").innerHTML = chances
        restaurar()
        verificarSort()
    }, 500)
};

// Interface jogo

let nome = ""
let nomesecreto = nome.normalize('NFD').replace(/[^a-zA-Z\s-]/g,'');

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
        document.getElementById('visor').innerHTML = ''
        montarTela()
    }
};

function montarTela() {
    nome = ''
    p = palavraSort.nome.split(" ") 

    for (const n of p) {

        const palavraSecreta = document.createElement('tr')
        palavraSecreta.className = 'palavra-secreta'
        document.querySelector('table').appendChild(palavraSecreta)

        for (const i of n) {

            const letra = document.createElement('td')
            letra.className = 'letras'
            palavraSecreta.appendChild(letra)

            if (i == '-') {
                letra.innerHTML = i
                letra.style.border = 'transparent'
            }
        }

    }
    palavraCategoria.innerHTML = palavraSort.categoria

    for (const n of p) {
        nome = nome + n   
    }
    
    nomesecreto = nome.normalize('NFD').replace(/[^a-zA-Z\s-]/g,'')
};

// teclas/letras/

let letraschamadas = [];
let L = 0;
let h = 0;
let d = 1;

function verificar(letra) {
    letraschamadas.push(letra)

    if (nomesecreto.toUpperCase().includes(letra)) {
        for (let i = 0; i < nome.length; i++) {
            if (nomesecreto.toUpperCase()[i] == letra) {
                dinamica[i].innerHTML = nome[i]
                L++
            }
            trocarStyle("tecla-" + letra, letra)
        }
    } else {
        tentativas++
        trocarStyle("tecla-" + letra, letra)
        trocarImg(tentativas)

        if (tentativas >= 6) {
            modal('errou')
        }
    }

    if (nome.toUpperCase().includes("-")) {
        h = 1
    }

    if (L >= nome.length - h) {
        if (USB.length == palavras.length) {
            modal('certificado')

        } else {
            trocarImg(tentativas)
            modal('acertou')
        }
    }

};

function trocarStyle(id, letra) {
    document.getElementById(id).style.cursor = "not-allowed"
    document.getElementById(id).disabled = true

    if (nomesecreto.toUpperCase().includes(letra)) {
        document.getElementById(id).style.color = "greenYellow"

    } else {
        document.getElementById(id).style.color = "red"
    }
};

let lErradas = 0;
function trocarImg(tentativas) {
    if (tentativas <= 6) {
        switch (tentativas) {
            case 1:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-1.webp)";
                lErradas = 15
                break;
            case 2:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-2.webp)";
                lErradas = 30
                break;
            case 3:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-3.webp)";
                lErradas = 45
                break;
            case 4:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-4.webp)";
                lErradas = 60
                break;
            case 5:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-5.webp)";
                lErradas = 75
                break;
            case 6:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-6.webp)";
                lErradas = 75
                break;

            default:
                document.getElementById("image").style.backgroundImage = "url(./img/forca-0.webp)";
                lErradas = 0
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

    document.getElementById('dica1').innerHTML = ''
    document.getElementById('dica2').innerHTML = ''
    document.getElementById('dica3').innerHTML = ''

    document.getElementById("visorDialogo").style.display = "none"
    document.getElementById("visor").style.display = "table-column"

    if (dica > 0) {
        document.getElementById('Pedirdica').disabled = false
        document.getElementById('Pedirdica').style.color = "white"
        document.getElementById('Pedirdica').style.cursor = "pointer"
    }

    for (let i = 0; i < letraschamadas.length; i++) {
        let id = 'tecla-' + letraschamadas[i]

        document.getElementById(id).style.color = "white"
        document.getElementById(id).style.cursor = "pointer"
        document.getElementById(id).disabled = false
    }

    letraschamadas = []
};

let cUsadas = 0;
function modal(V) {
    if (V == 'certificado') {
        score = (score + (100 - (lErradas + cUsadas)))
        dialog.showModal() 
        document.getElementById('userNick').innerHTML = nick ?? ''
        setTimeout(() => {
            scoreload()
            sair()
        }, 10000)

    }

    if (V == 'acertou') {
        score =  (score + (100 - (lErradas + cUsadas)))
        setTimeout(() => {
            if (tentativas == 0) {
                dica++
            }
            colocarFrase(frasePalavraCorreta)
        }, 500)

    }

    if (V == 'errou') {
        score = Math.floor(score - (score / 10))
        setTimeout(() => {
            colocarFrase(frasePalavraErrada)
        }, 500)
    }
};

function dicas(V) {
    if (V == "pedir") {
        document.getElementById("menu-1").style.display = "none"
        document.getElementById("menu-2").style.display = "contents"
        setTimeout(() => {
            document.getElementById("menu-2").style.display = "none"
            document.getElementById("menu-1").style.display = "contents"
        }, 5000)
    }

    if (V == "voltar") {
        document.getElementById("menu-2").style.display = "none"
        document.getElementById("menu-1").style.display = "contents"
    }


    if (V == "letra") {
        const indice = sort(nomesecreto)
        if (letraschamadas.includes(nomesecreto[indice].toUpperCase())) {
            dicas('letra')
        } else {
            dica--
            chances--
            verificar(nomesecreto[indice].toUpperCase())
        }
    }

    if (V == 'dica') {
        switch (d) {
            case 1:
                document.getElementById('dica1').innerHTML = 'Dica 1:&nbsp;' + palavraSort.dica1
                d++
                dica--
                chances--
                break;
            case 2:
                document.getElementById('dica2').innerHTML = 'Dica 2:&nbsp;' + palavraSort.dica2
                d++
                dica--
                chances--
                break;
            case 3:
                document.getElementById('dica3').innerHTML = 'Dica 3:&nbsp;' + palavraSort.dica3
                dica--
                chances--
                break;
        }
    }

    if (chances == 0) {
        document.getElementById('Pedirdica').disabled = true
        document.getElementById('Pedirdica').style.color = "gray"
        document.getElementById('Pedirdica').style.cursor = "not-allowed"

        document.getElementById("menu-2").style.display = "none"
        document.getElementById("menu-1").style.display = "contents"
    }

    document.getElementById("dica").innerHTML = dica
    document.getElementById("chances").innerHTML = chances

    switch (chances) {
        case 0:
            cUsadas = 25
            break;
        case 1:
            cUsadas = 10
            break;
        case 2:
            cUsadas = 5
            break;

        default:
            cUsadas = 0
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
    function proximaFrase(frase) {

        setTimeout(() => {
            if (delay >= frase.length - 1) {
                document.getElementById("menu-2").style.display = "none"
                document.getElementById("menu-1").style.display = "contents"
                continuar()

            } else {
                delay++
                document.getElementById('frase').innerHTML = frase[delay]
                proximaFrase(frase)

            }
        }, 2000)
    }
};

function scoreload() {
    if (nick) {
        for (let user of users) {
            if (user.nick == nick) {
                user.score = score
                user.dica = dica
                if(USB == palavras) {
                    user.usb = []
                } else {
                    USB.pop()
                    user.usb = USB
                }
                localStorage.setItem('users', JSON.stringify(users))
                break
            }
        }
    } 
};

function sair() {
    scoreload()
    setTimeout(() => {
        if (nick) {

            window.location.replace("./ranking.html");
            return

        }

        window.location.replace("./index.html");
        return

    }, 500)
}