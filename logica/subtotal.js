function calcularSubtotal(precios) {
    let total = 0;
    for (let precio of precios) {
        total += precio;
    }
    return total;
}

function calcularSubtotal(precios) {
    let total = calcularSubtotal(precios);
    let conIVA = total * 1.19;
    return conIVA;
}

// Prueba simple
let compra = [3000, 4500, 2000];
console.log(calcularSubtotal(compra)); // Debería imprimir 9500