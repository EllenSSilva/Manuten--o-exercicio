const Calculadora = require("./calculadora");

describe("Calculadora", () => {

    it('Atribuui um novo valor à calculadora', () => {
        const calculadora = new Calculadora();
        expect(() => calculadora.resultado = "Texto").toThrow(TypeError);
        expect(() => calculadora.resultado = "Texto")
        .toThrow("O argumento deve ser um número válido");
        expect(calculadora.resultado).toBe(0);
        expect(() => calculadora.resultado ="5").not.toThrow(TypeError);
        expect(calculadora.resultado).toBe(5);
        })
    });