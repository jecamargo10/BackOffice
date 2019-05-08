<template>
  <section>
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <br>
        <h2>Con solo tres datos podemos aprobar tu crédito</h2>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <form>
          <br>
          <br>
          <div class="form-row">
            <br>
            <h5 class="text-left">Digita tu cédula</h5>
            <input type="number" class="form-control" aria-describedby="emailHelp">
          </div>
          <br>
          <div class="form-row">
            <h5 class="text-left">Tu celular</h5>
            <input type="number" class="form-control">
            <br>
            <br>
            <br>
          </div>
          <div class="form-row">
            <div class="col">
              <h5 class="text-left">Código dactilar</h5>
              <input type="number" class="form-control">
            </div>
            <div class="col">
              <img src="../assets/actilar.png" alt="ejemploHuella">
            </div>
          </div>
          <div class="form-row form-check">
            <br>
            <input type="checkbox" class="custom-control-input" id="customCheck1">
            <h5 class="custom-control-label" for="customCheck1">Lsed leo faucibus sollicitudim?</h5>
            <br>
          </div>
          <div class="form-row ">
            <a href="" class="mx-auto">
              <h6 class="text-primary text-center">Ya estoy registrado</h6>
            </a>
            <br>
            <br>
          </div>
          <button type="submit" class="btn btn-outline-primary btn-lg">Continuar</button>
        </form>
      </div>
      <div class="col-1"></div>
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
    //metodos
  }
};
</script>

<style scoped>
</style>
