
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
      <div class="row border borderPink botPink dimFr d-flex align-items-center m-4">
        <div class="col-1"></div>
        <div class="col">
          <h6 class="textPink botPink">
            <strong>Tarjeta de Crédito</strong>
          </h6>
        </div>
        <div class="col m-2">
          <i class="material-icons textPink botPink">arrow_forward</i>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid mt-3">
      <div class="row border borderBlue dimFr d-flex align-items-center m-4 botBlue">
        <div class="col-1"></div>
        <div class="col p-0">
          <h6 class="textBlue botBlue">
            <strong>Tarjeta de Débito</strong>
          </h6>
        </div>
        <div class="col p-0">
          <i class="material-icons textBlue botBlue">arrow_forward</i>
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
      <div class="row">
        <div class="col">
          <router-link to="/">
            <button class="btn btn-success">Regresar</button>
          </router-link>
        </div>
      </div>
    </div>

  </section>
</template>

<script>

export default {
  name: "PayPage", //nombre con el cual se usa el componente
  components: {
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
