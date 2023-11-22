// Test unitario
const rest = require("./resta");

test("20 - 10 debería ser 10", () => {
  // Sujeto de prueba
  const result = rest(20, 10);
  // Test
  expect(result).toBe(10);
});

test("-10 - 20 debería ser -30", () => {
  // Sujeto de prueba
  const result = rest(-10, 20);
  // Test
  expect(result).toBe(-30);
});

test("si los datos no son enteros me debe retornar un error", () => {
  const err = "datos invalidos";
  const result = rest("10", "20");
  expect(result).toBe(err);
});