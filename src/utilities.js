export default {
    calculatePayment(am,p,tasa) {
        let a = tasa/12
        let b = Math.pow((1 + (a)), p)
        return Math.ceil(a * ((am * b) / (b - 1))*100)/100
    },
    calculateAmount(c,p,tasa) {
        let a = tasa/12
        let b = Math.pow((1 + (a)), p)
        return Math.ceil((c * ((b - 1) / (a * b)))/100)*100
      },
}