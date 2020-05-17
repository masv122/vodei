<template>
  <div>
    <b-card
      no-body
      title-Tag="title"
      header-tag="header"
      footer-tag="footer"
      :img-src="`http://localhost:3000/uploads/portadas/${portada}`"
    >
      <template v-slot:header>
        <h2>
          {{ titulo }}
          <br />
          <small> {{ tituloOriginal }}</small>
        </h2>
      </template>
      <h4 class="text-center mt-3">Ficha Tecnica</h4>
      <b-card-body>
        <b-card-text>
          <div>

            <b-table stacked :items="items()"></b-table>
          </div>
        </b-card-text>
      </b-card-body>
      <b-list-group>
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          >Puntacion
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <span class="badge badge-success badge-pill">0</span>
        </b-list-group-item>
        <b-list-group-item
          class="d-flex justify-content-between align-items-center"
          >Comentarios Recibidos
          <span class="badge badge-success badge-pill">0</span>
        </b-list-group-item>
      </b-list-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "FichaTecnica",
  props: {
    titulo: {
      type: String,
      default: ""
    },
    tituloOriginal: {
      type: String,
      default: ""
    },
    idioma: {
      type: String,
      default: ""
    },
    genero: {
      type: String,
      default: ""
    },
    subtitulos: {
      type: String,
      default: ""
    },
    pais: {
      type: String,
      default: ""
    },
    productora: {
      type: String,
      default: ""
    },
    estreno: {
      type: String,
      default: ""
    },
    actores: {
      type: String,
      default: ""
    },
    director: {
      type: String,
      default: ""
    },
    duracion: {
      type: String,
      default: ""
    },
    portada: {
      type: String,
      default: ""
    }
  },
  methods: {
    items() {
      return [
      {
        Idioma: this.idioma,
        Genero: this.genero,
        Subtitulos: this.subtitulos,
        Pais: this.pais,
        Productora: this.productora,
        Estreno: this.estreno,
        Actores: this.actores,
        Director: this.director,
        Duracion: this.duracion
      }
    ]
    }
  },
};
</script>

<style lang="scss" scoped>
</style>