<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div v-if="firstMessage !== null" class="col-12 m-0 backBlue text-light">
          <p class="my-2 font-size-larger" v-text="firstMessage"></p>
        </div>
        <div v-if="currentStage !== null" class="col-12 m-0">
          <div class="d-flex justify-content-center my-2 container-stages">
            <div class="stages d-flex justify-content-between">
              <div :class="{ 'botPink': currentStage === 1 }" class="d-flex align-items-center mr-3">
                <div class="circle-stage mr-1 d-flex justify-content-center align-items-center">
                  1
                </div>
                Solicitar
              </div>
              <div :class="{ 'botPink': currentStage === 2 }" class="d-flex align-items-center mr-3">
                <div class="circle-stage mr-1 d-flex justify-content-center align-items-center">
                  2
                </div>
                Elegir
              </div>
              <div :class="{ 'botPink': currentStage === 3 }" class="d-flex align-items-center mr-3">
                <div class="circle-stage mr-1 d-flex justify-content-center align-items-center">
                  3
                </div>
                Reservar
              </div>
            </div>
          </div>
          <hr>
        </div>
        <div v-if="secondMessage !== null" class="col-12 m-0">
          <button class="btn-autofacil bg-blue-ligth font-weight-bold" v-text="secondMessage"></button>
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
      default(){
        return `Crédito aprobado: US $${this.$store.state.amount}`
      } 
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

.botBlue {
  background-color: white;
  color: #174b86;
  border-color: #174b86;
}
.botBlue:hover {
  color: #C71066;
  border-color: #C71066;
}
.botBlue:active {
  color: #C71066;
  border-color: #C71066;
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

.botPink{
  background-color: white;
  color: #C71066;
  border-color: #C71066;
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
  background-color: #C71066;
}
.textPink {
  color: #C71066;
}
.borderPink {

  border-color: #C71066 !important;
}

.btn-autofacil{
  padding: .5em;
  color: #fff;
  border: none;
  width: 90%;
  border-radius: 1em;
}
</style>
