<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0 col-sm-0">
          <img src="../assets/ondas.png" width="100%" height="auto">
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row d-flex align-items-center mb-2">
        <div class="col">
          <img src="../assets/key.png" width="50em" height="auto">
        </div>
      </div>
      <div class="row d-flex align-items-center">
        <div class="col">
          <h5 class="textColor text-center">
            En
            <strong>AutoFácil</strong> podemos aprobar tu crédito con solo tres datos.
          </h5>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row justify-content-center mt-5">
        <div class="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-4 p-0">
          <form @submit.prevent="routeResult">
            <div class="form-row border-bottom borderR textColor">
              <div class="col-2">
                <img src="../assets/license.png" width="30em" height="auto">
              </div>
              <div class="col-8">
                <input
                  v-model="ccInput"
                  required
                  type="number"
                  class="form-control border-0 textColor"
                  aria-describedby="emailHelp"
                  placeholder="Número de cédula"
                >
              </div>
            </div>
            <div class="form-row border-bottom borderR textColor mt-3">
              <div class="col-2">
                <img src="../assets/mobile.png" width="20em" height="auto">
              </div>
              <div class="col">
                <input
                  v-model="phoneInput"
                  required
                  type="number"
                  class="form-control border-0 textColor"
                  placeholder="Número de teléfono"
                >
              </div>
            </div>
            <div class="form-row mt-3">
              <div class="col-7 p-0 mr-2">
                <div class="row border-bottom borderR textColor p-0 m-0">
                  <div class="col-4 pl-1 mr-2">
                    <img src="../assets/fingerprint.png" width="20em" height="auto">
                  </div>
                  <div class="col p-0 m-0">
                    <input
                      v-model="huellaInput"
                      required
                      type="text"
                      class="form-control border-0 textColor p-0 m-0"
                      placeholder="Código dactilar"
                    >
                  </div>
                </div>
              </div>
              <div class="col-4 p-0 d-flex align-items-top">
                <img src="../assets/actilar.png" alt="ejemploHuella" width="170%">
              </div>
              <div class="col-2">
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
              <label class="custom-control-label" for="customCheck1">Acepto política de privacidad</label>
            </div>
            <div class="form-row mt-4">
              <a href class="mx-auto">
                <router-link to="/fail">
                  <h6 class="textBlue text-center">Tengo un crédito en proceso</h6>
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
            <div class="form-row mt-4 mb-5">
              <div class="col-2"></div>
              <div class="col p-0">
                <button type="submit" class="btn btn-outline btn-block botBlue rounded-pill py-3">Solicitar</button>
              </div>
              <div class="col-2"></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import providerServices from "../providerServices/providerServices.js";
import utilities from "../utilities.js";

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
          _self.$store.commit("setUserId", res.data.user.id);
          _self.$store.commit("setMonthlyPayment", res.data.data);
          _self.$store.commit("setmonthlyPaymentMax", res.data.data);
          _self.$store.commit(
            "setAmount",
            utilities.calculateAmount(res.data.data, 60, 0.1665)
          );
          _self.$store.commit("setCreditType", false);
          _self.$router.push({ path: "/result" });
        }
      );
    },
    closeError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
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

.borderR {
  border-radius: 0;
  border-color: #004b8c !important;
  border-bottom-width: 1px !important;
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
</style>
