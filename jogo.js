const palavraSecreta = document.getElementsByClassName("palavra-secreta");
const palavraCategoria = document.getElementById("categoria");
const dinamica = document.getElementsByClassName("letras");



let tentativas = 0;
let palavraSort;
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


sort()
function sort(){
    const indice = Math.floor(Math.random() * palavras.length)
    palavraSort = palavras[indice]
    verificarSort(indice) 
};

function verificarSort(indice){
    if(USB.includes(indice)) {
        sort()
    } else {
        USB.push(indice)
        palavraSecreta[0].innerHTML = ""
        palavraSecreta[1].innerHTML = ""
        montarTela()
        //restaurar()
    }
};

function montarTela() {
    let el = 0;
    for (let i = 0; i < palavraSort.nome.length;i++){
        if(palavraSort.nome[i] == ' '){
            el++
            palavraSort.nome = palavraSort.nome.replace(' ', '')
            palavraSecreta[el].innerHTML = palavraSecreta[el].innerHTML +"<div class='letras'>"+" "+"</div>"
        } else {
            palavraSecreta[el].innerHTML = palavraSecreta[el].innerHTML +"<div class='letras'>"+" "+"</div>"
        }
    }
    palavraCategoria.innerHTML = palavraSort.categoria
};

//teclas/letras
let N = 0
function verificar(letra) {
    
    if (palavraSort.nome.toUpperCase().includes(letra)) {
        for(let i = 0; i < palavraSort.nome.length;i++) {
            if(palavraSort.nome.toUpperCase()[i] == letra) {
                dinamica[i].innerHTML = palavraSort.nome[i]
                N++
                console.log(N)
            }
            trocarStyle("tecla-"+letra, letra)  
        }
    } else {
        tentativas++
        trocarImg(tentativas)
        trocarStyle("tecla-"+letra, letra)
    }
    // if()
};

function trocarStyle(id,letra){
    if (palavraSort.nome.toUpperCase().includes(letra)){
        document.getElementById(id).style.color = "green"
        document.getElementById(id).style.cursor = "not-allowed"
        document.getElementById(id).style.transform = "scale(1.0)"
        document.getElementById(id).onclick = true
    } else {
        document.getElementById(id).style.color = "red"
        document.getElementById(id).style.cursor = "not-allowed"
        document.getElementById(id).style.transform = "scale(1.0)"
        document.getElementById(id).onclick = true
    }
};

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
};

function restaurar() {
    

    //contadores
    tentativas = 0
    N = 0

    //img
    trocarImg(tentativas)
}
