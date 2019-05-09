<template>
  <section>
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row mt-4">
          <div class="col">
            <img src="../assets/sad.png" alt="sad">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col textBlue">
            <h2>Uuups, no se pudo completar el proceso.</h2>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h6>Pero no te preocupes, dejanos tus datos y pronto te contactará un asesor para más información.</h6>
          </div>
        </div>
        <form>
          <div class="form-row mt-4">
            <h5 class="text-left">Nombres</h5>
            <input type="text" class="form-control">
          </div>
          <div class="form-row mt-3">
            <h5 class="text-left">Apellidos</h5>
            <input type="text" class="form-control">
          </div>
          <div class="form-row mt-3">
            <h5 class="text-left">Tu email</h5>
            <input type="email" class="form-control">
          </div>
          <div class="form-row mt-3">
            <div class="col">
              <h5 class="text-left">Celular</h5>
              <input type="number" class="form-control">
            </div>
          </div>
          <div class="form-row mt-3 mb-4">
            <div class="col">
              <div class="form-row form-check">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label
                  class="custom-control-label"
                  for="customCheck1"
                >Lsed leo faucibus sollicitudim?</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row mt-4">
      <div class="col">
        <button type="submit" class="btn btn-outline botBlue btn-lg">Enviar</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "FailCasePage", //nombre con el cual se usa el componente
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
