function calcularTotal(precios) {
    let total = 0;
    for (let precio of precios) {
        total += precio;
    }
    return total;
}
function aplicarIVA(total) {
    return total * 1.19;
}
function aplicarDescuento(total) {
    if (total > 10000) {
        return total * 0.9; // Aplica un descuento del 10%
    }
    return total;
}
function generarTicket(precios) {
   const subtotal = calcularTotal(precios);
   const conIVA = aplicarIVA(subtotal);
    const final = aplicarDescuento(conIVA);

    console.log("----- TICKET DE COMPRA -----");
    console.log(`Subtotal: $${subtotal}`);
    console.log(`Total con IVA: $${conIVA}`);
    console.log(`Total a pagar: $${final}`);
}

// Prueba simple
let compra = [3000, 4500, 2000];    
generarTicket(compra);
// Debería imprimir:
// ----- TICKET DE COMPRA -----
// Subtotal: $9500
// Total con IVA: $11305
// Total a pagar: $10174.5