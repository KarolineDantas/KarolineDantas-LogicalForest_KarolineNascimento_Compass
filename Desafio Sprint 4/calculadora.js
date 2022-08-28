export default class calculadora {

    static soma(a,b) {
        return a + b
    }

    static sub(a,b) {
      return (a) - (b)
     }
    
    static mult(a,b) {
        return a * b
    }

    static div(a,b) {
        return a / b
    }

    static porcentagem (a,b) {
        var x = ((a/100)*b) + "%"
        var percent = x
        return percent
    }

    static decToBin(a) {
        let bin = a.toString(2)
        return bin
    }

    static decToOct(a) {
        let oct = a.toString(8)
        return oct
    }
    
    static decToHex(a) {
        let hex = a.toString(16)
        return hex
    }

    static binToDec(a) {
        let dec = parseInt(a,2)
        return dec
    }

    static binToOct(a) {
        let dec = parseInt(a,2)
        return dec
    }

    static binToHex(a) {
        let dec = parseInt(a,2)
        return dec
    }


}



