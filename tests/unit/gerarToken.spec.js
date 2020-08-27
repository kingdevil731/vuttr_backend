const gerarToken = require('../../src/utils/gerarToken'); // importar a função gerarToken/utilidade

describe("Gerar Token", () => {
    it("Should generate a random Token", () => {
        const token = gerarToken();

        expect(token).toHaveLength(24);
    }, 1000)
})