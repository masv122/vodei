<template>
  <div>
    <Jumbotron />
    <b-nav tabs class="mt-3 bg-light" bg-variant="light" align="center">
      <b-nav-item @click="setTabSalasFunciones(true)">Salas</b-nav-item>
      <b-nav-item @click="setTabSalasFunciones(false)">Funciones</b-nav-item>
    </b-nav>
    <Salas v-if="tabSalasFunciones" />
    <Funciones v-if="!tabSalasFunciones" />
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import Salas from "@/components/Salas.vue";
import Funciones from "@/components/Funciones.vue";
import { mapMutations, mapState } from "vuex";

export default {
  components: {
    Jumbotron,
    Salas,
    Funciones
  },
  data() {
    return {
      tab: true
    };
  },
  computed: {
    ...mapState(["tabSalasFunciones"])
  },
  methods: {
    ...mapMutations(["addBreadcrumb", "setTabSalasFunciones"])
  },
  created() {
    this.addBreadcrumb([
      {
        text: "Home",
        to: { name: "Home" }
      },
      {
        text: "Salas y Funciones",
        to: { name: "Salas y Funciones" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>