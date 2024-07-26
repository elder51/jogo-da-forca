const user = document.getElementById("nick")
let nome = ""

// tela/login
function handlesubmit(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    const nick = form.get('user')
    const password = CryptoJS.SHA256(form.get('password')).toString()

    const users =   JSON.parse(localStorage.getItem('users'))
    

    let userfound = null

    for(const user of users) {
        if(user.nick == nick) {
            userfound = user
            break
        }
    }

    if(!userfound) {
        document.getElementById('userError').innerHTML = 'Usuário não cadastrado'
        
    }

    if(userfound.password !== password) {
        document.getElementById('userError').innerHTML = ''
        document.getElementById('passwordError').innerHTML = 'Senha incorreta'
        nome = nick
    }
    document.getElementById('passwordError').innerHTML = ''

    user.innerHTML = userfound.nick
    nome = userfound.nick
    document.getElementById("log-in").style.display = "none"
    document.getElementById("userInter").style.display = "flex"

    fecharLogin()
    
}

function criarlogin(event) {
    event.preventDefault()
    
    const form = new FormData(event.target)
    
    const nick = form.get('user')
    const password = CryptoJS.SHA256(form.get('password')).toString()
    const question = form.get('question')
    const answer = form.get('answer')
    const score = 0

    const userObj = {
        nick,
        password,
        question,
        answer,
        score
    }
    
    let users = JSON.parse(localStorage.getItem('users'))

    if(!users) {
        localStorage.setItem('users',JSON.stringify([]))
        users = []
    }

    users.push(userObj)

    localStorage.setItem('users',JSON.stringify(users))
    
    fecharLogin()
    
}

function Recovery(event) {

}

// buttons
function abrirLogin() {
    document.getElementById('login').showModal()
}

function abrirCriarConta() {
    document.getElementById("fazerLogin").style.display = 'none'
    document.getElementById("criarConta").style.display = 'flex'
}

function abrirRecovery() {
    document.getElementById("fazerLogin").style.display = 'none'
    document.getElementById("recovery-password").style.display = 'flex'
}

function recuperar() {
    document.getElementById("fazerLogin").style.display = 'flex' 
    document.getElementById("recuperar").style.display = ''
}

function fecharLogin() {    
    document.getElementById('login').close()
    document.getElementById("fazerLogin").style.display = 'flex'
    document.getElementById("criarConta").style.display = 'none'
    document.getElementById("recovery-password").style.display = 'none'
    nome = ""
}

function scoreload() {

    const score = document.getElementById('score').innerHTML

    const users = JSON.parse(localStorage.getItem('users'))

    for(let user of users) {
        if(user.nick == nome) {
            if(score > user.score) {
                user.score = score
                localStorage.setItem('users',JSON.stringify(users))
                break
            }
        }
    }
}