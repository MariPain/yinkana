const email = document.getElementById("email")
const pass = document.getElementById("password")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

function checkEmail(emailOrNot) {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    if (!regexEmail.test(emailOrNot.value)) {
        return false;
    }
    return true;
}



form.addEventListener("submit", e => {

    let warnings = ""
    let entrar = false

    parrafo.innerHTML = ""
    if (!checkEmail(email)) {
        warnings += `El email no es valido <br>`

        entrar = true
    }
    if (pass.value.length < 10 || pass.value.length > 20) {
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }
    if (entrar) {
        parrafo.innerHTML = warnings
        e.preventDefault()
    } else {
        parrafo.innerHTML = "Enviado"
    }
})