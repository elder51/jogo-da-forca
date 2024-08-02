const user = document.getElementById("nick");
let nome;
let nUsuario = JSON.parse(localStorage.getItem('nick'));

if(nUsuario){
    user.innerHTML = nUsuario
    document.getElementById("log-in").style.display = "none"
    document.getElementById("userInter").style.display = "flex"
    document.getElementById('log-out').style.display = 'block'
};

// tela/login
function handlesubmit(event) {
    event.preventDefault()

    document.getElementById('userError').innerHTML = ""

    const form = new FormData(event.target)

    const nick = form.get('user')

    if (!nick) {
        document.getElementById('userError').innerHTML = ""
        return
    }
    
    const password = CryptoJS.SHA256(form.get('password')).toString()
    

    const users =   JSON.parse(localStorage.getItem('users'))

    if(!users) {
        document.getElementById('userError').innerHTML = 'Usuário não cadastrado'
        return
    }

    let userfound = null

    for(const user of users) {
        if(user.nick == nick) {
            userfound = user
            break
        }
    }

    if (!userfound) {
        document.getElementById('userError').innerHTML = 'Usuário não cadastrado'
        return
    }

    if (userfound.password !== password) {
        document.getElementById('userError').innerHTML = ''
        document.getElementById('passwordError').innerHTML = 'senha incorreta'
        nome = nick
        return
    }

    if (userfound.nick == nick && userfound.password === password) {
        document.getElementById('passwordError').innerHTML = ''

        user.innerHTML = userfound.nick
        nome = userfound.nick
        document.getElementById("log-in").style.display = "none"
        document.getElementById("userInter").style.display = "flex"
        document.getElementById('log-out').style.display = 'block'

        localStorage.setItem('nick',JSON.stringify(userfound.nick))
    }

    fecharLogin()
};  

function criarlogin(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    let users = JSON.parse(localStorage.getItem('users'))

    const nick = form.get('user')
    const password = CryptoJS.SHA256(form.get('password')).toString()
    const question = form.get('question')
    const answer = CryptoJS.SHA256(form.get('answer')).toString()
    const score = '0'
    const usb = []
    const dica = '5'

    if(users){
        for (let user of users) {
            if (nick == user.nick) {
                document.getElementById('userExist').innerHTML = 'Usuário já cadastrado'
                return
            }
        }
    }

    document.getElementById('userExist').innerHTML = ''

    const userObj = {
        nick,
        password,
        question,
        answer,
        score,
        dica,
        usb
    }

    if (!users) {
        localStorage.setItem('users', JSON.stringify([]))
        users = []
    }

    users.push(userObj)

    localStorage.setItem('users', JSON.stringify(users))

    user.innerHTML = nick
    document.getElementById("log-in").style.display = "none"
    document.getElementById("userInter").style.display = "flex"
    document.getElementById('log-out').style.display = 'block'

    localStorage.setItem('nick',JSON.stringify(nick))
    

    fecharLogin()
};

function Recovery(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    const error = document.getElementById('error')

    const users =   JSON.parse(localStorage.getItem('users'))
    const answer = CryptoJS.SHA256(form.get('resposta')).toString()

    let userfound = null

    for(const user of users) {
        if(user.nick == nome) {
            userfound = user
            break
        }
    }
    
    if (userfound.answer != answer) {
        error.innerHTML = 'Resposta incorreta'
        return
    } else {
        error.innerHTML = '&nbsp;'
        document.getElementById('newPassword').style.display = 'contents'
        document.getElementById('recovery-password').style.display = 'none'
    }
};

function changePassword(event) {
    event.preventDefault()

    const form = new FormData(event.target)

    const password = CryptoJS.SHA256(form.get('password')).toString()
    const users =   JSON.parse(localStorage.getItem('users'))

    let userfound = null

    for(const user of users) {
        if(user.nick == nome) {
            userfound = user
            break
        }
    }

    userfound.password = password
    localStorage.setItem('users',JSON.stringify(users))
    fecharLogin()
};

// buttons
function abrirLogin() {
    document.getElementById("fazerLogin").style.display = 'contents'
    document.getElementById('login').showModal()
};

function abrirRecovery() {
    if(!nome){
        return
    }

    const pergunta = document.getElementById('pergunta')

    const users =   JSON.parse(localStorage.getItem('users'))

    let userfound = null

    
    for(const user of users) {
        if(user.nick == nome) {
            userfound = user
            break
        }
    }

    pergunta.innerHTML = userfound.question

    document.getElementById("fazerLogin").style.display = 'none'
    document.getElementById("recovery-password").style.display = 'contents'
};

function abrirCriarConta() {
    document.getElementById("fazerLogin").style.display = 'none'
    document.getElementById("criarConta").style.display = 'contents'
};

function recuperar() {
    document.getElementById("fazerLogin").style.display = 'contents' 
    document.getElementById("recuperar").style.display = '&nbsp;'
};

function fecharLogin() {
    document.getElementById('login').close()
    document.getElementById("fazerLogin").style.display = 'none'
    document.getElementById("criarConta").style.display = 'none'
    document.getElementById("recovery-password").style.display = 'none' 
    document.getElementById('newPassword').style.display = 'none'
    document.getElementById('verification').style.display = 'none'
    nome = "&nbsp;"
};

function logout() {
    localStorage.removeItem('nick')
    document.getElementById("log-in").style.display = "flex"
    document.getElementById("userInter").style.display = "none"
    document.getElementById('log-out').style.display = 'none'
};

function verification(V) {
    if(V == 'sim'){
        window.location.replace("./jogo.html");
    } else {
        fecharLogin()
    }
};

function openA(){
    const nick =  JSON.parse(localStorage.getItem('nick'))
    if(nick){
        window.location.replace("./jogo.html");
        return
    }
    document.getElementById("verification").style.display = 'flex'
    document.getElementById('login').showModal()
};