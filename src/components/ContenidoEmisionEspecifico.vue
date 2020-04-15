<template>
  <div>
    <h4 class="display-4 my-4 bg-light text-center">
      Estrenos
      <b-button class="" variant="warning" href="">
        <i class="fas fa-edit    "></i>
      </b-button>
    </h4>
    <b-container fluid class="p-2">
      <b-row>
        <b-col cols-sm="6" cols-md="3">
          <ContenidoIndividual titulo="asdas" portada="poster.png" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ContenidoIndividual from "@/components/ContenidoIndividual.vue";

export default {
  name: "ContenidoEmisionEspecifico",
  components: {
    ContenidoIndividual
  }
};
</script>

<style lang="scss" scoped>
</style>