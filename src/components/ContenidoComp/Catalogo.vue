<template>
  <div>
    <b-container
      fluid
      class="p-2"
    >
      <LoadingCatalogo v-if="cargandoCatalogo" />
      <b-row v-else>
        <b-col
          v-for="(contenido, index) in catalogo"
          :key="index"
          cols="3"
        >
          <ContenidoIndividual
            :titulo="contenido.Titulo"
            :tContenido="tContenido"
            :portada="contenido.portada"
            :id="contenido.id"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import ContenidoIndividual from "@/components/ContenidoIndividual.vue";
import LoadingCatalogo from "@/components/loading/LoadingCatalogo.vue";
import { mapGetters } from "vuex";

export default {
  name: "Catalogo",
  computed: {
    ...mapGetters("Catalogo", ["catalogo", "tContenido"]),
    ...mapGetters(["cargandoCatalogo"])
  },
  components: {
    ContenidoIndividual,
    LoadingCatalogo
  }
};
</script>

<style lang="scss" scoped>
</style>