
<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-7 col-md-4 col-lg-4 col-xl-3">
        <div class="container-fluid">
          <div class="row">
            <div class="col p-0">
              <Subheader :currentStage="2" :firstMessage="null"></Subheader>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-9 col-lg-9 col-xl-7">
        <div class="container-fluid">
          <div class="row mt-4">
            <div class="col-1"></div>
            <div class="col p-0 text-center">
              <h5 class="textColor">
                <strong v-text="car.CATEGORIA+' '+car.MARCA+' '+car.MODELO+' '+car.LINEA"></strong>
              </h5>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row mt-2">
            <div class="col-1"></div>
            <div class="col p-0">
              <div>
                <b-form-select class="textColor" v-model="selected" :options="options"></b-form-select>
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
                v-for="(color, colorIndex) in car.COLOR.cars"
                :key="'color'+colorIndex"
                @click="changeCarImage(color.url)"
                type="button"
                :style="'border-color: black'+'; background:'+color.color"
                class="btn rounded-circle circular p-2 m-1"
              ></button>
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
          <div class="row pt-4 pb-4 border-top border-bot backLight">
            <div class="col-1"></div>
            <div class="col">
              <div class="row mt-4">
                <div class="col-1"></div>
                <div class="col-3 p-0 m-2">
                  <img src="../assets/car.png" alt width="80%">
                </div>
                <div class="col-4 p-0 m-0 borderBlue border-bottom">
                  <h2 class="text-left textColor">
                    <strong>
                      $
                      <span v-text="car.COSTO"></span>
                    </strong>
                  </h2>
                </div>
                <div class="col-1"></div>
              </div>
              <div class="row mt-3">
                <div class="col textColor">
                  Cuota de entrada: US $
                  <span v-text="car.COSTO * 0.25"></span>
                </div>
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
          <div class="row border broder-secondary">
            <div class="col-1"></div>
            <div class="col">
              <div>
                <div v-b-toggle.collapse-a.collapse-b>
                  <div class="row mt-2 d-flex align-items-center">
                    <div class="col pr-0">
                      <h4 class="textColor">Detalles del carro</h4>
                    </div>
                    <div class="col-2 pl-0">
                      <i class="material-icons textColor border borderRe rounded-circle">add</i>
                    </div>
                  </div>
                </div>
                <b-collapse id="collapse-a" class="mt-2">
                  <b-card class="textColor">
                    Marca:
                    <span v-text="car.MARCA"></span>
                  </b-card>
                </b-collapse>
                <b-collapse id="collapse-b" class="mt-2">
                  <b-card class="textColor">
                    Tipo:
                    <span v-text="car.TIPO"></span>
                  </b-card>
                </b-collapse>
              </div>
            </div>
            <div class="col-1"></div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row mt-4 mb-5">
            <div class="col-2"></div>
            <div class="col p-0">
              <button
                @click="createCredit"
                type="button"
                class="btn btn-block botBlue rounded-pill"
              >Aplicar mi crédito</button>
            </div>
            <div class="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Subheader from "../components/Subheader.vue";
import providerServices from "../providerServices/providerServices.js";

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
      urlCar: ""
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
    this.car = this.$store.state.carSelected;
    if (this.car === undefined) {
      return this.$router.push({
        path: "/carselection"
      });
    }
    this.urlCar = this.car.COLOR.cars[0].url;
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    changeCarImage(url) {
      this.urlCar = url;
    },
    createCredit() {
      let _self = this;
      providerServices.crearCredito(
        this.$store.state.userId,
        this.$store.state.amount,
        this.$store.state.monthlyPaymentQuantity,
        this.$store.state.monthlyPayment,
        27,
        this.car.id,
        function(err, res) {
          _self.$store.commit("setCredit", res.data.id);
          _self.$router.push({ path: "/credit" });
        }
      );
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
.backLight {
  background-color: #f2fbff;
}
.textLight {
  color: #f2fbff;
}

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

.botBlueBord {
  background-color: white;
  color: #e91c72;
  border-color: #e91c72;
}
.botBlueBord:hover {
  background-color: #e91c72;
  color: white;
  border-color: white;
}
.botBlueBord:active {
  background-color: #e91c72;
  color: white;
  border-color: white;
}

.backBlue {
  background-color: #e91c72;
}
.textBlue {
  color: #e91c72;
}

.borderBlue {
  border-color: #e91c72 !important;
  border-bottom-width: 4.5px !important;
  border-radius: 5px !important;
}

.textColor {
  color: #004b8c;
}
.sombra {
  -webkit-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0.22);
  box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0.22);
}
.sombra:active {
  -webkit-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0);
  -moz-box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0);
  box-shadow: 3px 4px 12px 0px rgba(0, 0, 0, 0);
}
.cardB {
  border-radius: 10px;
}
.cardB:active {
  border-radius: 10px;
  width: 99%;
}
.cardB:hover {
  border-radius: 10px;
  width: 99%;
}

.backLight {
  background-color: #f2fbff;
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

.borderR {
  border-radius: 0;
  border-color: #004b8c !important;
  border-bottom-width: 1px !important;
}
.borderRe {
  border-radius: 0;
  border-color: #004b8c !important;
  border-width: 2px !important;
}
</style>
