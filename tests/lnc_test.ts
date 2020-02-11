import { LNC } from "../src/lnc";

describe("Esc1 lncToDecimal", () => {
    it("3 digitos", ()=>{
        let valorEntrada = 719;
        let resEsperado = 53;

        let lnc = new LNC();
        let resObtenido = lnc.lncToDecimal(valorEntrada);
        expect(resEsperado).toEqual(resObtenido);
    });
    it("cero", ()=>{
        let valorEntrada = 0;
        let resEsperado = 0;

        let lnc = new LNC();
        let resObtenido = lnc.lncToDecimal(valorEntrada);
        expect(resEsperado).toEqual(resObtenido);
    });
    it("1 digito", ()=>{
        let valorEntrada = 7;
        let resEsperado = 7;

        let lnc = new LNC();
        let resObtenido = lnc.lncToDecimal(valorEntrada);
        expect(resEsperado).toEqual(resObtenido);
    });
    it("5 digitos", ()=>{
        let valorEntrada = 10345;
        let resEsperado = 151;

        let lnc = new LNC();
        let resObtenido = lnc.lncToDecimal(valorEntrada);
        expect(resEsperado).toEqual(resObtenido);
    });
});
