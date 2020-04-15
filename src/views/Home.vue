<template>
  <div>
    <section class="home" id="home">
      <JumbotronHome />
      <ResumenFunciones />
      <AccionesRapidas />
      <Caracteristicas />
    </section>
  </div>
</template>

<script>
import ResumenFunciones from "@/components/HomeComp/ResumenFunciones.vue";
import AccionesRapidas from "@/components/HomeComp/AccionesRapidas.vue";
import JumbotronHome from "@/components/HomeComp/JumbotronHome.vue";
import Caracteristicas from "@/components/HomeComp/Caracteristicas.vue";
import { mapMutations } from "vuex";
export default {
  name: "Home",
  components: {
    ResumenFunciones,
    AccionesRapidas,
    JumbotronHome,
    Caracteristicas
  },
  methods: {
    ...mapMutations(["addBreadcrumb", "cargarDatos", "setloginVisible"])
  },
  created: function() {
    let datos = JSON.parse(localStorage.getItem("PeliculasDB"));
    if (datos != null) {
      this.cargarDatos(datos);
    }
    this.addBreadcrumb([
      {
        text: "Home",
        to: { name: "Home" }
      }
    ]);
    this.setloginVisible(false);
  }
};
</script>

<style scoped>

</style>
