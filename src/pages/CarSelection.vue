<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col p-0">
          <Subheader :firstMessage="null" :currentStage="2"></Subheader>
        </div>
      </div>
      <div class="row">
        <div class="col-12 container-filters">
          <p class="text-center mt-4 font-size-x-large">Elige tu carro</p>
          <div class="form-group d-flex">
            <select v-model="currentBrand" class="form-control text-blue-strong" id="carBrandInput" @change="changeFilter">
              <option value="KIA">KIA</option>
              <option value="todas">Todas</option>
            </select>
          </div>
          <div class="d-flex">
            <p class="mr-2">Categoría:</p>
            <div>
              <div class="form-check form-check-inline checkCategory">
                <div>
                  <input
                    v-model="currentCategory"
                    class="form-check-input w-100"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="Auto"
                    @change="changeFilter"
                  >
                  <label class="form-check-label w-100" for="inlineCheckbox1">Autos</label>
                </div>
              </div>
              <div class="form-check form-check-inline checkCategory">
                <div>
                  <input
                    v-model="currentCategory"
                    class="form-check-input w-100"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="SUV"
                    @change="changeFilter"
                  >
                  <label class="form-check-label w-100" for="inlineCheckbox2">Suv</label>
                </div>
              </div>
              <div class="form-check form-check-inline checkCategory">
                <div>
                  <input
                    v-model="currentCategory"
                    class="form-check-input w-100"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="Camioneta"
                    @change="changeFilter"
                  >
                  <label class="form-check-label w-100" for="inlineCheckbox2">Camionetas</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div v-if="error !== null" class="col">
          <div class="alert alert-danger" role="alert">
            <div @click="closeError" class="position-absolute cursor-pointer rigth-0 top-0">X</div>
            <p v-text="error"></p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-0">
          <hr>
        </div>
        <div v-for="car in cars" :key="car.id" class="col-6 p-2">
          <div @click="selectCar(car)">
            <card-car
              :imageCar="car.COLOR.cars[0].url"
              :minimunPrice="car.COSTO"
              :titleCar="car.CATEGORIA+' '+car.MARCA+' '+car.MODELO+' '+car.LINEA"
              class="cursor-pointer"
            ></card-car>
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
    this.changeFilter()
  },
  mounted() {
    //lo que pasa cuando se monta el HTML al browser
  },
  methods: {
    changeFilter() {
      this.cars = []
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
    selectCar(car){
      this.$store.commit('setCarSelected', car)
      this.$router.push({
        name: 'Detail'
      })
    },
    closeError() {
      this.error = null;
    }
  }
};
</script>

<style scoped>
</style>
