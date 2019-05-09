<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row mt-4">
          <div class="col">
            <img src="../assets/happy.png" width="100em" height="100em">
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h2>Buenas noticias Santiago, tienes un crédito aprobado por</h2>
          </div>
        </div>
        <div class="row mt-3 d-flex align-items-center">
          <div class="col">
            <h1 class="text-center textBlue">
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
            <h5 class="text-center textBlue">
              <u>
                <div @click="pushSetting">Simular crédito</div>
              </u>
            </h5>
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
              <button type="submit" class="btn btn-outline botBlue btn-lg">Continuar</button>
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
      emailInput: "auto@facil.com"
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
    nextStage() {
      this.$router.push({
        path: "/options"
      });
    },
    pushSetting() {
      console.log("entra");

      this.$router.push({
        path: "/setting"
      });
    }
  }
};
</script>

<style scoped>
.botBlue {
  background-color: white;
  color: #174b86;
  border-color: #174b86;
}
.botBlue:hover {
  color: #c71066;
  border-color: #c71066;
}
.botBlue:active {
  color: #c71066;
  border-color: #c71066;
}
.backBlue {
  background-color: #174b86;
}
.textBlue {
  color: #174b86;
}

.borderBlue {
  border-color: #174b86 !important;
}

.botPink {
  background-color: white;
  color: #c71066;
  border-color: #c71066;
}
.botPink:hover {
  color: #174b86;
  border-color: #174b86;
}
.botPink:active {
  color: #174b86;
  border-color: #174b86;
}
.backPink {
  background-color: #c71066;
}
.textPink {
  color: #c71066;
}
.borderPink {
  border-color: #c71066 !important;
}
</style>
