<template>
  <div>
    <b-list-group>
      <b-list-group-item
        class="d-flex item"
        v-for="(contenido, index) in contenidos"
        :key="index"
      >
        <div>
          <b-img
            :src="`http://localhost:3000/uploads/portadas/${contenido.portada}`"
            fluid
            alt="portada"
            class="image"
          ></b-img>
        </div>
        <div class="ml-4">
          <div>
            <h5>{{ contenido.Titulo }}</h5>
          </div>
          <div>
            <h6>{{ contenido.nTemp }}</h6>
          </div>
        </div>
        <div class="check ml-auto">
          <b-button variant="primary" @click="selContenido(index)">
            Seleccionar
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ListaContenido",
  props: {
    contenidos: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      state: "not_accepted"
    }
  },
  methods: {
    selContenido(index) {
        this.updateContenido(this.contenidos[index])
    },
    ...mapActions('Catalogo', ['updateContenido'])
  }
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