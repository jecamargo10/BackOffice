<template class="container-fluid">
  <div class="row">
    <div class="col">
      <div class="card">
        <div class="row">
          <div class="col">
            <h6 class="pl-2 pr-2 mt-2 textColor" v-text="titleCar"></h6>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="card-body textColor p-0 mt-0">
              <h6><strong class="card-text" v-text="'Desde: $ '+minimunPrice"></strong></h6>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <img :src="imageCar" class="card-img-top p-2" alt="Car">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modelCar from "../assets/model-car.jpg";

export default {
  name: "card-car", //nombre con el cual se usa el componente
  props: {
    imageCar: {
      default: modelCar
    },
    minimunPrice: {
      default: "36.000"
    },
    titleCar: {
      default: "RIO"
    }
  }, //propiedades requeridas(o no) para el uso del componente
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