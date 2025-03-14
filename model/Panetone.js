function arredondar(valor) {
    // Arredonda o valor para o número inteiro mais próximo
    let arredondado = Math.round(valor);

    // Se o valor arredondado for 0, retorna 1
    if (arredondado === 0) {
        return 1;
    }

    return arredondado;
}

export default class Panetone {
    constructor(raio, altura, quantidade, tamanho) {
        this.raio = raio;
        this.altura = altura;
        this.quantidade = quantidade;
        this.tamanho = tamanho;
    }

    calcularMedida() {
        this.farinha = ((250 / 440) * this.tamanho).toFixed(2);
        this.fermento = ((10 / 440) * this.tamanho).toFixed(2);
        this.leite = ((60 / 440) * this.tamanho).toFixed(2);
        this.ovos = arredondar((2 / 440) * this.tamanho);
        this.manteiga = ((50 / 440) * this.tamanho).toFixed(2);
        this.acucar = ((70 / 440) * this.tamanho).toFixed(2);
        this.baunilha = ((5 / 440) * this.tamanho).toFixed(2);
        this.frutas = ((100 / 440) * this.tamanho).toFixed(2);
        this.uvas = ((50 / 440) * this.tamanho).toFixed(2);
        this.raspas = ((5 / 440) * this.tamanho).toFixed(2);
        this.sal = ((2 / 440) * this.tamanho).toFixed(2);

        return this; 
    }
    calcularMedidaQuantidade() {
        this.calcularMedida()
        this.farinhaTotal = this.farinha * this.quantidade;
        this.fermentoTotal = this.fermento * this.quantidade;
        this.leiteTotal = this.leite * this.quantidade;
        this.ovosTotal = this.ovos * this.quantidade;
        this.manteigaTotal = this.manteiga * this.quantidade;
        this.acucarTotal = this.acucar * this.quantidade;
        this.baunilhaTotal = this.baunilha * this.quantidade;
        this.frutasTotal = this.frutas * this.quantidade;
        this.uvasTotal = this.uvas * this.quantidade;
        this.raspasTotal = this.raspas * this.quantidade;
        this.salTotal = this.sal * this.quantidade;

        return this;
    }
    calcularPreco() {
        this.precoFarinha = this.farinha * (4.15 / 1000)
        this.precoFermento = this.fermento * (7.93 / 500)
        this.precoLeite = this.leite * (5.1 / 1000)
        this.precoOvos = this.ovos * (35.99 / 30)
        this.manteigaPreco = this.manteiga * (12.75 / 200)
        this.acucarPreco = this.acucar * (14.9 / 5000)
        this.baunilhaPreco = this.baunilha * (10.49 / 30)
        this.frutasPreco = this.frutas * (15.8 / 1000)
        this.uvasPreco = this.uvas * (31.49 / 1000)
        this.raspasPreco = this.raspas * (14.5 / 100)
        this.salPreco = this.sal * (4.27 / 1000)

        return (this.precoFarinha + this.precoFermento + this.precoLeite + this.precoOvos + this.manteigaPreco + this.acucarPreco + this.baunilhaPreco + this.frutasPreco + this.uvasPreco + this.raspasPreco + this.salPreco)
    }
    calcularPrecoTotal() {
        return (this.calcularPreco()) * this.quantidade
    }
    calcularVolume() {
        this.volume = Math.PI * Math.pow(this.raio, 2) * this.altura
        if (0.6 >= (this.tamanho / volume) && (this.tamanho / this.volume) <= 0.8) {
            return this.volume
        } else {
            return false
        }
        // Caso retorne "false" significa que a densidade é muito baixa, logo, teria que alterar ou a medida do panetona ou o raio e a altura
    }
    calcularVolumeTotal() {
        if((this.calcularVolume()) != false){
            return (this.calcularVolume()) * this.quantidade
        }
    }
}