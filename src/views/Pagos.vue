<template>
  <div>
    <Jumbotron />
    <NavPagos />
    <TablaPagos v-if="vistaPagos" />
    <ListaPagos v-else />
    <Paginacion />
  </div>
</template>

<script>
import NavPagos from "@/components/NavPagos.vue";
import Jumbotron from "@/components/Jumbotron.vue";
import TablaPagos from "@/components/TablaPagos.vue";
import ListaPagos from "@/components/ListaPagos.vue";
import Paginacion from "@/components/Paginacion.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Pagos",
  components: {
    NavPagos,
    Jumbotron,
    TablaPagos,
    ListaPagos,
    Paginacion
  },
  computed: {
    ...mapState(["vistaPagos"])
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
        text: "Pagos",
        to: { name: "Pagos" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>