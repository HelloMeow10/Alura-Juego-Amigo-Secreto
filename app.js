// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaDeAmigos = [];

function limpiarCaja() {
    document.querySelector('#amigo').value = ''; // Limpia la caja de texto
}

function agregarAmigo() {
    let amigoDeUsuario = document.querySelector('#amigo').value.trim(); // Eliminar espacios en blanco

    if (amigoDeUsuario) { // Validar que no esté vacío
        listaDeAmigos.push(amigoDeUsuario);

        // Actualizar la lista visible en el HTML
        let listaAmigosElemento = document.getElementById('listaAmigos');
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigoDeUsuario;
        listaAmigosElemento.appendChild(nuevoElemento);

        console.log(listaDeAmigos); // Imprimir la lista actualizada en la consola
        limpiarCaja(); // Limpia el input después de añadir
    } else {
        alert('Por favor, ingrese un nombre válido.'); // Mostrar alerta si el campo está vacío
    }
}

function sortearAmigo() {
    if (listaDeAmigos.length > 0) {
        let cantidadAmigos = listaDeAmigos.length;
        let sorteoDeAmigos = Math.floor(Math.random() * cantidadAmigos);
        let amigoElegido = listaDeAmigos[sorteoDeAmigos];

        // Mostrar el resultado en el área correspondiente
        let resultadoElemento = document.getElementById('resultado');
        resultadoElemento.innerHTML = `<li>¡El amigo secreto elegido es: ${amigoElegido}!</li>`;
    } else {
        alert('No hay amigos en la lista para sortear. Por favor, añade nombres primero.');
    }
}
