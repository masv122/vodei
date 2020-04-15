<template>
  <div>
      <Jumbotron />
    <NavUsuarios />
      <b-row class="pt-2">
        <b-col cols="3">
          <Usuario />
        </b-col>
      </b-row>
  </div>
</template>

<script>
import Jumbotron from '@/components/Jumbotron.vue';
import NavUsuarios from "@/components/NavUsuarios.vue";
import { mapMutations } from "vuex";
import Usuario from "@/components/Usuario.vue";

export default {
  name: "Usuarios",
  components: {
    NavUsuarios,
    Usuario,
    Jumbotron
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
        text: "Usuarios",
        to: { name: "Usuarios" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>