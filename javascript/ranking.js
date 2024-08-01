const ranking = document.querySelector('table')
const menssage = document.getElementById('menssage')
const users = JSON.parse(localStorage.getItem('users')) ?? []
const nick = JSON.parse(localStorage.getItem('nick')) ?? "N"

users.sort((a, b) => b.score - a.score)

let ultimaPosicao = 0

for (let i = 0; i < users.length; i++) {
    const linha = document.createElement('tr')

    if (users[i].nick == nick) {
        linha.style.backgroundColor = 'darkgreen'
    }

    const posicao = document.createElement('td')

    if (users[i - 1]?.score != users[i].score) {
        ultimaPosicao++
    }

    posicao.innerHTML = ultimaPosicao

    const nome = document.createElement('td')
    nome.innerHTML = users[i].nick

    const score = document.createElement('td')
    score.innerHTML = users[i].score

    linha.append(posicao, nome, score)

    ranking.appendChild(linha)
}

function sair() {
    window.location.replace("./index.html");
}