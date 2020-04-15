<template>
  <div>
    <div class="header-oferta"><i class="fas fa-ticket-alt    "></i></div>
    <div>
      <h4>Combo invididual</h4>
    </div>
    <div class="precio_oferta">
      <span class="por_solo">Por solo</span>3<span class="dolar">$</span>
    </div>
    <b-nav class="justify-content-center lista_combo" vertical>
      <b-nav-item disabled class="objetos_combo"> 1 Entrada </b-nav-item>
      <b-nav-item disabled class="objetos_combo"> Cotufa Mediana </b-nav-item>
      <b-nav-item disabled class="objetos_combo"> 1 Refresco Mediano </b-nav-item>
      <b-nav-item disabled class="objetos_combo"> 1 snack </b-nav-item>
    </b-nav>
    <div class="caja_boton_comprar">
      <b-button variant="outline-success" class="boton_comprar" href="">
        Modificar
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Oferta"
};
</script>

<style lang="scss" scoped>
h4{
  color: #fff;
}
.header-oferta {
  color: #85c34a;
  padding-top: 20px;
  font-size: 3em;
  padding-bottom: 10px;
}
.precio_oferta {
  color: #85c34a;
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
.boton_comprar {
  text-transform: uppercase;
  font-weight: bold;
  padding: 10px 70px;
  letter-spacing: 1px;
  width: 90%;
}
</style>