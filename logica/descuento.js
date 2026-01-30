function aplicarDescuento(total) {
    if (total > 10000) {
        return total * 0.9; // Aplica un descuento del 10%
    }
    return total;
}

// Prueba simple
console.log(aplicarDescuento(12000)); // Debería imprimir 10800
console.log(aplicarDescuento(8000));  // Debería imprimir 8000  
