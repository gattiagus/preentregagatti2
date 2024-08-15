const productos = {
    Campera: 200,
    Buzo: 300,
    Remera: 600,
    Pantalon: 400,
    Bermuda: 100
};

let total = 0;
let carrito = [];
let nombreCliente;
let fechaCompra;
let metodoDePago;

function agregarProducto(producto, cantidad) {
    if (productos[producto]) {
        total += productos[producto] * cantidad;
        carrito.push({ producto, cantidad });
    } else {
        alert("Producto no encontrado");
    }
}

function mostrarResumen() {
    alert("Resumen de la compra: " + carrito.map(item => `${item.producto} x ${item.cantidad}`).join(" + "));
}

function calcularRecargo(total) {
    return total * 0.10;
}

function calcularImpuesto(total) {
    return total * 0.16;
}

function calcularDescuento(total) {
    return total * 0.05;
}

function calcularTotalFinal(total, recargo, impuesto, descuento) {
    return total + recargo - descuento + impuesto;
}

nombreCliente = prompt("Indique su nombre");
fechaCompra = prompt("Ingrese fecha de su compra");

while (true) {
    const producto = prompt("Seleccione un producto: " + Object.keys(productos).join(", ") + " o C para cerrar");
    if (producto === "C")
        break;
    const cantidad = parseInt(prompt("Ingrese la cantidad de su producto"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("La es Cantidad inválida");
        continue;
    }
    agregarProducto(producto, cantidad);
}

mostrarResumen();

metodoDePago = prompt("Seleccione medio de pago:  1 Efectivo, 2 Tarjeta");
if (metodoDePago === "1") {
    const recargo = 0;
    const impuesto = calcularImpuesto(total);
    const descuento = calcularDescuento(total);
    const totalFinal = calcularTotalFinal(total, recargo, impuesto, descuento);
    alert("Compra finalizada: Nombre del cliente: " + nombreCliente + " Fecha de la compra: " + fechaCompra + " Total: $" + totalFinal);
} else if (metodoDePago === "2") {
    const recargo = calcularRecargo(total);
    const impuesto = calcularImpuesto(total);
    const descuento = calcularDescuento(total);
    const totalFinal = calcularTotalFinal(total, recargo, impuesto, descuento);
    alert("La Compra se realizo con exito: Nombre del cliente: " + nombreCliente + " Fecha de la compra: " + fechaCompra + " Total: $" + totalFinal);
} else {
    alert("Medio de pago no válido");
}