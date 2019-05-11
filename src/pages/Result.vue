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
            <h6 class="textColor">*Este crédito aplica en el 75% o menos para el costo de tu carro.</h6>
          </div>
          <div class="col-1"></div>
        </div>

        <div class="row mt-3 mb-4">
          <div class="col-3"></div>
          <div class="col">
            <button
              type="submit"
              @click="pushSetting"
              class="btn btn-outline btn-block btn-sm botBlueBord rounded-pill"
            >Simular crédito</button>
          </div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col backLight p-0">
        <div class="form-row mx-auto pb-4">
          <div class="col">
            <h6
              class="textColor mr-5 ml-5 pt-4"
            >Déjanos tu email para confirmar esta aprobación y poder continuar</h6>
          </div>
        </div>
      </div>
    </div>
    <div class="row mx-auto mt-4">
      <div class="col">
        <form @submit.prevent="nextStage">
          <div class="form-row border-bottom borderR textColor mr-4 ml-4">
            <div class="col-4 pl-5">
              <img src="../assets/send.png" width="30em" height="auto">
            </div>
            <div class="col-8">
              <input
                v-model="emailInput"
                required
                type="email"
                class="form-control border-0 textColor"
                aria-describedby="addon-emailInput"
                placeholder="Email"
              >
            </div>
          </div>
          <div class="row mt-5 mb-5">
            <div class="col-2"></div>
            <div class="col">
              <button type="submit" class="btn btn-outline btn-block botBlue rounded-pill">Continuar</button>
            </div>
            <div class="col-2"></div>
          </div>
        </form>
      </div>
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

.botBlueBord {
  background-color: white;
  color: #e91c72;
  border-color: #e91c72;
}
.botBlueBord:hover {
  background-color: #e91c72;
  color: white;
  border-color: white;
}
.botBlueBord:active {
  background-color: #e91c72;
  color: white;
  border-color: white;
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

.backLight {
  background-color: #f2fbff;
}

::-webkit-input-placeholder {
  /* Edge */
  color: #004b8c;
}

:-ms-input-placeholder {
  /* Internet Explorer */
  color: #004b8c;
}

::placeholder {
  color: #004b8c;
}

.borderR {
  border-radius: 0;
  border-color: #004b8c !important;
  border-bottom-width: 1px !important;
}
</style>
