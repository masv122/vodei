<template>
  <div>
    <form @submit.prevent="agregarPelicula(retornaPelicula())">
      <b-form-row>
        <b-col cols-sm="12" cols-md="6">
          <b-form-group>
            <b-form-group
              id="input-group-titulo"
              label="Titulo:"
              label-for="titulo"
            >
              <b-form-input id="titulo" type="text" readonly v-model="titulo">
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-idioma"
              label="Idioma:"
              label-for="idioma"
            >
              <b-form-input
                id="idioma"
                v-model="idioma"
                readonly
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-subtitulo"
              label="Subtitulo:"
              label-for="subtitulo"
            >
              <b-form-input
                id="subtitulo"
                v-model="subtitulo"
                readonly
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-productora"
              label="Productora:"
              label-for="productora"
            >
              <b-form-input
                id="productora"
                type="text"
                v-model="productora"
                readonly
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-actores"
              label="Actores:"
              label-for="input-1"
            >
              <b-form-input id="actores" type="text" v-model="actores" readonly>
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-portadas"
              label="Portada:"
              label-for="portadas"
            >
              <b-form-input
                id="portadas"
                type="text"
                v-model="portada"
                readonly
              >
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-col>
        <b-col cols-sm="12" cols-md="6">
          <b-form-group>
            <b-form-group
              id="input-group-titulo-original"
              label="Titulo original:"
              label-for="titulo-original"
            >
              <b-form-input
                id="titulo-original"
                type="text"
                v-model="tituloOriginal"
                readonly
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-genero"
              label="Genero:"
              label-for="genero"
            >
              <b-form-input
                id="genero"
                v-model="genero"
                readonly
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-pais" label="Pais:" label-for="pais">
              <b-form-input id="pais" v-model="pais" readonly></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-fecha"
              label="Fecha:"
              label-for="fecha"
            >
              <b-form-input id="fecha" v-model="fecha" readonly></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-director"
              label="Director:"
              label-for="director"
            >
              <b-form-input
                id="director"
                type="text"
                v-model="director"
                readonly
                placeholder="Ingrese Director"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-duracion"
              label="Duracion:"
              label-for="duracion"
            >
              <b-form-input
                id="duracion"
                type="text"
                v-model="duracion"
                readonly
              >
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-col>
      </b-form-row>
      <b-form-group
        id="input-group-sinopsis"
        label="Sinopsis:"
        label-for="sinopsis"
      >
        <b-form-textarea
          id="sinopsis"
          v-model="sinopsis"
          placeholder="Ingrese sinopsis..."
          rows="3"
          readonly
          max-rows="6"
        ></b-form-textarea>
      </b-form-group>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContenidoModalPelicula",
  props: {
    pelicula: null,
    type: Object
  },
  data() {
    return {
      titulo: this.pelicula.titulo,
      idioma: this.pelicula.idioma,
      subtitulo: this.pelicula.subtitulo,
      productora: this.pelicula.productora,
      actores: this.pelicula.actores,
      tituloOriginal: this.pelicula.tituloOriginal,
      genero: this.pelicula.genero,
      pais: this.pelicula.pais,
      fecha: this.pelicula.fecha,
      director: this.pelicula.director,
      duracion: this.pelicula.duracion,
      portada: this.pelicula.portada,
      sinopsis: this.pelicula.sinopsis
    };
  }
};
</script>

<style lang="scss" scoped>
</style>