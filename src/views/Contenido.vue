<template>
  <div>
    <Jumbotron titulo="Contenido" :pieTitulo="pieTitulo" />
    <NavContenido />
    <div>
      <Catalogo />
      <Paginacion />
    </div>
  </div>
</template>

<script>
import Catalogo from "@/components/ContenidoComp/Catalogo.vue";
import NavContenido from "@/components/ContenidoComp/NavContenido.vue";
import Paginacion from "@/components/Paginacion.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import { mapMutations, mapActions } from "vuex";
export default {
  name: "Contenido",
  data() {
    return {
      pieTitulo:
        "En este apartado podras navegar por todo el catalogo que ofrece Vodei asi como agregar nuevo contenido o modifcarlo"
    };
  },
  components: {
    Catalogo,
    NavContenido,
    Paginacion,
    Jumbotron
  },
  methods: {
    ...mapMutations(["addBreadcrumb"]),
    ...mapActions("Catalogo", ["cargarPeliculas", "cargarSeries"])
  },
  created() {
    this.addBreadcrumb([
      {
        text: "Home",
        to: { name: "Home" }
      },
      {
        text: "Contenido",
        to: { name: "Contenido" }
      }
    ]);
    this.cargarSeries();
    this.cargarPeliculas(0);
  }
};
</script>

<style lang="scss" scoped>
.contenido_image {
  position: absolute;
  height: 30rem;
  z-index: -1;
  margin-left: 10rem;
}
</style>