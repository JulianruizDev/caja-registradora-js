function calcularSubtotal(precios) {
    let total = 0;
    for (let precio of precios) {
        total += precio;
    }
    return total;
}

// Prueba simple
let compra = [3000, 4500, 2000];
console.log(calcularSubtotal(compra)); // Debería imprimir 9500