<template>
  <section class="container-fluid">
    <div class="row">
      <div class="col p-0">
        <Subheader :firstMessage="'Simular mi credito'" :currentStage="null" :secondMessage="null"></Subheader>
      </div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col mt-4 mb-4">
        <div class="input-group">
          <input
            type="number"
            class="form-control"
            placeholder="Crédito en US"
            aria-label="Recipient's username with two button addons"
            aria-describedby="button-addon4"
            min="0"
            max="25000"
          >
          <div class="input-group-append" id="button-addon4">
            <button class="btn btn-outline-primary" type="button">+</button>
            <button class="btn btn-outline-primary" type="button">-</button>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col pb-3 pt-3" style="background-color:#eee">
        <div class="row">
          <div class="col">
            <h6>Ajustar número de cuotas</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-1"></div>
          <div class="col">
            <div class="row">
              <div class="col">
                <input type="range" class="custom-range" min="0" max="5" step="1" id="customRange3">
              </div>
            </div>
            <div class="row">
              <div class="col">
                <label for="customRange3">12</label>
              </div>
              <div class="col">
                <label for="customRange3">24</label>
              </div>
              <div class="col">
                <label for="customRange3">36</label>
              </div>
              <div class="col">
                <label for="customRange3">48</label>
              </div>
              <div class="col">
                <label for="customRange3">60</label>
              </div>
              <div class="col">
                <label for="customRange3">72</label>
              </div>
            </div>
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    </div>
    <div class="row mt-4 pb-4 border-bottom">
      <div class="col-1"></div>
      <div class="col">
        <div class="row">
          <div class="col">
            <h5>Valor cuota mensual</h5>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <h3>US $500</h3>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col">
            <div class="custom-control custom-switch">
              <input type="checkbox" class="custom-control-input" id="customSwitch1">
              <label class="custom-control-label" for="customSwitch1">Cambiar a Alemana</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
    <div class="row">
      <div class="col-1"></div>
      <div class="col">
        <div class="row mt-3">
          <div class="col">
             <button type="submit" class="btn btn-outline-primary btn-lg">Aplicar</button>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col">
            <h5 class="text-center text-primary"><u>Cancelar</u></h5>
          </div>
        </div>
      </div>
      <div class="col-1"></div>
    </div>
  </section>
</template>


<script>
import Subheader from '../components/Subheader.vue'
export default {
  name: "SettingPage", //nombre con el cual se usa el componente
  props: ["asasda"], //propiedades requeridas(o no) para el uso del componente
  components: {
    Subheader
  },
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
