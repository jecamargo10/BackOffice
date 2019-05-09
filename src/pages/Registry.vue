<template>
  <section>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col p-0">
          <h3><strong>En AutoFácil con solo tres datos podemos aprobar tu crédito.</strong></h3>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col-1"></div>
        <div class="col p-0">
          <form>
            <div class="form-row">
              <h5 class="text-left">Digita tu cédula</h5>
              <input type="number" class="form-control" aria-describedby="emailHelp">
            </div>
            <div class="form-row mt-3">
              <h5 class="text-left">Tu celular</h5>
              <input type="number" class="form-control">
            </div>
            <div class="form-row mt-3">
              <div class="col">
                <h5 class="text-left">Código dactilar</h5>
                <input type="number" class="form-control">
              </div>
              <div class="col">
                <img src="../assets/actilar.png" alt="ejemploHuella">
              </div>
            </div>
            <div class="form-row form-check mt-3">
              <input type="checkbox" class="custom-control-input" id="customCheck1">
              <label class="custom-control-label" for="customCheck1">Lsed leo faucibus sollicitudim?</label>
            </div>
            <div class="form-row mt-3">
              <a href class="mx-auto">
                <router-link to="/fail">
                  <h6 class="text-primary text-center">Ya estoy registrado</h6>
                </router-link>
              </a>
            </div>
            <div class="form-row mt-4">
              <div class="col">
                <button
                  type="submit"
                  @click="routeResult"
                  class="btn btn-outline-primary btn-lg"
                >Solicitar</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LobbyPage", //nombre con el cual se usa el componente
  props: [], //propiedades requeridas(o no) para el uso del componente
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
    routeResult() {
      this.$router.push({ path: "/result" });
    }
  }
};
</script>

<style scoped>
</style>
