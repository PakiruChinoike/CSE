const input = document.querySelectorAll("[data-input]")
const mensagem = document.querySelector("[data-mensagem]")

let inputSenha = document.querySelector("#senha").value
let inputUser = document.querySelector("#user").value

const user = ["june", "test3", "test"];
const senha = ["facadamaldada", "pipokap", "password"];

function loga() {
    if (user.includes(toString(inputUser))) {
        mensagem.setAttribute("data-mensagem", "visivel")
        if (inputSenha==senha[user.indexOf(inputUser)]) {
            mensagem.innerHTML = "Senha correta"
        }
        else {
            mensagem.innerHTML = "Senha incorreta"
        }
    }
    else {
        mensagem.setAttribute("data-mensagem", "visivel")
        mensagem.innerHTML = "Usuário não detectado. Deseja criar uma nova conta?"
        button.setAttribute("data-botao", "invisivel")

        const buttonNo = document.createElement("button")
        const noNode = document.createTextNode("Sim")
        buttonNo.appendChild(noNode)
        buttonNo.setAttribute("data-botao", "visivel")


        const buttonYes = document.createElement("button")
        const yesNode = document.createTextNode("Não")
        buttonYes.appendChild(yesNode)
        buttonYes.setAttribute("data-botao", "visivel")
        buttonYes.addEventListener("click", () => {
            cria()
        })

        document.querySelector(".botoes").appendChild(buttonYes)
        document.querySelector(".botoes").appendChild(buttonNo)
    }
}

function cria() {
    
}

const button = document.getElementById("logar")

button.onclick = loga;

input.forEach((element) => {
    element.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            loga();
        }
    })
})
