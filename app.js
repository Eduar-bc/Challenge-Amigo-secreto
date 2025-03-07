
let amigos = [];
function agregarAmigo() {
    document.getElementById("resultado").innerHTML = "";
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        
        alert("Este amigo ya está en la lista.");
        document.getElementById("amigo").value = "";
        return;
    }

    amigos.push(nombre);
    document.getElementById("amigo").value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (amigos.length > 0) {
        let numeroAleatorio = Math.floor(Math.random() * amigos.length);
        let resultadoSorteo = document.createElement("li");
        resultadoSorteo.textContent = "El amigo secreto sorteado es: " + amigos[numeroAleatorio];
        resultado.appendChild(resultadoSorteo);
        amigos = [];
        actualizarListaAmigos();
    } else {
        alert("No has ingresado ningún amigo");
    }
}