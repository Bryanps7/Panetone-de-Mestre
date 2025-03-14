import Panetone from '../model/Panetone.js'; // ajuste o caminho conforme necessário

describe('Função arredondar', () => {
    test('deve arredondar valores corretamente', () => {
        function arredondar(valor) {
            // Arredonda o valor para o número inteiro mais próximo
            let arredondado = Math.round(valor);
        
            // Se o valor arredondado for 0, retorna 1
            if (arredondado === 0) {
                return 1;
            }
        
            return arredondado;
        }        
        expect(arredondar(0.4)).toBe(1);
        expect(arredondar(0.5)).toBe(1);
        expect(arredondar(1.2)).toBe(1);
        expect(arredondar(1.5)).toBe(2);
        expect(arredondar(1.7)).toBe(2);
        expect(arredondar(0.7)).toBe(1);
    });
});

describe('Classe Panetone', () => {
    let panetone;

    beforeEach(() => {
        panetone = new Panetone(10, 20, 2, 440); // valores de exemplo
    });

    test('deve calcular medidas corretamente', () => {
        panetone.calcularMedida();
        expect(parseFloat(panetone.farinha)).toBeCloseTo(250.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.fermento)).toBeCloseTo(10.00); // Ajustado para o valor correto
        expect(panetone.leite).toBe(60); // Ajustado para o valor correto
        expect(panetone.ovos).toBe(2); // Ajustado para o valor correto
        expect(parseFloat(panetone.manteiga)).toBeCloseTo(50.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.acucar)).toBeCloseTo(70.00); // Ajustado para o valor correto
        expect(panetone.baunilha).toBe(5); // Ajustado para o valor correto
        expect(parseFloat(panetone.frutas)).toBeCloseTo(100.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.uvas)).toBeCloseTo(50.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.raspas)).toBeCloseTo(5.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.sal)).toBeCloseTo(2.00); // Ajustado para o valor correto
    });

    test('deve calcular medidas totais corretamente', () => {
        panetone.calcularMedidaQuantidade();
        expect(parseFloat(panetone.farinhaTotal)).toBeCloseTo(500.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.fermentoTotal)).toBeCloseTo(20); // Ajustado para o valor correto
        expect(panetone.leiteTotal).toBe(120); // Ajustado para o valor correto
        expect(panetone.ovosTotal).toBe(4); // Ajustado para o valor correto
        expect(parseFloat(panetone.manteigaTotal)).toBeCloseTo(100.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.acucarTotal)).toBeCloseTo(140.00); // Ajustado para o valor correto
        expect(panetone.baunilhaTotal).toBe(10); // Ajustado para o valor correto
        expect(parseFloat(panetone.frutasTotal)).toBeCloseTo(200.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.uvasTotal)).toBeCloseTo(100.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.raspasTotal)).toBeCloseTo(10.00); // Ajustado para o valor correto
        expect(parseFloat(panetone.salTotal)).toBeCloseTo(4.00); // Ajustado para o valor correto
    });

    test('deve calcular preço corretamente', () => {
        panetone.calcularMedidaQuantidade();
        const precoTotal = panetone.calcularPrecoTotal();
        expect(precoTotal).toBeCloseTo(25.87, 2); // ajuste o valor esperado conforme necessário
    });

    test('deve calcular volume corretamente', () => {
        const volume = panetone.calcularVolume();
        expect(volume).toBeCloseTo(6283.19, 2); // ajuste o valor esperado conforme necessário
    });
    test('deve retornar false se a densidade for muito baixa', () => {
        panetone.tamanho = 10000; // valor que deve resultar em densidade muito baixa
        const volume = panetone.calcularVolume();
        expect(volume).toBe(false); // deve retornar false
    });

    test('deve calcular o volume corretamente para valores válidos', () => {
        panetone.tamanho = 500; // valor que deve resultar em densidade válida
        const volume = panetone.calcularVolume();
        expect(volume).toBeCloseTo(6283.19, 2); // ajuste o valor esperado conforme necessário
    });
});