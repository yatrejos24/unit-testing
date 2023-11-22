// Función para multiplicar dos números
function multi(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "datos invalidos";
  }
  return num1 * num2;
}
module.exports = multi;

// Prueba unitaria
function testMultiplicacion() {
  // Prueba 1: Números válidos
  const result1 = multi(2, 3);
  console.log(result1); // Resultado esperado: 6

  // Prueba 2: Uno de los números es inválido
  const result2 = multi(5, "2");
  console.log(result2); // Resultado esperado: "datos invalidos"

  // Prueba 3: Ambos números son inválidos
  const result3 = multi("4", "5");
  console.log(result3); // Resultado esperado: "datos invalidos"
}
testMultiplicacion();