import assert from 'assert'
import chai from 'chai'
import calculadora from '../scr/calculadora.js'

const expect = chai.expect

describe('Cálculo de adição', () => {
    it('Deve realizar 10 + 5 e resultar em 15', () => {
        let resultado = calculadora.soma(10, 5)
        expect(resultado).to.be.eq(15)
    })

    it('Deve realizar (-1) + (-1) e resultar em -2', () => {
        let resultado = calculadora.soma(-1, -1)
        expect(resultado).to.be.eq(-2)
    })

    it('Deve realizar a soma de dois números decimais', () => {
        let resultado = calculadora.soma(5.6, 9.2)
        expect(parseFloat(resultado.toFixed(2)))
    })
})

describe('Cálculo de subtração', () => {
    it('Deve realizar 10 - 3 e resultar em 7', () => {
        let resultado = calculadora.sub(10, 3)
        expect(resultado).to.be.eq(7)
    })

    it('Deve realizar (-5) - (-6) e resultar em 1', () => {
        let resultado = calculadora.sub(-5, -6)
        expect(resultado).to.be.eq(1)
    })

    it('Deve realizar (-10) - 5 e resultar em -15',() => {
        let resultado = calculadora.sub(-10, 5)
        expect(resultado).to.be.eq(-15)
    })

    it('Deve subtrair dois números decimais', () => {
        let resultado = calculadora.sub(5.6, 9.2)
        expect(parseFloat(resultado.toFixed(2)))
    })
})

describe('Cálculo de multiplicação', () => {
    it('Deve realizar 10 * 5 e resultar em 50', () => {
        let resultado = calculadora.mult(10, 5)
        expect(resultado).to.be.eq(50)
    })

    it('Deve realizar (-5) * (-6) e resultar em 30', () => {
        let resultado = calculadora.mult(-5, -6)
        expect(resultado).to.be.eq(30)
    })

    it('Deve realizar (-10) * 5 e resultar em -50',() => {
        let resultado = calculadora.mult(-10,5)
        expect(resultado).to.be.eq(-50)
    })

    it('Deve multiplicar dois números decimais', () => {
        let resultado = calculadora.mult(5.6, 9.2)
        expect(parseFloat(resultado.toFixed(2)))
    })
})

describe('Cálculo de divisão', () => {
    it('Deve realizar 10/5 e resultar em 2', () => {
        let resultado = calculadora.div(10, 5)
        expect(resultado).to.be.eq(2)
    })

    it('Deve realizar (-10)/(-5) e resultar em 30', () => {
        let resultado = calculadora.div(-10, -5)
        expect(resultado).to.be.eq(2)
    })

    it('Deve realizar (-10)/5 e resultar em -50',() => {
        let resultado = calculadora.div(-10, 5)
        expect(resultado).to.be.eq(-2)
    })

    it('Deve dividir dois números decimais', () => {
        let resultado = calculadora.div(5.6, 9.2)
        expect(parseFloat(resultado.toFixed(2)))
    })
})

describe('Cálculo de porcentagem', () => {
    it('Espera-se que 20 % 100 seja igual a 20%', () => {
        let resultado = calculadora.porcentagem(20,100)
        expect(resultado).to.be.eq('20%')
    })
})

describe('Cálculo de conversões - Decimal', () => {
    it('Deve converter o número decimal 100 para binário', () => {
        let resultado = calculadora.decToBin(100)
        expect(resultado).to.be.eql('1100100')
    })

    it('Deve converter o número decimal 50 para octal', () => {
        let resultado = calculadora.decToOct(50)
        expect(resultado).to.be.eql('62')
    })

    it('Deve converter o número decimal 10 para hexadecimal', () => {
        let resultado = calculadora.decToHex(10)
        expect(resultado).to.be.eql('a')
    })
})  
