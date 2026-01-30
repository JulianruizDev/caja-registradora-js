//Estado de la aplicación
let precios = [];

// Puente entre la interfaz y la lógica
const inputPrecio = document.getElementById("precio");
const botonAgregar = document.getElementById("agregar");
const botonTicket = document.getElementById("ticket");
const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

//Agregar producto
botonAgregar.addEventListener("click", () => {
  const valor = Number(inputPrecio.value);

  if (valor <= 0) {
    return;
  }

  precios.push(valor);

  const item = document.createElement("li");
  item.innerText = `$ ${valor}`;
  lista.appendChild(item);

  inputPrecio.value = "";
});