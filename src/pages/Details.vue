
<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <Subheader
            :currentStage="1"
            :firstMessage="null"
            :secondMessage="'Crédito aprobado: US $24.500'"
          ></Subheader>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-1"></div>
        <div class="col p-0 text-left">
          <h6>
            <strong>KIA SOUL</strong>
          </h6>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-2">
        <div class="col-1"></div>
        <div class="col p-0">
          <div>
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col"></div>
        <div class="col d-flex justify-content-center d-1 m-1">
          <button type="button" class="btn btn-outline-primary rounded-circle circular p-2 m-1"></button>

          <button type="button" class="btn btn-outline-secondary rounded-circle circular p-2 m-1"></button>

          <button type="button" class="btn btn-outline-danger rounded-circle circular p-2 m-1"></button>

          <button type="button" class="btn btn-outline-success rounded-circle circular p-2 m-1"></button>

          <button type="button" class="btn btn-outline-dark rounded-circle circular p-2 m-1"></button>
        </div>
        <div class="col"></div>
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
      <div class="row border broder-secondary">
        <div class="col-1"></div>
        <div class="col">
          <div>
            <div v-b-toggle.collapse-a.collapse-b>
              <div class="row mt-2 d-flex align-items-center">
                <div class="col pr-0">
                  <h4>Detalles del carro</h4>
                </div>
                <div class="col-2 pl-0">
                  <i class="material-icons text-primary">add</i>
                </div>
              </div>
            </div>
            <b-collapse id="collapse-a" class="mt-2">
              <b-card>Marca: KIA</b-card>
            </b-collapse>
            <b-collapse id="collapse-b" class="mt-2">
              <b-card>Tipo: SOUL</b-card>
            </b-collapse>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-1"></div>
        <div class="col">
          <div class="row mt-4">
            <div class="col">
              <h2><strong>US $35.000</strong></h2>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">Cuota de entrada: Us $10.500</div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <a href>
                <h6 class="text-center text-primary">Cambiar cuota de entrada</h6>
              </a>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <a href>
                <h6 class="text-center text-primary">Ver condiciones del crédito</h6>
              </a>
            </div>
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col p-0">
          <button
            type="button"
            class="btn btn-outline-primary btn-lg"
          >Aplicar mi crédito</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from "../components/Subheader.vue";

export default {
  name: "DetailPage", //nombre con el cual se usa el componente
  components: {
    Subheader
  },
  props: [""], //propiedades requeridas(o no) para el uso del componente
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Por favor seleciona una opción" },
        { value: "a", text: "Básico" },
        { value: "b", text: "Full equipo" }
      ]
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
i {
  font-size: 200%;
}

.dimFr {
  height: 35vh;
}
.circular {
  height: 1.5em;
  width: 1.5em;
}
</style>
