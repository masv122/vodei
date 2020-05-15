<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="container mt-4">
            <h5>Sinopsis</h5>
            <p>
              {{ sinopsis }}
            </p>
          </div>
          <div class="comentarios mt-4">
            <h5>Comentarios Recibidos</h5>
            <NavComentarios />
            <Comentarios />
            <Paginacion />
            <hr />
          </div>
        </div>
        <div class="col-md-4">
          <FichaTecnica
            :titulo="titulo"
            :titulo_original="tituloOriginal"
            :idioma="idioma"
            :genero="genero"
            :subtitulos="subtitulo"
            :pais="pais"
            :productora="productora"
            :estreno="fecha"
            :actores="actores"
            :director="director"
            :duracion="duracion"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FichaTecnica from "@/components/FichaTecnica.vue";
import NavComentarios from "@/components/NavComentarios.vue";
import Comentarios from "@/components/Comentarios.vue";
import Paginacion from "@/components/Paginacion.vue";
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "DetallesContenido",
  components: {
    FichaTecnica,
    NavComentarios,
    Comentarios,
    Paginacion
  },
  data() {
    return {
      idioma:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Idioma : this.serie.Idioma,
      subtitulo:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Subtitulo : this.serie.Subtitulo,
      genero:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Genero : this.serie.Genero ,
      pais: this.$route.params.tipo === "pelicula" ? this.pelicula.Pais : this.serie.Pais,
      portada:
        this.$route.params.tipo === "pelicula" ? this.pelicula.portada : this.serie.portada,
      titulo:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Titulo : this.serie.Titulo,
      productora:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Productora : this.serie.Productora,
      actores:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Actores : this.serie.Actores,
      tituloOriginal:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Titulo_original : this.serie.Titulo_original,
      director:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Director : this.serie.Director,
      duracion:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Duracion : "",
      fecha:
        this.$route.params.tipo === "pelicula" ? this.pelicula.Fecha_estreno : this.serie.Fecha_estreno,
      sinopsis:
        this.$route.params.tipo === "pelicula" ? this.pelicula.sinopsis : this.serie.sinopsis,
      id: this.$route.params.tipo === "pelicula" ? this.pelicula.id : this.serie.id
    };
  },
  computed: {
    ...mapGetters("Catalogo", ["pelicua", "serie"])
  },
  methods: {
    ...mapMutations(["addBreadcrumb"]),
    ...mapActions("Catalogo", ["updatePelicula", "updateSerie"])
  },
  created() {
    if (this.$route.params.tipo === "pelicula")
      this.updatePelicula(this.$route.params.id);
    else this.updateSerie(this.$route.params.id);
    this.addBreadcrumb([
      {
        text: "Home",
        to: { name: "Home" }
      },
      {
        text: "Contenido",
        to: { name: "Contenido" }
      },
      {
        text: "Detalles Contenido",
        to: { name: "Detalles Contenido" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>