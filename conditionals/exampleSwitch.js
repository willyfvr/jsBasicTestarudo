const activo = 1;
const bloqueado = 2;
const eliminado = 3;

let estado = activo;

switch (estado) {
  case activo:
    console.log('El estado está activo');
    break;
  case bloqueado:
    console.log('El estado está bloqueado');
    break;
  case eliminado:
    console.log('El estado está eliminado');
    break;
  default:
    console.log('El estado no está identificado');
    break;
}