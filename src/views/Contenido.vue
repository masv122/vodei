<template>
  <div>
    <section>
      <div>
        <Jumbotron titulo="Contenido" :pieTitulo="pieTitulo"/>
        <NavContenido />
        <Catalogo />
        <Paginacion />
      </div>
    </section>
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
      pieTitulo: "En este apartado podras navegar por todo el catalogo que ofrece Vodei asi como agregar nuevo contenido o modifcarlo"
    }
  },
  components: {
    Catalogo,
    NavContenido,
    Paginacion,
    Jumbotron
  },
  methods: {
    ...mapMutations(["addBreadcrumb"]),
    ...mapActions("Catalogo", ["cargarPeliculas"]),
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
    this.cargarPeliculas();
  }
};
</script>

<style lang="scss" scoped>
</style>