<template>
  <div>
    <b-card
      no-body
      title-Tag="title"
      header-tag="header"
      footer-tag="footer"
      img-src="@/assets/portadas/poster-joker-2-1567010576 (1).jpg"
    >
      <template v-slot:header>
        <h2>
          Titulo Pelicula
          <br />
          <small> Titulo Original</small>
        </h2>
      </template>
      <h4 class="text-center mt-3">Ficha Tecnica</h4>
      <b-card-body>
        <b-card-text>
          <div>
            <b-table stacked :items="items"></b-table>
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
  data() {
    return {
      items: [
        {
          Idioma: "Idioma",
          Genero: "Genero",
          Subtitulos: "Subtitulos",
          Pais: "Pais",
          Productora: "Productora",
          Estreno: "Estreno",
          Actores: "Actores",
          Director: "Director",
          Duracion: "Duracion"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>