//Crear un array para almacenar los nombres
let amigos = [];

//Implementa una función para agregar amigos
function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Debes ingresar un nombre");
    return;
  }
  //validacion de nombre que no sea duplicado
  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre ${nombreAmigo} ya está en la lista`);
    return;
  }
  //agregando nombre al array
  amigos.push(nombreAmigo);
  //limpiando campo de entrada
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
    const li = document.createElement("li");
    li.textContent = amigos[i];

    listaAmigos.appendChild(li);
  }
}
