<template>
  <div>
    <b-modal
      id="confirmacion"
      :title="`¿Esta seguro que desea eliminar ${titulo}?`"
    >
      <h6>Esta accion eliminara {{titulo}} de la base de datos</h6>
      <div>
        <b-button
          @click="personalizar = !personalizar"
          size="sm"
          class="float-right"
          variant="link"
        >
          Personalizar
        </b-button>
        <b-form-checkbox
          v-model="eliminacionTotal"
          switch
          value="accepted"
          unchecked-value="not_accepted"
        >
          Eliminar todos los datos asociados.
        </b-form-checkbox>
        <b-list-group v-if="personalizar">
          <b-list-group-item>
            <b-form-checkbox
              v-model="eliminacionTotal"
              switch
              value="accepted"
              unchecked-value="not_accepted"
            >
              Eliminar los comentarios
            </b-form-checkbox>
          </b-list-group-item>
          <b-list-group-item>
            <b-form-checkbox
              v-model="eliminacionTotal"
              switch
              value="accepted"
              unchecked-value="not_accepted"
            >
              Eliminar las temporadas.
            </b-form-checkbox>
          </b-list-group-item>
          <b-list-group-item>
            <b-form-checkbox
              v-model="eliminacionTotal"
              switch
              value="accepted"
              unchecked-value="not_accepted"
            >
              Eliminar los capitulos.
            </b-form-checkbox>
          </b-list-group-item>
        </b-list-group>
      </div>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button
          size="sm"
          variant="success"
          @click="
            ok();
            elimiminarContenido();
          "
        >
          Confirmar
        </b-button>
        <b-button
          size="sm"
          variant="danger"
          @click="cancel()"
        >
          Cancelar
        </b-button>
      </template>
    </b-modal>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="container mt-4">
            <div>
              <div class="float-right">
                <b-overlay
                  :show="cargando"
                  rounded
                  opacity="0.6"
                  spinner-small=""
                  spinner-variant="primary"
                  class="d-inline-blocks"
                >
                  <b-button-group>
                    <b-button
                      variant="warning"
                      id="edit"
                    ><i class="fas fa-edit fa-sm"></i>
                    </b-button>
                    <b-button
                      id="trash"
                      variant="danger"
                      v-b-modal.confirmacion
                    ><i class="fas fa-trash-alt"></i></b-button>
                  </b-button-group>
                </b-overlay>
                <b-tooltip
                  target="edit"
                  placement="button"
                  triggers="hover"
                >
                  Modificar
                </b-tooltip>
                <b-tooltip
                  target="trash"
                  placement="button"
                  triggers="hover"
                >
                  Eliminar
                </b-tooltip>
              </div>
              <h5>Sinopsis</h5>
            </div>
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
import notificacion from "@/mixin/notificacion";
import Paginacion from "@/components/Paginacion.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "DetallesContenido",
  mixins: [notificacion],
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
      id: "",
      eliminacionTotal: false,
      personalizar: false
    };
  },
  computed: {
    ...mapGetters("Catalogo", ["contenido"]),
    ...mapGetters(["cargando"])
  },
  methods: {
    ...mapMutations(["addBreadcrumb"]),
    ...mapActions("Catalogo", ["deletePelicula", "deleteSerie"]),
    elimiminarContenido: async function() {
      let resultado;
      const tipo = this.id.includes("mov") ? "pelicula" : "serie";
      if (this.id.includes("mov"))
        resultado = await this.deletePelicula(this.id);
      else resultado = await this.deleteSerie(this.id);
      this.show(resultado, tipo, "eliminada");
      let start = new Date().getTime();
      for (let i = 0; i < 1e7; i++) {
        if((new Date().getTime() - start) > 5000){
        this.$router.push({name: 'Contenido'});
          break;
        }
      }
    }
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