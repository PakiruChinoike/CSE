const controle = document.querySelectorAll("[data-controle]")
const modificador = document.querySelectorAll("[data-modificador]")

controle.forEach((elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        if (evento.target.dataset.controle==="+") {
            aumentaModificador(evento.target.dataset.atributo, evento.target.parentNode)
        }
        else {
            diminuiModificador(evento.target.dataset.atributo, evento.target.parentNode)
        }
    })
})

function manipulaDados(operacao, controle) {
    const atribute = controle.querySelector("[data-contador]")

    if(operacao==="+") {
        if(parseInt(atribute.value)>=30) {
            atribute.value = 30;
        }
        else {
            atribute.value = parseInt(atribute.value) + 1
        }
    }
    else {
        if(parseInt(atribute.value)<=0) {
            atribute.value = 0;
        }
        else {
            atribute.value = parseInt(atribute.value) - 1
        }
    }
}

function aumentaModificador(atributo, controle) {
    const atribute = controle.querySelector("[data-contador]")

    modificador.forEach((elemento) => {
        if (elemento.dataset.modificador===atributo) {
            if (parseInt(atribute.value)%2==0) {
                if (parseInt(elemento.textContent)<10) {
                elemento.textContent = parseInt(elemento.textContent) + 1
                    if (parseInt(elemento.textContent)>0) {
                        elemento.textContent = "+" + elemento.textContent
                    }
                }
                else {
                    elemento.textContent = "+10"
                }
            }
        }
    })
}

function diminuiModificador(atributo, controle) {
    const atribute = controle.querySelector("[data-contador]")

    modificador.forEach((elemento) => {
        if (elemento.dataset.modificador===atributo) {
            if (parseInt(atribute.value)%2==0) {
                if (parseInt(elemento.textContent)>-5) {
                elemento.textContent = parseInt(elemento.textContent) - 1
                    if (parseInt(elemento.textContent)>0) {
                        elemento.textContent = "+" + elemento.textContent
                    }
                }
                else {
                    elemento.textContent = "-5"
                }

            }
        }
    })
}
