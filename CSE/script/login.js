var input = document.getElementById("user");
var input2 = document.getElementById("senha");

const user = ["june", "pakiru", "gay"];
const senha = ["facadamaldada", "pipokapakill", "sougay"];

function loga() {
    if (user.includes(input.value)) {
        if (input2.value==senha[user.indexOf(input.value)]) {
            alert("Senha correta.");
        }
        else {
            alert("Senha errada.");
        }
    }
    else {
        alert("Usuário não detectado. Deseja criar uma nova conta?");
    }
}

function mostra() {
    alert(input.value + input2.value);
    input.value = "";
    input2.value = "";
}

var button = document.getElementById("logar");

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