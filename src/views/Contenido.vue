<template>
  <div>
    <Jumbotron titulo="Contenido" :pieTitulo="pieTitulo" />
    <NavContenido />
    <div>
      <b-img
        class="contenido_image"
        fluid
        src="@/assets/svg/undraw_reviewed_docs_neeb.svg"
        alt="Responsive image"
      ></b-img>
    </div>
    <div>
      <Catalogo />
      <Paginacion />
    </div>
  </div>
</template>

<script>
import Catalogo from "@/components/Catalogo.vue";
import NavContenido from "@/components/NavContenido.vue";
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