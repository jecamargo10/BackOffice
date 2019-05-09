
<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <Subheader :currentStage="2" :firstMessage="null" :secondMessage="null"></Subheader>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-1"></div>
        <div class="col p-0 text-center">
          <h3>Se usará tu crédito para</h3>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-2">
        <div class="col-1"></div>
        <div class="col p-0 text-center">
          <h2>
            <strong>KIA SOUL</strong>
          </h2>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-1"></div>
        <div class="col">
          <img class="card-img-top" src="../assets/model-car.jpg" alt="carro">
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-1"></div>
        <div class="col">
          <div class="row mt-1">
            <div class="col">
              <h3>
                <strong>
                  Valor total
                  <br>US $35.000
                </strong>
              </h3>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">Crédito aprobado: US $24.500</div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="col">Valor de cuotas: US $500</div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <div class="col">Número de cuotas: 60</div>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col p-0">
          <input type="checkbox" class="custom-control-input" id="customCheck1">
          <label class="custom-control-label" for="customCheck1">Aceptar términos y condiciones.</label>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col p-0">
          <button type="button" class="btn btn-outline botBlue btn-lg">Confirmar crédito</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from "../components/Subheader.vue";

export default {
  name: "FinalPage", //nombre con el cual se usa el componente
  components: {
    Subheader
  },
  props: [""], //propiedades requeridas(o no) para el uso del componente
  data() {
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
