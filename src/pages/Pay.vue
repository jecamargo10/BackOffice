<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-md-9 col-lg-5 col-xl-4">
        <div class="container-fluid">
          <div class="container-fluid">
            <div class="row mt-5 ml-4 mr-4">
              <div class="col">
                <h3 class="textColor">Reserva tu carro con $500</h3>
              </div>
            </div>
          </div>
          <div class="container-fluid mt-5">
            <div class="row justify-content-center">
              <div class="col">
                <img src="../assets/credit.png" alt width="100%">
              </div>
            </div>
          </div>
          <div class="container-fluid mt-3">
            <div class="row justify-content-center">
              <div class="col">
                <img src="../assets/debit.png" alt width="100%">
              </div>
            </div>
          </div>

          <div class="container-fluid mt-5">
            <div class="row justify-content-center ml-4 mr-4">
              <div class="col">
                <h5
                  class="textColor"
                >Ó si prefieres, acercate al concesionario para reservar tu carro</h5>
              </div>
            </div>
          </div>

          <div class="container-fluid">
            <div class="row justify-content-center mt-4">
              <div class="col">
                <div class="row justify-content-center">
                  <div class="col-1 mr-0 pr-0 pl-0">
                    <img src="../assets/place.png" width="130%">
                  </div>
                  <div class="col">
                    <h6 class="font-weight-bold textColor text-justify pb-0 mb-0">Intercar</h6>
                    <p class="textColor text-left pt-0">Tr Fermin, Guayaquil 0904</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row justify-content-center mt-3 mb-5">
              <div class="col">
                <router-link to="/">
                  <button class="btn btn-outline btn-block botBlue rounded-pill">Regresar</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PayPage", //nombre con el cual se usa el componente
  components: {},
  props: [""], //propiedades requeridas(o no) para el uso del componente
  data() {
    //data reactiva del componente
    return {};
  },
  created() {
    //lo que pasa cuando se crea el componente  aca se ponen la consulta a servicios
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
  font-size: 300%;
}

.dimFr {
  height: 10vh;
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
