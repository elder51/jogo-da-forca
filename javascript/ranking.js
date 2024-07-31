const rank = document.getElementsByClassName('ranking')
const menssage = document.getElementById('menssage')
const users = JSON.parse(localStorage.getItem('users'))
const nick = JSON.parse(localStorage.getItem('nick'))

let score = []
let dados = []
let place = []
let p = 0

menssage.innerHTML = 'Ainda não tem niguém aqui, seja o primeiro e faça login!'

if(users){
    menssage.innerHTML = ''
    for (let user of users) {
        score.push(user.score)
        dados.push([user.nick, user.score])
    }
    ordenar()
}

function ordenar() {
    let max = score.reduce(function (a, i) { return Math.max(a, i) })

    for (let i = 0; i <= score.length; i++) {
        if (score[i] == max) {
            place.push(dados[i])
            score.splice(i, 1)
            dados.splice(i, 1)
        }
    }

    if (place.length == users.length) {
        montar()
        return
    } else {
        ordenar()
    }
}

function montar() {
    for (let l of place) {
        p++

        const position = document.createElement('position')
        position.className = 'position'
        if (nick == l[0]) {position.style.color = 'yellow'}
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