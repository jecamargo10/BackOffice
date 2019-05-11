
<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <Subheader
            :currentStage="2"
            :firstMessage="null"
          ></Subheader>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row mt-4">
        <div class="col-1"></div>
        <div class="col p-0 text-left">
          <h6>
            <strong v-text="car.CATEGORIA+' '+car.MARCA+' '+car.MODELO+' '+car.LINEA"></strong>
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
          <!--<button type="button" class="btn btn-outline-primary rounded-circle circular p-2 m-1"></button>
          <button type="button" class="btn btn-outline-secondary rounded-circle circular p-2 m-1"></button>
          <button type="button" class="btn btn-outline-danger rounded-circle circular p-2 m-1"></button>
          <button type="button" class="btn btn-outline-success rounded-circle circular p-2 m-1"></button>
          <button type="button" class="btn btn-outline-dark rounded-circle circular p-2 m-1"></button>-->
          <button 
            v-for="(color, colorIndex) in car.COLOR.cars" :key="'color'+colorIndex" 
            @click="changeCarImage(color.url)"
            type="button" 
            :style="'border-color: black'+'; background:'+color.color" 
            class="btn rounded-circle circular p-2 m-1">
          </button>
        </div>
        <div class="col"></div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-1"></div>
        <div class="col">
          <img class="card-img-top" :src="urlCar" alt="carro">
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
                  <i class="material-icons botBlue">add</i>
                </div>
              </div>
            </div>
            <b-collapse id="collapse-a" class="mt-2">
              <b-card>Marca: <span v-text="car.MARCA"></span></b-card>
            </b-collapse>
            <b-collapse id="collapse-b" class="mt-2">
              <b-card>Tipo: <span v-text="car.TIPO"></span></b-card>
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
              <h2><strong>US $<span v-text="car.COSTO"></span></strong></h2>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">Cuota de entrada: US $<span v-text="car.COSTO * 0.25"></span></div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <h6 class="text-center textBlue">Cambiar cuota de entrada</h6>
            </div>
          </div>
          <div class="row mt-2">
            <div class="col">
              <h6 class="text-center textBlue">Ver condiciones del crédito</h6>
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
            @click="createCredit"
            type="button"
            class="btn btn-outline botBlue btn-lg"
          >Aplicar mi crédito</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from "../components/Subheader.vue";
import providerServices from "../providerServices/providerServices.js"

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
      ],
      car: undefined,
      urlCar: ''
    };
  },
  created() {
    if (
      this.$store.state.monthlyPayment === undefined ||
      this.$store.state.monthlyPayment === null
    ) {
      return this.$router.push({
        path: "/registry"
      });
    }
    this.car =  this.$store.state.carSelected
    if (this.car === undefined) {
      return this.$router.push({
        path: "/carselection"
      });
    }
    this.urlCar = this.car.COLOR.cars[0].url
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    changeCarImage(url){
      this.urlCar = url
    },
    createCredit(){
      let _self = this
      providerServices.crearCredito(this.$store.state.userId, this.$store.state.amount, this.$store.state.monthlyPaymentQuantity, this.$store.state.monthlyPayment, 27, this.car.id, function(err, res){
        _self.$store.commit('setCredit', res.data.id)
        _self.$router.push({ path: '/credit'})
      })
    }
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
