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
                :value="amount.current"
                type="number"
                readonly
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
                readonly
                v-model="amount.current"
                class="custom-range"
                :min="amount.min"
                :max="amount.max"
                step="1"
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
        <div class="row">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch1">
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
                :min="monthlyPayment.min"
                :max="monthlyPayment.max"
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
                <span class="input-group-text" v-text="'$ '+monthlyPayment.min"></span>
              </div>
              <input
                type="range"
                v-model="monthlyPayment.current"
                class="custom-range"
                :min="monthlyPayment.min"
                :max="monthlyPayment.max"
                step="0.05"
              >
              <div class="input-group-append">
                <span class="input-group-text" v-text="'$ '+monthlyPayment.max"></span>
              </div>
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
            <button type="submit" class="btn btn-outline-primary btn-lg">Aplicar</button>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h5 class="text-center text-primary">
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
        current: undefined,
        max: undefined,
        min: undefined
      },
      monthlyPayment: {
        current: 500,
        max: 500,
        min: 280
      },
      monthlyPaymentQuantity: {
        current: 60,
        max: 60,
        min: 12
      },
      tasa: 0.1665,
    };
  },
  created() {
    this.amount.min = this.calculateAmount(this.monthlyPayment.min,this.monthlyPaymentQuantity.min);
    this.amount.max = this.calculateAmount(this.monthlyPayment.max,this.monthlyPaymentQuantity.max);
    this.amount.current = this.amount.max;
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    calculateAmount(c,p) {
      let a = this.tasa/12
      let b = Math.pow((1 + (a)), p)
      return Math.ceil(c * ((b - 1) / (a * b)))
    },
    calculateValues(c,p) {
      let a = this.tasa/12
      let b = Math.pow((1 + (a)), p)
      return Math.ceil(c * ((b - 1) / (a * b)))
    },
    changeAmount() {
      this.amount.current = this.calculateAmount(this.monthlyPayment.current,this.monthlyPaymentQuantity.current)
    }
  },
  watch: {
    'monthlyPayment.current': function() {
      this.changeAmount();
    },
    'monthlyPaymentQuantity.current': function() {
      this.changeAmount();
    }
  }
};
</script>

<style scoped>
</style>
