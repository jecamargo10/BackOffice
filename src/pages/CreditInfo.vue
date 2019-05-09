<template>
    <section class="container-fluid">
        <div class="row">
            <div class="col p-0">
                <Subheader :firstMessage="null" :secondMessage="null" :currentStage="1"></Subheader>
            </div>
        </div>
        <div class="row">
            <div class="col p-0">
                <p class="font-size-x-large"></p>
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
