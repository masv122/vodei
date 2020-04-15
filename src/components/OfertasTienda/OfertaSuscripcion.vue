<template>
  <div class="plan_suscripcion">
    <div class="header-suscripcion">
      <i class="fa fa-play-circle" aria-hidden="true"></i>
    </div>
    <div>
      <h4>Plan suscripcion</h4>
    </div>
    <div class="precio-suscripcion">
      5<span class="dolar">$</span><span class="mensuales">/mensuales</span>
    </div>
    <b-nav class="justify-content-center lista_servicios" vertical>
      <b-nav-item disabled class="objetos_combo"> 1 Pantalla </b-nav-item>
      <b-nav-item disabled class="objetos_combo"> Calidad 720p </b-nav-item>
    </b-nav>
    <div class="caja_boton_comprar">
      <b-button variant="outline-info" class="boton_comprar_suscripcion" href="">
        Modificar
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfertaSuscripcion"
};
</script>

<style lang="scss" scoped>
h4{
    color: #fff;
}
.header-suscripcion {
  color: #17a2b8;
  padding-top: 20px;
  font-size: 3em;
  padding-bottom: 10px;
}
.mensuales {
  font-size: 20px;
  color: #999;
  vertical-align: super;
}
.lista_servicios {
  padding: 20px 0;
  color: #17a2b8;
  padding-bottom: 50px;
}

.precio-suscripcion {
  color: #17a2b8;
  font-size: 50px;
  font-weight: bold;
}
.grin-stars {
  color: #17a2b8;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
}
.caja_boton_comprar {
  margin-bottom: 25px;
}
.boton_comprar_suscripcion {
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 70px;
  letter-spacing: 1px;
  width: 90%;
}

</style>