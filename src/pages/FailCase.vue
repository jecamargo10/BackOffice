<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col p-0">
        <img src="../assets/ondas.png" width="100%" height="auto">
      </div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row mt-0">
          <div class="col">
            <img src="../assets/sad.png" alt="sad" width="60em" height="60em">
          </div>
        </div>
        <div class="row mt-3">
          <div class="col textColor">
            <h3>Uuups, no se pudo completar el proceso</h3>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col">
            <h6
              class="textColor"
            >Pero no te preocupes, dejanos tus datos y pronto te contactará un asesor para más información.</h6>
          </div>
        </div>
        <form>
          <div class="form-row border-bottom borderR textColor mt-4">
            <div class="col">
              <input
                v-model="ccInput"
                required
                type="text"
                class="form-control border-0 textColor"
                aria-describedby="emailHelp"
                placeholder="Nombres"
              >
            </div>
          </div>
          <div class="form-row border-bottom borderR textColor mt-3">
            <div class="col">
              <input
                v-model="ccInput"
                required
                type="text"
                class="form-control border-0 textColor"
                aria-describedby="emailHelp"
                placeholder="Apellidos"
              >
            </div>
          </div>
          <div class="form-row border-bottom borderR textColor mt-3">
            <div class="col">
              <input
                v-model="ccInput"
                required
                type="email"
                class="form-control border-0 textColor"
                aria-describedby="emailHelp"
                placeholder="Email"
              >
            </div>
          </div>
          <div class="form-row border-bottom borderR textColor mt-3">
            <div class="col">
              <input
                v-model="ccInput"
                required
                type="number"
                class="form-control border-0 textColor"
                aria-describedby="emailHelp"
                placeholder="Teléfono"
              >
            </div>
          </div>
          <div class="form-row mt-4 mb-4">
            <div class="col">
              <div class="form-row form-check">
                <input type="checkbox" class="custom-control-input" id="customCheck1">
                <label class="custom-control-label textColor" for="customCheck1">Acepto política de privacidad</label>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row mt-4 mb-5">
      <div class="col-2"></div>
      <div class="col p-0">
        <button type="submit" class="btn btn-outline btn-block botBlue rounded-pill">Enviar</button>
      </div>
      <div class="col-2"></div>
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

.borderR {
  border-radius: 0;
  border-color: #004b8c !important;
  border-bottom-width: 1px !important;
}
::-webkit-input-placeholder {
  /* Edge */
  color: #004b8c;
}

:-ms-input-placeholder {
  /* Internet Explorer */
  color: #004b8c;
}

::placeholder {
  color: #004b8c;
}
</style>
