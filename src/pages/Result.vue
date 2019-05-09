<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row mt-4">
          <div class="col">
            <img src="../assets/happy.png" alt>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h2>Buenas noticias Santiago, tienes un crédito aprobado por</h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h1 class="text-center">
              <strong>US ${{this.$store.state.amount}}</strong>
            </h1>
          </div>
        </div>
        <div class="row mt-0 pt-0">
          <div class="col">
            <h5 class="text-center">
              {{$store.state.monthlyPaymentQuantity}} cuaotas
              <strong>US ${{this.$store.state.monthlyPayment}} mensual</strong>
            </h5>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <a href>
              <h5 class="text-center text-primary">
                <u>
                  <router-link to="/setting">Simular crédito</router-link>
                </u>
              </h5>
            </a>
          </div>
        </div>
        <form @submit.prevent="nextStage">
          <div class="form-row mt-4">
            <div class="col">
              <div class="input-group mb-1">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="addon-emailInput">@</span>
                </div>
                <input
                  v-model="emailInput"
                  type="email"
                  required
                  class="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="addon-emailInput"
                >
              </div>
            </div>
          </div>
          <div class="form-row mx-auto pb-4 border-bottom">
            <div class="col">
              <small class="mt-0">Escribe tu correo para enviarte la información.</small>
            </div>
          </div>
          <div class="row mt-4">
            <div class="col">
              <h5
                class="text-center"
              >Este crédito aplica en el 75% o menos para el costo de tu carro.</h5>
            </div>
          </div>
          <div class="row mt-3 mb-5">
            <div class="col">
              <button type="submit" class="btn btn-outline-primary btn-lg">Continuar</button>
            </div>
          </div>
        </form>
      </div>
      <div class="col-1"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultPage", //nombre con el cual se usa el componente
  props: [], //propiedades requeridas(o no) para el uso del componente
  data() {
    //data reactiva del componente
    return {
      emailInput: 'auto@facil.com'
    };
  },
  created() {
    if (
      this.$store.state.monthlyPayment === undefined ||
      this.$store.state.monthlyPayment === null
    ) {
      return this.$router.push({
        path: "/registry"
      });
    }
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    nextStage(){
      this.$router.push({
        path: "/options"
      });
    }
  }
};
</script>

<style scoped>
</style>
