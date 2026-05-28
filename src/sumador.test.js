import sumar from "./sumador.js";

describe("Calculadora de Cadenas", () => {
  it("deberia retornar 0 para una cadena vacia", () => {
    expect(sumar("")).toEqual(0);
  });
  it("deberia retornar el mismo numero si la cadena tiene un solo numero", () => {
    expect(sumar("2")).toEqual(2);
  });
  it("deberia retornar la suma de dos numeros separados por coma", () => {
    expect(sumar("1,2")).toEqual(3);
  });
  it("deberia retornar la suma de multiples numeros separados por coma", () => {
    expect(sumar("1,2,3")).toEqual(6);
  });
});