<template>
  <section>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col ondasFondo1"></div>
        <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4 p-0">
          <img src="../assets/carP1.png" style="width:100%; height:auto" alt="Fondo">
        </div>
        <div class="col ondasFondo2"></div>
      </div>
    </div>
    <div class="container-fluid textColor">
      <div class="row justify-content-center mt-5">
        <div class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-4 p-0">
          <div class="container-fluid">
            <div class="row mb-4">
              <div class="col-1"></div>
              <div class="col p-0">
                <p> <strong>1.</strong> Solicita tu crédito</p>
              </div>
              <div class="col p-0">
                <p><strong>2.</strong> Elige tu auto</p>
              </div>
              <div class="col p-0">
                <p><strong>3.</strong> Paga y listo</p>
              </div>
              <div class="col-1"></div>
            </div>
            <div class="row mt-3 mb-3">
              <div class="col">
                <h5>¡Tú auto te espera en el consesionario más cercano!</h5>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <div class="imgCarLobby">
                  <img src="../assets/pointsCar.png" alt>
                </div>
              </div>
            </div>
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
.imgCarLobby{
  max-width: 8em;
}
.imgCarLobby img{
  width: 100%;
  height: auto;
}
.ondasFondo1 {
  background: rgba(75, 158, 202, 1);
  background: -moz-linear-gradient(
    top,
    rgba(75, 158, 202, 1) 0%,
    rgba(85, 155, 199, 1) 32%,
    rgba(110, 165, 201, 1) 37%,
    rgba(115, 156, 192, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(75, 158, 202, 1)),
    color-stop(32%, rgba(85, 155, 199, 1)),
    color-stop(37%, rgba(110, 165, 201, 1)),
    color-stop(100%, rgba(115, 156, 192, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(75, 158, 202, 1) 0%,
    rgba(85, 155, 199, 1) 32%,
    rgba(110, 165, 201, 1) 37%,
    rgba(115, 156, 192, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(75, 158, 202, 1) 0%,
    rgba(85, 155, 199, 1) 32%,
    rgba(110, 165, 201, 1) 37%,
    rgba(115, 156, 192, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(75, 158, 202, 1) 0%,
    rgba(85, 155, 199, 1) 32%,
    rgba(110, 165, 201, 1) 37%,
    rgba(115, 156, 192, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(75, 158, 202, 1) 0%,
    rgba(85, 155, 199, 1) 32%,
    rgba(110, 165, 201, 1) 37%,
    rgba(115, 156, 192, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4b9eca', endColorstr='#739cc0', GradientType=0 );
}
.ondasFondo2 {
  background: rgba(81, 197, 235, 1);
  background: -moz-linear-gradient(
    top,
    rgba(81, 197, 235, 1) 0%,
    rgba(98, 204, 240, 1) 32%,
    rgba(114, 208, 240, 1) 37%,
    rgba(116, 209, 240, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(81, 197, 235, 1)),
    color-stop(32%, rgba(98, 204, 240, 1)),
    color-stop(37%, rgba(114, 208, 240, 1)),
    color-stop(100%, rgba(116, 209, 240, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(81, 197, 235, 1) 0%,
    rgba(98, 204, 240, 1) 32%,
    rgba(114, 208, 240, 1) 37%,
    rgba(116, 209, 240, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(81, 197, 235, 1) 0%,
    rgba(98, 204, 240, 1) 32%,
    rgba(114, 208, 240, 1) 37%,
    rgba(116, 209, 240, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(81, 197, 235, 1) 0%,
    rgba(98, 204, 240, 1) 32%,
    rgba(114, 208, 240, 1) 37%,
    rgba(116, 209, 240, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(81, 197, 235, 1) 0%,
    rgba(98, 204, 240, 1) 32%,
    rgba(114, 208, 240, 1) 37%,
    rgba(116, 209, 240, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#51c5eb', endColorstr='#74d1f0', GradientType=0 );
}
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
