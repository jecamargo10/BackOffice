import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    monthlyPayment: undefined,
    monthlyPaymentMax: undefined,
    amount: undefined,
    monthlyPaymentQuantity: 60,
    userId: undefined,
    creditType: undefined
  },
  mutations: {
    setMonthlyPayment(state, value) {
        state.monthlyPayment = value
    },
    setAmount(state, value) {
        state.amount = value
    },
    setMonthlyPaymentQuantity(state, value) {
        state.monthlyPaymentQuantity = value
    },
    setmonthlyPaymentMax(state, value) {
        state.monthlyPaymentMax = value
    },
    setUserId(state, value) {
        state.userId = value
    },
    setCreditType(state, value) {
        state.creditType = value
    },
  },
  getters: {
    amount: state => state.amount,
    monthlyPayment: state => state.monthlyPayment,
    monthlyPaymentQuantity: state => state.monthlyPaymentQuantity,
    monthlyPaymentMax: state => state.monthlyPaymentMax,
    userId: state => state.userId,
    creditType: state => state.creditType,
  }
})