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
            :tituloOriginal="tituloOriginal"
            :idioma="idioma"
            :genero="genero"
            :subtitulos="subtitulo"
            :pais="pais"
            :productora="productora"
            :estreno="fecha"
            :actores="actores"
            :director="director"
            :duracion="duracion"
            :portada="portada"
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
import { mapMutations, mapGetters } from "vuex";

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
      idioma: "",
      subtitulo: "",
      genero: "",
      pais: "",
      portada: "",
      titulo: "",
      productora: "",
      actores: "",
      tituloOriginal: "",
      director: "",
      duracion: "",
      fecha: "",
      sinopsis: "",
      id: ""
    };
  },
  computed: {
    ...mapGetters("Catalogo", ["contenido"])
  },
  methods: {
    ...mapMutations(["addBreadcrumb"])
  },
  mounted() {
    this.idioma = this.contenido.Idioma;
    this.subtitulo = this.contenido.Subtitulo;
    this.genero = this.contenido.Genero;
    this.pais = this.contenido.Pais;
    this.portada = this.contenido.portada;
    this.titulo = this.contenido.Titulo;
    this.productora = this.contenido.Productora;
    this.actores = this.contenido.Actores;
    this.tituloOriginal = this.contenido.Titulo_Original;
    this.director = this.contenido.Director;
    this.duracion = this.$route.params.id.includes("mov")
      ? this.contenido.Duracion
      : "";
    this.fecha = this.contenido.Fecha_estreno;
    this.sinopsis = this.contenido.sinopsis;
    this.id = this.contenido.id;
  },
  created() {
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