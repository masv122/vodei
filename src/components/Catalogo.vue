<template>
  <div>
    <b-container fluid class="p-2">
      <b-row>
        <b-col v-for="(pelicula, index) in peliculas" v-bind:key="index" cols="3">
          <ContenidoIndividual :titulo='pelicula.Titulo'/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ContenidoIndividual from "@/components/ContenidoIndividual.vue";
import { mapGetters } from "vuex";

export default {
  name: "Catalogo",
  computed: {
    ...mapGetters('Catalogo', ['peliculas'])
  },
  components: { 
    ContenidoIndividual
  }
};
</script>

<style lang="scss" scoped>
</style>