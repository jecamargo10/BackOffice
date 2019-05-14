<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-7 col-md-4 col-lg-4 col-xl-3">
        <div class="container-fluid">
          <div class="row">
            <div class="col p-0">
              <Subheader :currentStage="1" :firstMessage="null"></Subheader>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-9 col-md-7 col-lg-6 col-xl-4">
        <div class="container-fluid">
          <div class="row d-flex align-items-center">
            <div class="col">
              <h5 class="textColor text-center">¿Cuánto tienes disponible para la cuota de entrada?</h5>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row mt-5">
            <div class="col-1"></div>
            <div class="col p-0">
              <form @submit.prevent="routeResult">
                <div class="form-row border-bottom borderR textColor">
                  <div class="col-2">
                    <img src="../assets/license.png" width="30em" height="auto">
                  </div>
                  <div class="col-8">
                    <input
                      v-model="valorEntrada"
                      required
                      :min="minEntry"
                      type="number"
                      class="form-control border-0 textColor"
                      placeholder="Ingresa un valor"
                    >
                  </div>
                </div>
                <div class="form-row">
                  <div v-if="error !== null" class="col">
                    <div class="alert alert-danger" role="alert">
                      <div
                        @click="closeError"
                        class="position-absolute cursor-pointer rigth-0 top-0"
                      >X</div>
                      <p v-text="error"></p>
                    </div>
                  </div>
                </div>
                <div class="form-row mt-4 mb-5">
                  <div class="col-2"></div>
                  <div class="col p-0">
                    <button
                      type="submit"
                      class="btn btn-outline btn-block botBlue rounded-pill"
                    >Solicitar</button>
                  </div>
                  <div class="col-2"></div>
                </div>
              </form>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from "../components/Subheader.vue";

export default {
  name: "Entrada", //nombre con el cual se usa el componente
  components: {
    Subheader
  },
  props: [], //propiedades requeridas(o no) para el uso del componente
  data() {
    //data reactiva del componente
    return {
      error: null,
      valorEntrada: undefined,
      minEntry: undefined
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
    this.minEntry = Math.round((25 / 75) * this.$store.state.amount);
    this.valorEntrada = this.minEntry;
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    routeResult() {
      this.$store.commit("setEntryValue", this.valorEntrada);
      this.$router.push({ path: "/carselection" });
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
