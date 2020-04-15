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
    ...mapMutations(["addBreadcrumb"])
  },
  created() {
    this.addBreadcrumb([
      {
          text: 'Home',
          to : { name : "Home"}
      },
      { 
        text: "Contenido", 
        to: { name: "Contenido" } 
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>