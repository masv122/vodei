<template>
  <div>
    <b-container fluid class="p-2">
      <b-row>
        <b-col v-for="(contenido, index) in catalogo" v-bind:key="index" cols="3">
          <ContenidoIndividual :titulo='contenido.Titulo'/>
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
    ...mapGetters('Catalogo', ['catalogo'])
  },
  components: { 
    ContenidoIndividual
  }
};
</script>

<style lang="scss" scoped>
</style>