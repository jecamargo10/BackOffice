<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <div class="contenedor">
            <img src="../assets/carP1.png" style="width:100vw; height:auto; top: -1px; position: relative;" alt="Fondo">
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid textColor">
      <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col p-0">
          <div class="row mb-4">
            <div class="col-1"></div>
            <div class="col p-0"><h6>1. Solicita tu crédito</h6></div>
            <div class="col p-0"><h6>2. Elige tu auto</h6></div>
            <div class="col p-0"><h6>3. Paga y listo</h6></div>
            <div class="col-1"></div>
          </div>
          <div class="row mt-3 mb-3">
            <div class="col">
              <h5>¡Tú auto te espera en el consesionario más cercano!</h5>
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <img src="../assets/pointsCar.png" alt="" width="45%">
            </div>
          </div>

        </div>
        <div class="col-1"></div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row mt-2 mb-5">
        <div class="col-2"></div>
        <div class="col p-0">
          <button
            type="button"
            @click="routeRegistry"
            class="btn btn-block botBlue rounded-pill"
          >¿Empezamos?</button>
        </div>
        <div class="col-2"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LobbyPage", //nombre con el cual se usa el componente
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
    routeRegistry() {
      this.$router.push({ path: "/registry" });
    }
  }
};
</script>

<style scoped>
.contenedor {
  position: relative;
  display: inline-block;
  text-align: center;
}

.texto-arriba {
  position: absolute;
  top: 10px;
  right: 20px;
  left: 20px;
}
.texto-abajo {
  position: absolute;
  text-align: center;
  bottom: 5px;
  right: 20px;
  left: 20px;
}

.outBorder {
  border: 0 !important;
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
</style>
