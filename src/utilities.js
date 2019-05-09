export default {
    calculatePayment(am,p) {
        let a = this.tasa/12
        let b = Math.pow((1 + (a)), p)
        return Math.ceil(a * ((am * b) / (b - 1))*100)/100
    }
}