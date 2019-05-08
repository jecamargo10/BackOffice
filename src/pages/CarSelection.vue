<template>
  <section>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 container-filters">
          <p class="text-center mt-4 font-size-x-large">Elige tu carro</p>
          <div class="form-group d-flex">
            <label class="mr-2" for="carBrandInput">Marca:</label>
            <select class="form-control" id="carBrandInput">
              <option>KIA</option>
              <option>Alfa Romeo</option>
              <option>Alpine</option>
              <option>Audi</option>
              <option>BMW</option>
            </select>
          </div>
          <div class="d-flex">
            <p class="mr-2">Categoría:</p>
            <div>
                <div class="form-check form-check-inline checkCategory">
                    <div>
                        <input class="form-check-input w-100" type="checkbox" id="inlineCheckbox1" value="option1">
                        <label class="form-check-label w-100" for="inlineCheckbox1">Autos</label>
                    </div>
                    
                </div>
                <div class="form-check form-check-inline checkCategory">
                    <div>
                        <input class="form-check-input w-100" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label w-100" for="inlineCheckbox2">Suv</label>
                    </div>
                </div>
                <div class="form-check form-check-inline checkCategory">
                    <div>
                        <input class="form-check-input w-100" type="checkbox" id="inlineCheckbox2" value="option2">
                        <label class="form-check-label w-100" for="inlineCheckbox2">Camionetas</label>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 p-0">
          <hr>
        </div>
        <div v-for="i in 6" :key="i" class="col-6 p-2">
          <card-car class="cursor-pointer"></card-car>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardCar from "../components/CardCar.vue";

export default {
  name: "login-page", //nombre con el cual se usa el componente
  components: {
    CardCar
  },
  props: [], //propiedades requeridas(o no) para el uso del componente
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
#carBrandInput{
    max-width: 10em;
}
</style>
