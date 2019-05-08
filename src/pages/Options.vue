
<template>
  <section>
    <div class="row">
      <div class="col">
        <Subheader :currentStage="1" :firstMessage="'¿Qué quieres hacer?'" :secondMessage="null"></Subheader>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <i class="material-icons text-primary">arrow_forward</i>
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
  font-size: 500%;
}
</style>
