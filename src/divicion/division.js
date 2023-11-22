// Función para dividir dos números
function divide(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "datos inválidos";
  }
  if (num2 === 0) {
    return "división por cero";
  }
  return num1 / num2;
}
module.exports = divide;

// Prueba unitaria
function testDivision() {
  // Prueba 1: Números válidos
  const result1 = divide(10, 2);
  console.log(result1); // Resultado esperado: 5

  // Prueba 2: Uno de los números es inválido
  const result2 = divide("10", 2);
  console.log(result2); // Resultado esperado: "datos inválidos"

  // Prueba 3: Ambos números son inválidos
  const result3 = divide("10", "2");
  console.log(result3); // Resultado esperado: "datos inválidos"

  // Prueba 4: División por cero
  const result4 = divide(10, 0);
  console.log(result4); // Resultado esperado: "división por cero"
}
testDivision();