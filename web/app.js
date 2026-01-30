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

// Generar ticket
botonTicket.addEventListener("click", () => {
  if (precios.length === 0) {
    resultado.innerText = "No hay productos en la compra.";
    return;
  }

  let total = 0;

  for (let precio of precios) {
    total += precio;
  }

  const totalConIVA = total * 1.19;
  resultado.innerText = `Total con IVA: $${totalConIVA.toFixed(2)}`;
});