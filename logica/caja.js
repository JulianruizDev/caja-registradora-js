function calcularSubtotal(precios) {
  let total = 0;

  for (let precio of precios) {
    total += precio;
  }

  let conIVA = total * 1.19;

if( conIVA > 10000 ) {
let descuento = conIVA * 0.05;
conIVA = conIVA - descuento;
}  
return conIVA;
}

// Prueba simple
let compra = [3000, 4500, 2000];
console.log(calcularSubtotal(compra));