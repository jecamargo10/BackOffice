
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
      <div class="col-10 col-sm-10 col-md-9 col-lg-9 col-xl-7">
        <div class="container-fluid mt-4">
          <div class="row">
            <div class="col-1"></div>
            <div class="col p-0">
              <h4 class="textColor mb-5">¿Qué quieres hacer?</h4>
            </div>
            <div class="col-1"></div>
          </div>
          <div class="row">
            <div class="col-12 col-md-5 p-0">
              <img src="../assets/iknow.png" class="cardB sombra" width="100%">
            </div>
            <div @click="$router.push({ path: 'entry' })" class="col-12 col-md-5 offset-md-1 p-0">
              <img src="../assets/idknow.png" class="cardB sombra" width="100%">
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
  name: "OptionsPage", //nombre con el cual se usa el componente
  components: {
    Subheader
  },
  props: [""], //propiedades requeridas(o no) para el uso del componente
  data() {
    //data reactiva del componente
    return {};
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
    //metodos
  }
};
</script>

<style scoped>
i {
  font-size: 500%;
}

.dimFr {
  height: 35vh;
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
.sombra:active {
  -webkit-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0);
  -moz-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0);
  box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0);
}
.cardB {
  border-radius: 10px;
}
.cardB:active {
  border-radius: 10px;
  width: 99%;
}
.cardB:hover {
  border-radius: 10px;
  width: 99%;
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
