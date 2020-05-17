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
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Contenido",
  data() {
    return {
      pieTitulo:
        "En este apartado podras navegar por todo el catalogo que ofrece Vodei asi como agregar nuevo contenido o modifcarlo"
    };
  },
  computed: {
    ...mapGetters("Catalogo", ["peliculas"])
  },
  components: {
    Catalogo,
    NavContenido,
    Paginacion,
    Jumbotron
  },
  methods: {
    ...mapMutations(["addBreadcrumb"]),
    ...mapMutations("filtros", ["updateFiltros"]),
    ...mapMutations("Catalogo", ["updateCatalogo"]),
    ...mapActions("Catalogo", ["cargarPeliculas", "cargarSeries"])
  },
  mounted() {
    this.cargarSeries();
    this.cargarPeliculas(0).then(() => {
      this.updateFiltros(this.peliculas);
    });
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
  },
  destroyed () {
    this.updateCatalogo(null);
  },
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