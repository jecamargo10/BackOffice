<template>
    <section class="container-fluid">
        <div class="row">
            <div class="col p-0">
                <Subheader :firstMessage="null" :secondMessage="null" :currentStage="3"></Subheader>
            </div>
        </div>
        <div class="row">
            <div class="col p-0 pt-3 bg-secondary-ligth">
                <p class="font-size-x-large">Tu crédito ha sido aplicado con éxito</p>
                <div class="bg-secondary w-50 mx-auto">
                    <p class="text-success p-2">
                        Credito <br>
                        # 123457
                    </p>
                </div>
                <p>Presenta este código al concesionario.</p>
                <p><small>Valido hasta el 31/08/2019</small></p>
            </div>
        </div>
        <div class="row">
            <div class="col mt-3">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            <p>Tu carro esta disponible en:</p>
                        </div>
                    </div>
                    <div v-for="i in 3" :key="i" class="row">
                        <div class="col d-flex align-items-center">
                            <input v-model="currentConcessionaire" type="radio" :value="'concesionario'+i" :name="'concesionario'+i" :id="'concesionario'+i">
                            <label :for="'concesionario'+i" class="ml-4">
                                <h6 class="font-weight-bold">Nombre Concesionario {{ i }}</h6>
                                <p>Direccion consecinario</p>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button @click="completeCredit" class="btn btn-primary">Completar</button>
            </div>
        </div>
    </section>
</template>

<script>
import Subheader from '../components/Subheader.vue'

export default {
    name: 'credit-info', //nombre con el cual se usa el componente
    props: {

    }, //propiedades requeridas(o no) para el uso del componente
    components:{
        Subheader
    },
    data () {//data reactiva del componente
        return {
            currentConcessionaire: ''
        }
    },
    created(){//lo que pasa cuando se crea el componente  aca se ponen la consulta a servicios

    },
    mounted (){//lo que pasa cuando se monta el HTML al browser

    },
    methods: {//metodos
        completeCredit(){
            this.$router.push({
                path: 'creditComplete'
            })
        }
    }
}
</script>

<style scoped>

</style>
