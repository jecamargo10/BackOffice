<template>
  <section>
    <div class="row" style="background-color: black;">
      <div class="col pl-0 pr-0">
        <div class="contenedor">
          <h2 class="texto-arriba">Financiamos tu carro en 3 pasos y sin documentos.</h2>
          <img src="../assets/image--light.png" style="width:100vw; height:auto" alt="Fondo">
          <h5
            class="texto-abajo"
          >Es muy fácil, obtendrás un crédito en minutos para el auto que quieres.</h5>
        </div>
      </div>
    </div>
    <div class="row">
       <div class="col">
          <br>
          <br>
       </div>
    </div>
    <div class="row">
       <div class="col-1"></div>
      <div class="col">
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-left outBorder">1. Elige tu auto</li>
          <li class="list-group-item text-left outBorder">2. Solicita tu crédito</li>
          <li class="list-group-item text-left outBorder">3. Recoge tu carro en el consesionario más cercano</li>
        </ul>
      </div>
      <div class="col-1"></div>
    </div>
        <div class="row">
       <div class="col">
          <br>
       </div>
    </div>
    <div class="row">
       <div class="col">
          <button type="button" class="btn btn-outline-primary btn-lg">Empecemos</button>
       </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "LobbyPage", //nombre con el cual se usa el componente
  props: ["asasda"], //propiedades requeridas(o no) para el uso del componente
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
.contenedor {
  position: relative;
  display: inline-block;
  text-align: center;
}

.texto-arriba {
  position: absolute;
  top: 10px;
  right: 20px;
  left: 20px;
}
.texto-abajo {
  position: absolute;
  text-align: center;
  bottom: 5px;
  right: 20px;
  left: 20px;
}

.outBorder{
   border:0 !important
}
</style>
