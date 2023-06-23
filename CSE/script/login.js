let input = document.getElementById("user");
let input2 = document.getElementById("senha");

const user = ["june", "pakiru", "gay"];
const senha = ["facadamaldada", "pipokapakill", "sougay"];

function loga() {
    if (user.includes(input.value)) {
        alert(input2.value===senha[user.indexOf(input.value)] ? "Senha correta" : "Senha incorreta") 
    }
    else {
        alert("Usuário não detectado. Deseja criar uma nova conta?");
    }
    input.value = "";
    input2.value = "";
}

function mostra() {
    alert(input.value + input2.value);
    input.value = "";
    input2.value = "";
}

let button = document.getElementById("logar");

button.onclick = loga;

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("logar").click();
    }
});

input2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("logar").click();
    }
});