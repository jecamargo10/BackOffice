<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div v-if="firstMessage !== null" class="col-12 m-0 bg-secondary-ligth">
          <p class="my-2 font-size-larger" v-text="firstMessage"></p>
        </div>
        <div v-if="currentStage !== null" class="col-12 m-0">
          <div class="d-flex justify-content-center my-2 container-stages">
            <div class="stages d-flex justify-content-between">
              <div :class="{ 'stage-active': currentStage === 1 }" class="d-flex align-items-center mr-3">
                <div class="circle-stage mr-1 d-flex justify-content-center align-items-center">
                  1
                </div>
                Solicitar
              </div>
              <div :class="{ 'stage-active': currentStage === 2 }" class="d-flex align-items-center mr-3">
                <div class="circle-stage mr-1 d-flex justify-content-center align-items-center">
                  2
                </div>
                Elegir
              </div>
              <div :class="{ 'stage-active': currentStage === 3 }" class="d-flex align-items-center mr-3">
                <div class="circle-stage mr-1 d-flex justify-content-center align-items-center">
                  3
                </div>
                Pagar
              </div>
            </div>
          </div>
        </div>
        <div v-if="secondMessage !== null" class="col-12 m-0 bg-secondary-ligth">
          <p class="my-3" v-text="secondMessage"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "subheader", //nombre con el cual se usa el componente
  props: {
    firstMessage: {
      default: 'Personalizar mi crédito'
    }, 
    secondMessage: {
      default: 'Crédito aprobado: US $24.500'
    }, 
    currentStage: {
      default: 3
    }
  }, //propiedades requeridas(o no) para el uso del componente
  data() {
    //data reactiva del componente
    return {
        counter: 45,
        max: 100
    };
  },
  created() {
    
    //lo que pasa cuando se crea el componente  aca se ponen la consulta a servicios
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
  }
};
</script>

<style scoped>
.circle-stage{
  border-radius: 50%;
  width: 2em;
  height: 2em;
  border-style: solid;
  border-width: thin;
}
.stage-active{
  border-color: green;
  color: green;
}
.stage-active::after{
  content: "";
  width: .7em;
  height: .7em;
  position: absolute;
  bottom: -.7em;
  z-index: 100;
  border-width: .7em .7em 0;
  border-style: solid;
  border-color: #fff transparent transparent;
}
</style>
