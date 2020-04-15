<template>
  <div>
    <b-container fluid class="p-2">
      <b-row>
        <b-col v-for="(pelicula, index) in peliculas" v-bind:key="index" cols="3">
          <ContenidoIndividual :titulo='pelicula.titulo' :portada='pelicula.portada'/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ContenidoIndividual from "@/components/ContenidoIndividual.vue";
import { mapState } from "vuex";

export default {
  name: "Catalogo",
  computed: {
    ...mapState(["peliculas"])
  },
  components: {
    ContenidoIndividual
  }
};
</script>

<style lang="scss" scoped>
</style>