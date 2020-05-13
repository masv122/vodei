<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(temporada, index) in temporadas"
        :key="index"
      >
        <label>{{ temporada.titulo }}</label>
        <b-button
          v-if="seleccionable"
          variant="primary"
          class="float-right"
          @click="selContenido(index)"
        >
          Seleccionar
        </b-button>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  name: "ListaContenido",
  props: {
    temporadas: {
      type: Array,
      default: null
    },
    seleccionable: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      state: "not_accepted"
    };
  },
  methods: {
    selContenido(index) {
      this.updateTemporada(this.temporadas[index]);
      this.updateCapitulos(this.temporadas[index].id_temporada);
    },
    ...mapMutations("Catalogo", ["updateTemporada"]),
    ...mapActions("Catalogo", ["updateCapitulos"])
  }
};
</script>

<style lang="scss" scoped>

</style>