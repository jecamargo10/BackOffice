<template>
  <div class="card w-100">
    <p class="mb-0 mt-2 ml-4 text-left" v-text="titleCar"></p>
    <img :src="imageCar" class="card-img-top" alt="Car">
    <div class="card-body">
      <p class="card-text" v-text="'Desde: $ '+minimunPrice"></p>
    </div>
  </div>
</template>

<script>
import modelCar from "../assets/model-car.jpg";

export default {
  name: "card-car", //nombre con el cual se usa el componente
  props: {
    imageCar: {
      default: modelCar
    },
    minimunPrice: {
      default: '36.000'
    },
    titleCar: {
      default: 'RIO'
    }
  }, //propiedades requeridas(o no) para el uso del componente
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
</style>