<template>
  <section>
    <div class="container-fluid">
      <div class="row ">
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
                Pagar
              </div>
            </div>
          </div>
        </div>
        <div v-if="secondMessage !== null" class="col-12 mt-2 p-0 backBlue text-light rounded-pill sombra" style="background-color:#00ACE4">
          <p class="m-2" v-text="secondMessage"></p>
        </div>
        <div v-if="entryValue !== null" class="col-12 mt-2 p-0 backBlue text-light rounded-pill sombra" style="background-color:#00ACE4">
          <p class="m-2" v-text="thirdMessage"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "subheader",
  props: {
    firstMessage: {
      default: 'Personalizar mi crédito'
    },
    secondMessage: {
      default(){
        return `Crédito aprobado: US $${this.$store.state.amount}`
      } 
    },
    entryValue: {
      default(){
        return this.$store.state.entryValue
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
  },
  computed: {
    thirdMessage: function(){
      if(this.entryValue == null){
        return ""
      }else{
        return `Valor de entrada: US$${this.entryValue}`
      }
    }
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


.botPink {
  background-color: white;
  color: #e91c72;
}
.botBlue:hover {
  background-color: #e91c72;
  color: white;
  border-color: white;
}
.botBlue:active {
  background-color: #e91c72;
  color: white;
  border-color: white;
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

.btn-autofacil{
  padding: .5em;
  color: #fff;
  border: none;
  width: 90%;
  border-radius: 1em;
}
</style>
