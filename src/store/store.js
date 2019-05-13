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
    creditType: undefined,
    credit: undefined,
    carSelected: undefined,
    entryValue: null,
  },
  mutations: {
    setCredit(state, value) {
      state.credit = value
    },
    setCarSelected(state, value) {
      state.carSelected = value
    },
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
    setEntryValue(state, value) {
        state.entryValue = value
    },
  },
  getters: {
    amount: state => state.amount,
    monthlyPayment: state => state.monthlyPayment,
    monthlyPaymentQuantity: state => state.monthlyPaymentQuantity,
    monthlyPaymentMax: state => state.monthlyPaymentMax,
    userId: state => state.userId,
    creditType: state => state.creditType,
    credit: state => state.credit,
    carSelected: state => state.carSelected,
    entryValue: state => state.entryValue,
  }
})