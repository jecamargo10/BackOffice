<template>
    <section class="container-fluid">
        <div class="row backBlue pb-2 pt-2">
            <div class="col">
                <h3 class="text-light">Resumen del Crédito</h3>
            </div>
        </div>
        <div class="row border-bottom ml-2 mr-2">
            <div class="col-12 py-2 d-flex align-items-center">
                <div class="w-50 text-left">
                    <p class="font-weight-bold">Marca</p>
                    <p>Tipo carro</p>
                    <p>Precio</p>
                </div>
                <div class="w-50">
                    <div>
                        <img class="w-100 h-auto" :src="imgCar" alt="Car">
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-bottom mr-2 ml-2">
            <div class="col-12 py-2">
                <div class="text-left">
                    <p class="font-weight-bold">Credito #5655</p>
                    <p>Monto</p>
                    <p>Info nro cuotas, monto mensual</p>
                </div>
            </div>
        </div>
        <div class="row border-bottom ml-2 mr-2">
            <div class="col-12 py-2">
                <div class="text-left">
                    <p class="font-weight-bold pr-4">Completa tu compra y pasa a recoger tu carro</p>
                    <div class="d-flex">
                        <img style="width: 1em; height: 1em;" src="https://image.flaticon.com/icons/svg/17/17177.svg" alt="">
                        <div class="ml-2">
                            <p>Direccion</p>
                            <p class="textBlue">Ver mapa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-bottom m-2">
            <div class="col-12 py-2 border borderBlue">
                <div class="text-left">
                    <div class="backPink mb-1" style="width: 1em; height: 1em; border-radius: 50%">

                    </div>
                    <p class="font-size-larger font-weight-bold pr-5">Estado: </p>
                    <p>Mensage</p>
                    <p>Cuota de entrada</p>
                </div>
            </div>
        </div>
        <div class="row m-4">
            <div class="col">
                <button class="btn btn-outline botBlue">Reserva tu carro</button>
            </div>
        </div>
        <div class="row">
            <div class="col p-0">
                <div>
                    <b-card class="w-100" v-b-toggle.collapse-1>
                        Mas información
                    </b-card>
                    <b-collapse id="collapse-1" class="mt-2">
                        <div>
                            Un contenido
                        </div>
                    </b-collapse>
                    </div>
            </div>
        </div>
    </section>
</template>

<script>
import imgCar from "../assets/model-car.jpg"
export default {
    name: 'credit-complete', //nombre con el cual se usa el componente
    props: [], //propiedades requeridas(o no) para el uso del componente
    data () {//data reactiva del componente
        return {
            imgCar: imgCar
        }
    },
    created(){//lo que pasa cuando se crea el componente  aca se ponen la consulta a servicios

    },
    mounted (){//lo que pasa cuando se monta el HTML al browser

    },
    methods: {//metodos

    }
}
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
