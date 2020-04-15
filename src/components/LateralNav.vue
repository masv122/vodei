<template>
  <div>
    <b-navbar-nav
      vertical
      class="nav_lateral"
      align="center"
    >
      <b-nav-item :to="{ name: 'Contenido' }">
        <div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a :to="{ name: 'Contenido' }"
              ><i class="fa fa-map" aria-hidden="true"></i
            ></a>
          </div></div
      ></b-nav-item>
      <b-nav-item :to="{ name: 'Salas y Funciones' }"
        ><div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a :to="{ name: 'Salas y Funciones' }"
              ><i class="fa fa-film" aria-hidden="true"></i
            ></a>
          </div></div
      ></b-nav-item>
      <b-nav-item :to="{ name: 'Contenido en Emision' }"
        ><div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a :to="{ name: 'Contenido en Emision' }"
              ><i class="fa fa-star" aria-hidden="true"></i
            ></a>
          </div></div></b-nav-item
      ><b-nav-item :to="{ name: 'Tienda' }"
        ><div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a :to="{ name: 'Tienda' }"
              ><i class="fa fa-shopping-cart" aria-hidden="true"></i
            ></a>
          </div></div
      ></b-nav-item>
      <b-nav-item :to="{ name: 'Pagos' }"
        ><div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a :to="{ name: 'Pagos' }"
              ><i class="fa fa-credit-card" aria-hidden="true"></i
            ></a>
          </div></div
      ></b-nav-item>
      <b-nav-item :to="{ name: 'Mensajes' }">
        <div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a :to="{ name: 'Mensajes' }"
              ><i class="fa fa-envelope" aria-hidden="true"></i
            ></a>
          </div></div
      ></b-nav-item>
      <b-nav-item :to="{ name: 'Usuarios' }">
        <div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a href=""><i class="fa fa-users" aria-hidden="true"></i></a>
          </div></div
      ></b-nav-item>
      <b-nav-item>
        <div class="contenedor_items">
          <div class="icono-items" id="icono-items">
            <a href=""><i class="fas fa-user-friends"></i></a>
          </div></div
      ></b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {
  name: "LateralNav",
  created() {
    window.addEventListener("scroll", this.posicionScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.posicionScroll);
  },
  methods: {

  }
};
</script>

<style  scoped>
.nav_lateral {
  text-align: center;
  color: #fff;
  position: fixed;
  transition: 0.5s ease;
  top: 6%;
  font-size: 0.74rem;
}
.contenedor_items {
  padding-bottom: 0.5rem;
}
.contenedor_items a,
.nav_bar_contenido_y_filtro a {
  text-decoration: none;
  color: #ccc;
}
.contenedor_items a:hover,
.nav_bar_contenido_y_filtro a:hover {
  color: #eee;
}
.icono-items {
  font-size: 2rem;
}
</style>