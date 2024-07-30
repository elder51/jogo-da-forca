const rank = document.getElementsByClassName('ranking')
const users = JSON.parse(localStorage.getItem('users'))

let score = []
let dados = []
let p = 0

for (let user of users) {
    score.push(user.score)
    dados.push([user.nick, user.score])
}

let position = []

ordenar()
function ordenar() {
    let max = score.reduce(function (a, b) { return Math.max(a, b) })

    for (let i = 0; i <= score.length; i++) {
        if (score[i] == max) {
            position.push(dados[i])
            score.splice(i, 1)
            dados.splice(i, 1)
        }
    }

    if (position.length == users.length) {
        montar()
        return
    } else {
        ordenar()
    }
}

function montar() {
    for (let l of position) {
        p++

        const position = document.createElement('position')
        position.className = 'position'
        document.getElementById('Ranking').appendChild(position)

        const positionRanking = document.createElement('pr')
        positionRanking.className = 'hashe'
        positionRanking.innerHTML = p
        position.appendChild(positionRanking)

        const nickRanking = document.createElement('nr')
        nickRanking.className = 'nick'
        nickRanking.innerHTML = l[0]
        position.appendChild(nickRanking)

        const scoreRanking = document.createElement('sr')
        scoreRanking.className = 'score'
        scoreRanking.innerHTML = l[1]
        position.appendChild(scoreRanking)
    }
}

function sair() {
    window.location.replace("./index.html");
}