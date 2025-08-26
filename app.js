let amigos = [];

function agregarAmigo(){
    let input = document.getElementById("amigo");
    let nombre = input.value.trim()

    if(nombre === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    actualizarAmigo();

    input.value = "";
}

function actualizarAmigo(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);

    }
}

function sortearAmigo(){
    let resultado = document.getElementById("resultado");
    
    if(amigos.length ===0){
        resultado.innerHTML = "No hay amigos en la lista!";
        return;
    }

    let numero = Math.floor(Math.random()*amigos.length);
    resultado.innerHTML = "El amigo secreto es:" + amigos[numero];
}
        
