// Test unitario
const divide = require("./division");

test("10 / 20 debería ser 0.5", () => {
  // Sujeto de prueba
  const result = divide(10, 20);
  // Test
  expect(result).toBe(0.5);
});

test("Si los datos no son números enteros, debería retornar un error", () => {
  const err = "datos inválidos";
  const result = divide("10", "20");
  expect(result).toBe(err);
});