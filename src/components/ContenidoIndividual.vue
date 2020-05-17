<template>
  <div>
    <b-card
      :title="titulo"
      header-tag="header"
      footer-tag="footer"
      align="center"
      :img-src="`http://localhost:3000/uploads/portadas/${portada}`"
      style="width: 100%;"
      class="shadow"
    >
      <b-card-text v-if="tContenido === 1"
        >Numero de temporadas: {{ nTemp }}</b-card-text
      >
      <template v-slot:footer v-if="detalles">
        <b-overlay
          :show="cargando"
          rounded
          opacity="0.6"
          spinner-small=""
          spinner-variant="primary"
          class="d-inline-blocks"
        >
          <b-button @click="cargarContenido()" variant="primary"
            >Detalles
          </b-button>
        </b-overlay>
      </template>
    </b-card>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "ContenidoIndividual",
  props: {
    titulo: {
      type: String,
      default: ""
    },
    portada: {
      type: String,
      default: ""
    },
    nTemp: {
      type: Number,
      default: 0
    },
    detalles: {
      type: Boolean,
      default: true
    },
    tContenido: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: ""
    }
  },
  methods: {
    ...mapActions("Catalogo", ["updatePelicula", "updateSerie"]),
    ...mapMutations("Catalogo", ["updateContenido"]),
    async cargarContenido() {
      if (this.id.includes("mov")) {
        const pelicula = await this.updatePelicula(this.id);
        this.updateContenido(pelicula);
        this.$router.push(`/contenido/detalles-contenido/${this.id}`);
      } else {
        const serie = await this.updateSerie(this.id);
        this.updateContenido(serie);
        this.$router.push(`/contenido/detalles-contenido/${this.id}`);
      }
    }
  },
  computed: {
    ...mapGetters("Catalogo", ["pelicula", "serie", "contenido"]),
    ...mapGetters(["cargando"])
  }
};
</script>

<style lang="scss" scoped>
</style>