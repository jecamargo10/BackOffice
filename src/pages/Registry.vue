<template>
  <section>
    <div class="container-fluid mt-4">
      <div class="row d-flex align-items-center">
        <div class="col-1 mr-1 ml-3">
          <img src="../assets/123.png" width="60em" height="auto">
        </div>
        <div class="col mr-3 ml-1">
          <h4 class="textBlue text-right">En
            <strong> AutoFácil </strong>podemos aprobar tu crédito con solo tres datos.
          </h4>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-1"></div>
        <div class="col p-0">
          <form @submit.prevent="routeResult">
            <div class="form-row">
              <h5 class="text-left">Digita tu cédula</h5>
              <input
                v-model="ccInput"
                required
                type="number"
                class="form-control"
                aria-describedby="emailHelp"
              >
            </div>
            <div class="form-row mt-3">
              <h5 class="text-left">Tu celular</h5>
              <input v-model="phoneInput" required type="number" class="form-control">
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <h5 class="text-left">Código dactilar</h5>
                <input v-model="huellaInput" required type="text" class="form-control">
              </div>
              <div class="col">
                <img src="../assets/actilar.png" alt="ejemploHuella">
              </div>
            </div>
            <div class="form-row form-check mt-3">
              <input
                v-model="checkInput"
                type="checkbox"
                required
                class="custom-control-input"
                id="customCheck1"
              >
              <label class="custom-control-label" for="customCheck1">Lsed leo faucibus sollicitudim?</label>
            </div>
            <div class="form-row mt-3">
              <a href class="mx-auto">
                <router-link to="/fail">
                  <h6 class="textBlue text-center">Ya estoy registrado</h6>
                </router-link>
              </a>
            </div>
            <div class="form-row">
              <div v-if="error !== null" class="col">
                <div class="alert alert-danger" role="alert">
                  <div @click="closeError" class="position-absolute cursor-pointer rigth-0 top-0">X</div>
                  <p v-text="error"></p>
                </div>
              </div>
            </div>
            <div class="form-row mt-4">
              <div class="col">
                <button type="submit" class="btn btn-outline btn-lg botBlue">Solicitar</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
import providerServices from '../providerServices/providerServices.js'
import utilities from "../utilities.js"

export default {
  name: "LobbyPage", //nombre con el cual se usa el componente
  props: [], //propiedades requeridas(o no) para el uso del componente
  data() {
    //data reactiva del componente
    return {
      ccInput: "9382712",
      huellaInput: "A1234B1234",
      phoneInput: "3001234567",
      checkInput: true,
      error: null
    };
  },
  created() {
    //lo que pasa cuando se crea el componente  aca se ponen la consulta a servicios
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    routeResult() {
      let _self = this;
      _self.closeError();
      providerServices.verifyUser(
        this.huellaInput,
        this.ccInput,
        this.phoneInput,
        function(err, res) {
          if (err) {
            _self.error = res;
            return;
          }
          if (parseInt(res.data.data) === -1) {
            _self.error = res.data.message;
            return;
          }
          _self.$router.push({
            name: "Result",
            params: { amount: res.data.data }
          });
        }
        _self.$store.commit('setUserId', res.data.user.id)
        _self.$store.commit('setMonthlyPayment', res.data.data)
        _self.$store.commit('setmonthlyPaymentMax', res.data.data)
        _self.$store.commit('setAmount', utilities.calculateAmount(res.data.data, 60, 0.1665))
        _self.$store.commit('setCreditType', false)
        _self.$router.push({ path: '/result' })
      })
    },
    closeError() {
      this.error = null;
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
  background-color: #174b86;
  color: white;
  border-color: white;
}
.botBlue:active {
  background-color: #174b86;
  color: white;
  border-color: white;
}
.backBlue {
  background-color: #174b86;
}
.textBlue {
  color: #174b86;
}
.botPink{
  background-color: white;
  color: #C71066;
  border-color: #C71066;
}
.botPink:hover {
  background-color: #C71066;
  color: white;
  border-color: white;
}
.botPink:active {
  background-color: #C71066;
  color: white;
  border-color: white;
}
.backPink {
  background-color: #C71066;
}
.textPink {
  color: #C71066;
}
</style>
