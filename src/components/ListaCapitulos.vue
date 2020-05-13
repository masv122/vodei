<template>
  <div>
    <h6 class="text-center">Capitulos:</h6>
    <b-list-group>
      <b-list-group-item
        class="d-flex item"
        v-for="(capitulo, index) in capitulos"
        :key="index"
      >
        <div class="ml-4">
          <div>
            <h5>{{ capitulo.titulo }}</h5>
          </div>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "ListaCapitulos",
  props: {
    capitulos: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      state: "not_accepted"
    };
  }
  // methods: {
  //   selContenido(index) {
  //       this.modifyTemporada(this.capitulos[index])
  //   },
  //   ...mapActions('Catalogo', ['modifyTemporada'])
  // }
};
</script>

<style lang="scss" scoped>
.image {
  height: 5rem;
}
.check {
  padding-top: 1.7rem;
}
</style>