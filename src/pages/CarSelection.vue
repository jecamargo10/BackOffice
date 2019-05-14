<template>
  <section class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 col-sm-7 col-md-4 col-lg-4 col-xl-3">
        <div class="container-fluid">
          <div class="row">
            <div class="col p-0">
              <Subheader :firstMessage="null" :currentStage="2"></Subheader>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-10 col-sm-10 col-md-9 col-lg-9 col-xl-7">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 container-filters p-0">
              <p class="text-center mt-4 font-size-x-large textColor">Elige tu carro</p>
              <div class="form-group d-flex">
                <select
                  v-model="currentBrand"
                  class="form-control text-blue-strong textColor"
                  id="carBrandInput"
                  @change="changeFilter"
                >
                  <option value="KIA">KIA</option>
                  <option value="todas">Todas</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="d-flex mx-auto">
              <div>
                <div class="form-check form-check-inline checkCategory">
                  <div>
                    <img src="../assets/auto.png" for="inlineCheckbox2" alt>
                    <input
                      v-model="currentCategory"
                      class="form-check-input w-100"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="Auto"
                      @change="changeFilter"
                    >
                  </div>
                </div>
                <div class="form-check form-check-inline checkCategory">
                  <div>
                    <img src="../assets/suv.png" for="inlineCheckbox2" alt>
                    <input
                      v-model="currentCategory"
                      class="form-check-input w-100"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="SUV"
                      @change="changeFilter"
                    >
                  </div>
                </div>
                <div class="form-check form-check-inline checkCategory">
                  <div>
                    <img src="../assets/camioneta.png" for="inlineCheckbox2" alt>
                    <input
                      v-model="currentCategory"
                      class="form-check-input w-100"
                      type="checkbox"
                      id="inlineCheckbox2"
                      value="Camioneta"
                      @change="changeFilter"
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="form-row">
            <div v-if="error !== null" class="col">
              <div class="alert alert-danger" role="alert">
                <div @click="closeError" class="position-absolute cursor-pointer rigth-0 top-0">X</div>
                <p v-text="error"></p>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 p-0">
              <hr>
            </div>
            <div v-for="car in cars" :key="car.id" class="col-6 p-2">
              <div @click="selectCar(car)">
                <card-car
                  :imageCar="car.COLOR.cars[0].url"
                  :minimunPrice="car.COSTO"
                  :titleCar="car.CATEGORIA+' '+car.MARCA + '   ' + car.MODELO+' '+car.LINEA"
                  class="cursor-pointer"
                ></card-car>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardCar from "../components/CardCar.vue";
import Subheader from "../components/Subheader.vue";
import providerServices from "../providerServices/providerServices";
export default {
  name: "login-page", //nombre con el cual se usa el componente
  components: {
    CardCar,
    Subheader
  },
  props: [], //propiedades requeridas(o no) para el uso del componente
  data() {
    //data reactiva del componente
    return {
      currentBrand: "todas",
      currentCategory: ["Auto", "SUV", "Camioneta"],
      cars: [],
      error: null
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
    this.changeFilter();
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    changeFilter() {
      this.cars = [];
      let _self = this;
      this.closeError();
      providerServices.filterVehicles(
        this.$store.state.amount,
        this.currentBrand,
        this.currentCategory,
        function(err, res) {
          if (err) {
            _self.error = res;
            return;
          }
          if (parseInt(res.data.data) === -1) {
            _self.error = res.data.message;
            return;
          }
          _self.cars = res.data.data.map(function(item) {
            let newItem = item;
            let aux = item.COLOR;
            while (aux.indexOf("'") > 0) {
              aux = aux.replace("'", '"');
            }
            newItem.COLOR = JSON.parse(aux);
            return newItem;
          });
        }
      );
    },
    selectCar(car) {
      this.$store.commit("setCarSelected", car);
      this.$router.push({
        name: "Detail"
      });
    },
    closeError() {
      this.error = null;
    }
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
</style>
