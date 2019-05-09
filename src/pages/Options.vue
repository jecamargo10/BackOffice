
<template>
  <section>
     <div class="container-fluid">
        <div class="row">
           <div class="col p-0">
               <Subheader :currentStage="2" :firstMessage="'¿Qué quieres hacer?'" :secondMessage="null"></Subheader>
           </div>
        </div>
     </div>
     <div class="container-fluid mt-4">
        <div class="row border borderPink dimFr d-flex align-items-center">
           <div class="col-1"></div>
           <div class="col p-0">
               <h6  class="textPink botPink"><strong>Ya se que carro quiero comprar</strong></h6>
           </div>
           <div class="col p-0">
               <i class="material-icons textPink botPink">arrow_forward</i>
           </div>
           <div class="col-1"></div>
        </div>
     </div>
     <div @click="$router.push({ path: 'carselection' })" class="container-fluid">
        <div class="row border border-primary dimFr d-flex align-items-center">
           <div class="col-1"></div>
           <div class="col p-0 ">
               <h6 class="textBlue botBlue"><strong>Quiero ver opciones según mi capacidad</strong></h6>
           </div>
           <div class="col p-0">
               <i class="material-icons textBlue botBlue">arrow_forward</i>
           </div>
           <div class="col-1"></div>
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
    if (this.$store.state.monthlyPayment === undefined || this.$store.state.monthlyPayment === null) {
      return this.$router.push({
        path: '/registry'
      })
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

.dimFr{
   height: 35vh;
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
</style>
