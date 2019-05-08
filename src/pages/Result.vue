<template>
  <section>
    <div class="row">
      <div class="col">
        <img src="../assets/happy.png" alt>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <h2>Buenas noticias Santiago tienes un crédito aprobado por</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <br>
        <h1 class="text-center"><strong> US $25.000</strong></h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultPage", //nombre con el cual se usa el componente
  props: ["asasda"], //propiedades requeridas(o no) para el uso del componente
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
