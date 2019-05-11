<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="row mt-4 textColor">
          <div class="col">
            <h5>!Buenas noticias Santiago¡</h5>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <div class="contenedor">
              <img src="../assets/card.png" class="sombra" width="100%">
              <h3 class="text-light texto-abajo-izq">
                <strong>US ${{this.$store.state.amount}}</strong>
              </h3>
            </div>
          </div>
        </div>
        <div class="row mt-4 mb-4 pt-0">
          <div class="col">
            <div class="contenedor">
              <img src="../assets/plazo.png" class="sombra cardB" alt width="100%">
              <h4 class="texto-abajo-izq textColor">{{$store.state.monthlyPaymentQuantity}}</h4>
            </div>
          </div>

          <div class="col">
            <div class="contenedor">
              <img src="../assets/cuota.png" class="sombra cardB" alt width="100%">
              <h4 class="texto-abajo-izq textColor">${{this.$store.state.monthlyPayment}}</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-1"></div>
          <div class="col">

          </div>
          <div class="col-1"></div>
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
        </form>
      </div>
    </div>
    <div class="row mt-3 mb-5">
      <div class="col-2"></div>
      <div class="col">
        <button type="submit" class="btn btn-outline btn-block botBlue rounded-pill">Continuar</button>
      </div>
      <div class="col-2"></div>
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
      this.$router.push({
        path: "/setting"
      });
    }
  }
};
</script>

<style scoped>
.contenedor {
  position: relative;
  display: inline-block;
  text-align: center;
}

.texto-arriba {
  position: absolute;
  top: 10px;
  right: 20px;
  left: 20px;
}
.texto-abajo-izq {
  position: absolute;
  text-align: center;
  bottom: 18px;
  right: 110px;
  left: 20px;
}

.botBlue {
  background-color: #e91c72;
  color: white;
}
.botBlue:hover {
  background-color: white;
  color: #e91c72;
  border-color: #e91c72;
}
.botBlue:active {
  background-color: white;
  color: #e91c72;
  border-color: #e91c72;
}
.backBlue {
  background-color: #e91c72;
}
.textBlue {
  color: #e91c72;
}

.borderBlue {
  border-color: #e91c72 !important;
}

.textColor {
  color: #004b8c;
}
.sombra {
  -webkit-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0.22);
  box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0.22);
}
.cardB {
  border-radius: 10px;
}
</style>
