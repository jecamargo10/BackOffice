<template>
    <section class="container-fluid">
        <div class="row border-bottom">
            <div class="col-12 py-2 d-flex">
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
        <div class="row border-bottom">
            <div class="col-12 py-2">
                <div class="text-left">
                    <p class="font-weight-bold">Credito #5655</p>
                    <p>Monto</p>
                    <p>Info nro cuotas, monto mensual</p>
                </div>
            </div>
        </div>
        <div class="row border-bottom">
            <div class="col-12 py-2">
                <div class="text-left">
                    <p class="font-size-larger pr-5">Completa tu compra y pasa a recoger tu carro</p>
                    <div class="d-flex">
                        <img style="width: 1em; height: 1em;" src="https://image.flaticon.com/icons/svg/17/17177.svg" alt="">
                        <div>
                            <p>Direccion</p>
                            <p class="text-primary">Ver mapa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-bottom">
            <div class="col-12 py-2 bg-secondary-ligth">
                <div class="text-left">
                    <div class="bg-secondary mb-1" style="width: 2em; height: 2em; border-radius: 50%">

                    </div>
                    <p class="font-size-larger font-weight-bold pr-5">Estado: </p>
                    <p>Mensage</p>
                    <p>Cuota de entrada</p>
                </div>
                <button class="btn btn-outline-primary">Reserva tu carro</button>
            </div>
        </div>
        <div class="row">
            <div class="col p-0">
                <div>
                    <b-card class="w-100" v-b-toggle.collapse-1>
                        Mas info
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
</style>
