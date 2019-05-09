<template>
  <section>
    <div class="container-fluid">
      <div class="row" style="background-color: black;">
        <div class="col p-0">
          <div class="contenedor">
            <h2
              class="texto-arriba mt-2 text-light"
            >Financiamos tu carro en 3 pasos y sin documentos.</h2>
            <img src="../assets/image--light.png" style="width:100vw; height:auto" alt="Fondo">
            <h5
              class="texto-abajo mb-4 text-light"
            >Con AutoFácil, obtendrás un crédito en minutos para el carro que quieres.</h5>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-1"></div>
        <div class="col p-0">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-left outBorder">
              <div class="row d-flex align-items-center">
                <div class="col-2 mr-5">
                  <img src="../assets/Solicitar.png" alt width="75em" height="auto">
                </div>
                <div class="col">
                  <strong>1. Solicita tu crédito</strong>
                </div>
              </div>
            </li>
            <li class="list-group-item text-left outBorder">
              <div class="row d-flex align-items-center">
                <div class="col-2 mr-5">
                  <img src="../assets/Elegir.png" alt width="75em" height="auto">
                </div>
                <div class="col">
                  <strong>2. Elige tú auto</strong>
                </div>
              </div>
            </li>
            <li class="list-group-item text-left outBorder">
              <div class="row d-flex align-items-center">
                <div class="col-2 mr-5">
                  <img src="../assets/Pagar.png" alt width="75em" height="auto">
                </div>
                <div class="col">
                  <strong>3. Paga almenos el 25% y listo</strong>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col p-4 backBlue">
          <h5 class="text-light">¡Tú auto te espera en el consesionario más cercano!</h5>
        </div>
      </div>
    </div>

    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col p-0">
          <button
            type="button"
            @click="routeRegistry"
            class="btn btn-outline btn-lg botBlue"
          >¿Empezamos?</button>
        </div>
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
