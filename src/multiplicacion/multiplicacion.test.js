// Test unitario
const multi = require("./multiplicacion");
test("10 * 20 debería ser 200", () => {
  // Sujeto de prueba
  const result = multi(10, 20);
  // Test
  expect(result).toBe(200);
});

test("Si los datos no son enteros debe retornar un error", () => {
  const err = "datos invalidos";
  const result = multi("10", "20");
  expect(result).toBe(err);
});