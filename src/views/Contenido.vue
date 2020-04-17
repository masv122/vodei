<template>
  <div>
    <section>
      <div>
        <Jumbotron />
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
import { mapMutations } from "vuex";
export default {
  name: "Contenido",
  components: {
    Catalogo,
    NavContenido,
    Paginacion,
    Jumbotron
  },
  methods: {
    ...mapMutations(["addBreadcrumb"]),
    ...mapMutations("Catalogo", ["setPeliculas"]),
    cargarPeliculas() {
      this.axios
        .get("/pelicula")
        .then(res => {
          this.setPeliculas(res.data.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
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