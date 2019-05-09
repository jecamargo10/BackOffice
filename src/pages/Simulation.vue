<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col p-0">
        <Subheader :firstMessage="'Simular mi credito'" :currentStage="null" :secondMessage="null"></Subheader>
      </div>
    </div>

    <div class="row">
      <div class="col pb-3 pt-3" style="background-color:#eee">
        <div class="row">
          <div class="col">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-credit">Credito:</span>
              </div>
              <input
                v-model="amount.current"
                type="number"
                :min="amount.min"
                :max="amount.max"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-credit"
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" v-text="'$ '+amount.min"></span>
              </div>
              <input
                type="range"
                v-model="amount.current"
                class="custom-range"
                :min="amount.min"
                :max="amount.max"
                step="100"
              >
              <div class="input-group-append">
                <span class="input-group-text" v-text="'$ '+amount.max"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col pb-3 pt-3" style="background-color:#eee">
        <div class="row">
          <div class="col">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-credit"># Cuotas:</span>
              </div>
              <input
                v-model="monthlyPaymentQuantity.current"
                type="number"
                :min="monthlyPaymentQuantity.min"
                :max="monthlyPaymentQuantity.max"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-credit"
              >
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" v-text="monthlyPaymentQuantity.min"></span>
              </div>
              <input
                type="range"
                v-model="monthlyPaymentQuantity.current"
                class="custom-range"
                :min="monthlyPaymentQuantity.min"
                :max="monthlyPaymentQuantity.max"
                step="12"
              >
              <div class="input-group-append">
                <span class="input-group-text" v-text="monthlyPaymentQuantity.max"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="row pt-5">
          <div class="col">
            <div class="custom-control custom-switch">
              <input value="true" type="checkbox" class="custom-control-input" id="customSwitch1">
              <label class="custom-control-label" for="customSwitch1">Cambiar a Alemana</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="row">
      <div class="col pb-3 pt-3" style="background-color:#eee">
        <div class="row">
          <div class="col">
            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-credit">Cuota mensual:</span>
              </div>
              <input
                v-model="monthlyPayment.current"
                type="number"
                readonly
                :min="monthlyPayment.min"
                :max="monthlyPayment.max"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-credit"
              >
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row mt-3">
          <div class="col">
            <button @click="saveConfig" class="btn btn-outline-primary btn-lg">Aplicar</button>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h5 @click="$router.go(-1)" class="text-center text-primary">
                <u>Cancelar</u>
            </h5>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </section>
</template>


<script>
import Subheader from "../components/Subheader.vue";
import utilities from "../utilities.js"

export default {
  name: "SettingPage", //nombre con el cual se usa el componente
  props: {}, //propiedades requeridas(o no) para el uso del componente
  components: {
    Subheader
  },
  data() {
    //data reactiva del componente
    return {
      amount: {
        current: 1,
        max: 1,
        min: 0
      },
      monthlyPayment: {
        current: 1,
        max: 280,
        min: 280
      },
      monthlyPaymentQuantity: {
        current: 60,
        max: 60,
        min: 12
      },
      tasa: 0.1665,
      creditType: false
    };
  },
  created() {
    if (this.$store.state.monthlyPayment === undefined || this.$store.state.monthlyPayment === null) {
      return this.$router.push({
        path: '/registry'
      })
    }
    this.monthlyPayment.current = this.$store.state.monthlyPayment
    this.amount.current = this.$store.state.amount
    this.monthlyPaymentQuantity.current = this.$store.state.monthlyPaymentQuantity
    this.monthlyPayment.max = this.$store.state.monthlyPaymentMax
    this.amount.max = this.calculateAmount(this.monthlyPayment.max,this.monthlyPaymentQuantity.max);
    this.amount.min = this.calculateAmount(this.monthlyPayment.min,this.monthlyPaymentQuantity.min);
    this.creditType = this.$store.state.creditType
    
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    calculateAmount(c,p) {
      return utilities.calculateAmount(c,p, this.tasa)
    },
    calculatePayment(am,p) {
      return utilities.calculatePayment(am,p, this.tasa)
    },
    saveConfig(){
      this.$store.commit('setAmount', this.amount.current)
      this.$store.commit('setMonthlyPayment', this.monthlyPayment.current)
      this.$store.commit('setMonthlyPaymentQuantity', this.monthlyPaymentQuantity.current)
      this.$store.commit('setMonthlyPaymentQuantity', this.monthlyPaymentQuantity.current)
      this.$store.commit('setCreditType', this.creditType)
      this.$router.go(-1)
    }
  },
  watch: {
    'amount.current': function(nuevo,previo) {
      let nuevaCuota = this.calculatePayment(nuevo, this.monthlyPaymentQuantity.current)
      if(nuevaCuota>this.monthlyPayment.max){
        //this.amount.current = previo
      }else if(nuevaCuota<this.monthlyPayment.min){
        //this.amount.current = previo
      }else{
        this.monthlyPayment.current = nuevaCuota
      }
    },
    'monthlyPaymentQuantity.current': function(nuevo,previo) {
      let step = (this.monthlyPayment.max-this.monthlyPayment.min)/5
      if(nuevo>previo){
        let lim = this.monthlyPayment.min + (step*(nuevo-12)/12)
        this.amount.current = this.calculateAmount(lim,nuevo)
      }else{
        let lim = this.monthlyPayment.min + (step*(previo-12)/12)
        this.amount.current = this.calculateAmount(lim,nuevo)
      }
    }
  }
};
</script>

<style scoped>
</style>