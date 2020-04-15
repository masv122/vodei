<template>
  <div>
    <NavMensajes />
    <ListaMensajes />
    <Paginacion />
  </div>
</template>

<script>
import NavMensajes from "@/components/NavMensajes.vue";
import ListaMensajes from "@/components/ListaMensajes.vue";
import Paginacion from "@/components/Paginacion.vue";
import { mapMutations } from "vuex";

export default {
  name: "Mensajes",
  components: {
    NavMensajes,
    ListaMensajes,
    Paginacion
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
        text: "Mensajes", 
        to: { name: "Mensajes" } 
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>