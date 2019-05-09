
<template>
  <section>
    <div class="container-fluid">
      <div class="row mt-5 ml-4 mr-4">
        <div class="col">
          <h2>Reserva tu carro con US $500</h2>
        </div>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row border border-primary dimFr d-flex align-items-center m-4">
        <div class="col-1"></div>
        <div class="col">
          <h6 class="text-primary">
            <strong>Tarjeta de Crédito</strong>
          </h6>
        </div>
        <div class="col m-2">
          <i class="material-icons text-primary">arrow_forward</i>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid mt-3">
      <div class="row border border-primary dimFr d-flex align-items-center m-4">
        <div class="col-1"></div>
        <div class="col p-0">
          <h6 class="text-primary">
            <strong>Tarjeta de Débito</strong>
          </h6>
        </div>
        <div class="col p-0">
          <i class="material-icons text-primary">arrow_forward</i>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row ml-4 mr-4">
        <div class="col">
          <h5>O si prefieres, acercate al concesionario para reservar tú carro.</h5>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col mt-4">
          <div class="col">
              <h6 class="font-weight-bold">Nombre Concesionario</h6>
              <p>Direccion concesinario</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from "../components/Subheader.vue";

export default {
  name: "PayPage", //nombre con el cual se usa el componente
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
  font-size: 300%;
}

.dimFr {
  height: 10vh;
}
</style>
