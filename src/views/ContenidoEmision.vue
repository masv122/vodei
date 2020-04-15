<template>
  <div>
    <Jumbotron />
    <ContenidoEmisionEspecifico />
    <ContenidoEmisionEspecifico />
    <ContenidoEmisionEspecifico />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import ContenidoEmisionEspecifico from "@/components/ContenidoEmisionEspecifico.vue";
import { mapMutations } from "vuex";

export default {
  name: "ContenidoEmision",
  components: {
    Jumbotron,
    ContenidoEmisionEspecifico
  },
  methods: {
    ...mapMutations(["addBreadcrumb"])
  },
  created() {
    this.addBreadcrumb([
      {
        text: "Home",
        to: { name: "Home" }
      },
      {
        text: "Contenido en Emision",
        to: { name: "Contenido en Emision" }
      }
    ]);
  }
};
</script>

<style  scoped>
</style>