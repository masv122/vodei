<template>
  <div>
    <div class="header-oferta-serie"><i class="fas fa-tv"></i></div>
    <div>
      <h4>Combo casual</h4>
    </div>
    <div class="precio_oferta-serie">
      <span class="por_solo">Por solo</span>1<span class="dolar">$</span>
    </div>
        <b-nav class="justify-content-center lista_combo" vertical>
      <b-nav-item disabled class="objetos_combo"> 2 capitulos </b-nav-item>
      <b-nav-item disabled class="objetos_combo"> Cotufa pequeña </b-nav-item>
      <b-nav-item disabled class="objetos_combo"> 1 Refresco pequeño </b-nav-item>
      <b-nav-item disabled class="objetos_combo">  </b-nav-item>
    </b-nav>
    <div class="caja_boton_comprar">
              <b-button
        variant="outline-warning"
        class="boton_comprar_serie"
      >
        Modificar
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfertaSerie"
};
</script>

<style lang="scss" scoped>
h4{
    color: #fff
}
.header-oferta-serie {
  color: #ffc107;
  padding-top: 20px;
  font-size: 3em;
  padding-bottom: 10px;
}
.precio_oferta-serie {
  color: #ffc107;
  font-size: 50px;
  font-weight: bold;
}
.dolar {
  font-size: 20px;
  vertical-align: text-bottom;
}
.por_solo {
  font-size: 20px;
  color: #999;
  vertical-align: super;
}
.lista_combo {
  padding: 20px 0;
  color: #81867d;
  padding-bottom: 50px;
}
.objetos_combo {
  padding: 0.25em;
  font-size: 20px;
}
.caja_boton_comprar {
  margin-bottom: 25px;
}
.boton_comprar_serie {
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 70px;
  letter-spacing: 1px;
  width: 90%;
}

</style>