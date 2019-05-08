<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 p-0">
          <div>
            <b-navbar class="justify-content-center" toggleable="md" type="light" variant="light">
              <b-navbar-toggle class="toggleButton" target="nav-text-collapse"></b-navbar-toggle>

              <b-navbar-brand class="">
                <div class="imageBancoDiv">
                  <img :src="logoBancoSCR" alt="Logo Banco Guayaquil">
                </div>
              </b-navbar-brand>

              <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-text>Solicitar</b-nav-text>
                </b-navbar-nav>
                <b-navbar-nav>
                  <b-nav-text>Estado de mi crédito</b-nav-text>
                </b-navbar-nav>
                <b-navbar-nav>
                  <b-nav-text>Preguntas frecuentes</b-nav-text>
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import logoBanco from '../assets/bitmap.png'

export default {
  name: "login-page", //nombre con el cual se usa el componente
  props: [], //propiedades requeridas(o no) para el uso del componente
  data() {
    return {
      logoBancoSCR: logoBanco
    };
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
.toggleButton{
  left: 1em;
  position: absolute;
}
.imageBancoDiv{
  width: 8em;
}
.imageBancoDiv img{
  width: 100%;
  height: auto;
}
</style>
