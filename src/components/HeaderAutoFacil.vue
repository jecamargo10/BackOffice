<template>
  <section>
    <div class="container-fluid">
      <div class="row p-0">
        <div class="col-12 p-0">
          <div >
            <b-navbar class="justify-content-center navColor" toggleable="true" type="light" variant="light">
              <b-navbar-toggle class="toggleButton" target="nav-text-collapse"></b-navbar-toggle>

              <b-navbar-brand>
                <div class="imageBancoDiv ">
                  <img :src="logoBancoSCR" alt="Logo Banco Guayaquil">
                </div>
              </b-navbar-brand>

              <b-collapse id="nav-text-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-text><router-link to="/" class="text-light">Solicitar</router-link></b-nav-text>
                </b-navbar-nav>
                <b-navbar-nav>
                  <b-nav-text class="text-light">Estado de mi crédito</b-nav-text>
                </b-navbar-nav>
                <b-navbar-nav>
                  <b-nav-text class="text-light">Preguntas frecuentes</b-nav-text>
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

.navColor{
 background: rgba(0,75,140,1);
background: -moz-linear-gradient(top, rgba(0,75,140,1) 0%, rgba(3,174,229,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(0,75,140,1)), color-stop(100%, rgba(3,174,229,1)));
background: -webkit-linear-gradient(top, rgba(0,75,140,1) 0%, rgba(3,174,229,1) 100%);
background: -o-linear-gradient(top, rgba(0,75,140,1) 0%, rgba(3,174,229,1) 100%);
background: -ms-linear-gradient(top, rgba(0,75,140,1) 0%, rgba(3,174,229,1) 100%);
background: linear-gradient(to bottom, rgba(0,75,140,1) 0%, rgba(3,174,229,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#004b8c', endColorstr='#03aee5', GradientType=0 );
}
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
