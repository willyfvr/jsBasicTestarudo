/**
 * Diseñar un objeto denominado Factura
 * Este objeto deberña tener las siguientes propiedades:
 * - numero de factura
 * - nombre del cliente
 * - direccion del cliente
 * - fecha
 * - estado
 * 
 * Las propiedades son de tipo string.
 * Los estados son "Creado", "Borrador", "Pagado"
 * NOTA: Para este ejemplo no hace falta que se valide la fecha
 * 
 * La factura puede tener varios items
 * Cada iten tiene las siguientes características:
 * - Cantidad
 * - Artículo
 * - Precio unitario
 * 
 * Se necesita crear una función que reciba 2 parametros
 * 1 parametro es el objeto factura y el otro parametro es el estado
 * La funcion debe imprimir en pantalla la información de la factura
 * con el detalle de items. Mostrando por cada item el total (Total = Cantidad * Precio unitario)
 * y si la cantidad es mayor o igual a 5 entonces tiene un descuento del 10%
 * 
 * También se deberá mostrar el monto total de la factura.
 * 
 * Finalmente, Imprimir un mensaje según el estado de la factura:
 * 
 * Si el estado es CREADO, entonces imprimir "La factura está en estado 'creado'
 * Si el estado es BORRADOR, entonces imprimir "La factura está en proceso de regristro."
 * Si el estado es PAGADO entonces imprimir "Proceso completado, gracias por su pago.
 *  
 */

let factura = require("./factura.json")

const descuento = 10  // porcentaje de descuento

/**
 * 
 * @param {*} precioUnitario 
 * @param {*} porcentaje 
 * @returns 
 */
function obtenerDescuento(precioUnitario, porcentaje) {
  return (precioUnitario * porcentaje) / 100
}

/**
 * 
 * @param {*} objetoFactura 
 * @returns 
 */
function setCurrentDate(objetoFactura) {
  const today = new Date();
  return objetoFactura.fecha = today.toLocaleDateString() + " - " + today.toLocaleTimeString();
}

/**
 * 
 * @param {*} cantidad 
 * @param {*} precioUnitario 
 * @param {*} descuento 
 * @returns 
 */
function descuentoItem(cantidad, precioUnitario, descuento) {
  /*evaluar descuento
    let descuento

    if (i.cantidad > 5) {
      descuento = obtenerDescuento(i.precioUnitario, porcentaje);
    } else {
      descuento = 0;
    }

    // TODO: todo esto se puede refactorizar y usar una funcion "descuentoItem" 
    */


  return (cantidad >= 5) ? obtenerDescuento(precioUnitario, descuento) : 0;
}

/**
 * 
 * @param {*} objFactura 
 * @param {*} estado 
 */
function imprimirFactura(objFactura, estado) {

  objFactura.fecha = setCurrentDate(objFactura)

  console.log("Numero de Factura:", objFactura.numeroDeFactura)
  console.log("Nombre del Cliente:", objFactura.nombreDelCliente)
  console.log("Direccion del Cliente:", objFactura.direccionCliente)
  console.log("Fecha:", objFactura.fecha)
  console.log("Estado:", objFactura.estado)

  console.log("Detalle:")

  const itemsFactura = objFactura.detalle;

  for (let i = 0; i < itemsFactura.length; i++) {
    let descuentoAplicado = descuentoItem(itemsFactura[i].cantidad, itemsFactura[i].precioUnitario, descuento);
    itemsFactura[i].descuentoAplicado = descuentoAplicado;
  }

  const dataToShow = itemsFactura.map((item) => ({
    "Cantidad": item.cantidad,
    "Articulo": item.articulo,
    "Precio Unitario": item.precioUnitario,
    "Descuento Aplicado": item.descuentoAplicado
  }));

  console.table(dataToShow)
  // objFactura.detalle.forEach(item => {
  //   const totalItem = item.cantidad * item.precioUnitario
  //   const descuentoItem = item.cantidad >= 5 ? obtenerDescuento(totalItem, descuento) : 0
  //   console.log(`- ${item.cantidad} x ${item.articulo} ($${item.precioUnitario}) = $${totalItem - descuentoItem} (Descuento: $${descuentoItem})`)
  // })

  // const montoTotal = objFactura.detalle.reduce((total, item) => {
  //   const totalItem = item.cantidad * item.precioUnitario
  //   const descuentoItem = item.cantidad >= 5 ? obtenerDescuento(totalItem, descuento) : 0
  //   return total + totalItem - descuentoItem
  // }, 0)

  // console.log("Monto Total:", montoTotal)

  // switch (estado) {
  //   case "CREADO":
  //     console.log("La factura está en estado 'creado'")
  //     break
  //   case "BORRADOR":
  //     console.log("La factura está en proceso de registro.")
  //     break
  //   case "PAGADO":
  //     console.log("Proceso completado, gracias por su pago.")
  //     break
  // }
}

imprimirFactura(factura, "CREADO");
