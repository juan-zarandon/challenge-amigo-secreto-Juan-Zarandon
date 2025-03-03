// Crear un array para almacenar los nombres
let amigos = [];

// Implementa una función para agregar amigos
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Debes ingresar un nombre");
    return;
  }
  // validacion de nombre que no sea duplicado
  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre ${nombreAmigo} ya está en la lista`);
    return;
  }
  // agregando nombre al array
  amigos.push(nombreAmigo);
  // limpiando campo de entrada
  inputAmigo.value = "";

  // actualizando la lista de amigos
  actualizarlista();
}

// Funcion para actualizar la lista de amigos en la interfaz
function actualizarlista() {
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar el contenido actual de la lista
  listaAmigos.innerHTML = ""; // Borra cualquier contenido previo dentro del contenedor de la lista

  // Recorrer el array con un ciclo for
  for (let i = 0; i < amigos.length; i++) {
    // Corregido: let i
    const li = document.createElement("li");
    li.textContent = amigos[i];

    listaAmigos.appendChild(li);
  }
}

// seguimos el desafio en la tercera parte finalizando con la funcion para sortear el amigo secreto

// funcion para sortear amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Debes agregar al menos un amigo para sortear el amigo secreto"); // validacion de que haya al menos un amigo
    return;
  }

  // generacion de indice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length); // generamos un numero aleatorio entre 0 y la cantidad de amigos en el array
  const amigoSecreto = amigos[indiceAleatorio]; // obtiene el amigo secreto a partir del indice aleatorio generado anteriormente

  // Mostrar el resultado en el HTML
  const resultado = document.getElementById("resultado");
  resultado.textContent = `Amigo secreto: ${amigoSecreto}`;
}
