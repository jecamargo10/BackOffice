<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-7 col-md-4 col-lg-4 col-xl-3">
        <div class="container-fluid">
          <div class="row">
            <div class="col p-0">
              <Subheader :currentStage="2" :firstMessage="null"></Subheader>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-9 col-lg-9 col-xl-7">
        <div class="container-fluid">
          <div class="row">
            <div class="col p-0 pt-3 backBlue">
              <p class="font-size-x-large text-light">Tu crédito ha sido aplicado con éxito</p>
              <div class="bg-light w-50 mx-auto">
                <p class="text-secondary p-2">
                  Credito
                  <br>
                  # {{credit}}
                </p>
              </div>
              <p class="text-light">Presenta este código al concesionario.</p>
              <p class="text-light">
                <small>Valido hasta el 31/08/2019</small>
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col mt-3">
              <div class="container-fluid">
                <div class="row">
                  <div class="col mb-3 mt-3">
                    <h4>Tu carro esta disponible en:</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 d-flex align-items-center">
                    <input
                      v-model="currentConcessionaire"
                      type="radio"
                      id="concesionario1"
                    >
                    <label for="concesionario1" class="ml-4">
                      <p class="font-weight-bold text-left">Mundokia</p>
                      <p class="text-left">Carrera 43 A # 30 – 50</p>
                    </label>
                  </div>
                  <div class="col-12 d-flex align-items-center">
                    <input
                      v-model="currentConcessionaire"
                      type="radio"
                      id="concesionario2"
                    >
                    <label for="concesionario2" class="ml-4">
                      <p class="font-weight-bold text-left">Distrikia Guayabal</p>
                      <p class="text-left">Cl. 10 ## 50-264</p>
                    </label>
                  </div>
                  <div class="col-12 d-flex align-items-center">
                    <input
                      v-model="currentConcessionaire"
                      type="radio"
                      id="concesionario3"
                    >
                    <label for="concesionario3" class="ml-4">
                      <p class="font-weight-bold text-left">VehiKIA Medellín</p>
                      <p class="text-left">Cra. 50 ## 30-12</p>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <button @click="completeCredit" class="btn botBlue">Completar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from "../components/Subheader.vue";

export default {
  name: "credit-info", //nombre con el cual se usa el componente
  props: {}, //propiedades requeridas(o no) para el uso del componente
  components: {
    Subheader
  },
  data() {
    //data reactiva del componente
    return {
      currentConcessionaire: "",
      credit: undefined
    };
  },
  created() {
    //lo que pasa cuando se crea el componente  aca se ponen la consulta a servicios
    this.credit = this.$store.state.credit;
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    //metodos
    completeCredit() {
      this.$router.push({
        path: "creditComplete"
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
