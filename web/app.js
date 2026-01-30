// Estado de la aplicación
let precios = [];

// Puentes entre HTML y JS
const inputPrecio = document.getElementById("precio");
const botonAgregar = document.getElementById("agregar");
const botonTicket = document.getElementById("ticket");
const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

// Calcula el total con IVA
function calcularTotalConIVA(listaPrecios) {
  let total = 0;

  for (let precio of listaPrecios) {
    total += precio;
  }

  return total * 1.19;
}

// Limpia el estado de la caja
function limpiarCaja() {
  precios = [];
  lista.innerHTML = "";
  inputPrecio.value = "";
}

// Agregar producto
botonAgregar.addEventListener("click", () => {
  const valor = Number(inputPrecio.value);

  if (valor <= 0) {
    return;
  }

  precios.push(valor);

  const item = document.createElement("li");
  item.innerText = `Precio: $${valor}`;
  lista.appendChild(item);

  inputPrecio.value = "";
});

// Generar ticket
botonTicket.addEventListener("click", () => {
  if (precios.length === 0) {
    resultado.innerText = "No hay productos en la compra.";
    return;
  }

  const totalConIVA = calcularTotalConIVA(precios);
  resultado.innerText =
    `Total con IVA: $${totalConIVA.toFixed(2)}\nGracias por su compra.`;

  limpiarCaja();
});