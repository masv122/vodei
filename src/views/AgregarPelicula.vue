<template>
  <div class="shadow my-2 py-2">
    <b-modal
      id="ModalPelicula"
      title="Confirme"
    >
      <ContenidoModalPelicula :pelicula="retornaPelicula()" />
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button
          size="sm"
          variant="success"
          @click="
            ok();
            _agregarPelicula();
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
    <b-container>
      <h1 class="display-4 my-3">
        <i
          class="fa fa-plus"
          aria-hidden="true"
        ></i> Agregar Pelicula
      </h1>
      <form @submit.prevent="">
        <b-form-row>
          <b-col
            cols-sm="12"
            cols-md="6"
          >
            <b-form-group>
              <b-form-group
                id="input-group-titulo"
                label="Titulo:"
                label-for="titulo"
              >
                <b-form-input
                  id="titulo"
                  type="text"
                  required
                  v-model="titulo"
                  placeholder="Ingrese Titulo"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-idioma"
                label="Idioma:"
                label-for="idioma"
              >
                <b-form-select
                  id="idioma"
                  v-model="idiomasSel"
                  :options="idiomas"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-subtitulo"
                label="Subtitulo:"
                label-for="input-1"
              >
                <b-form-select
                  id="subtitulo"
                  v-model="subtitulosSel"
                  :options="subtitulos"
                  required
                ></b-form-select>
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
                  required
                  placeholder="Ingrese Productora"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-actores"
                label="Actores:"
                label-for="input-1"
              >
                <b-form-input
                  id="actores"
                  type="text"
                  v-model="actores"
                  required
                  placeholder="Ingrese Actores"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group>
                <div class="mt-1">
                  Portada Seleccionada: {{ portada ? portada.name : "" }}
                </div>
                <b-form-file
                  v-model="portada"
                  accept="image/*"
                  :state="Boolean(portada)"
                  placeholder="Selecciona una portada o arrastrala aqui..."
                  drop-placeholder="Arrastrala aqui..."
                  required
                ></b-form-file>
              </b-form-group>
            </b-form-group>
          </b-col>
          <b-col
            cols-sm="12"
            cols-md="6"
          >
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
                  required
                  placeholder="Ingrese Titulo original"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-genero"
                label="Genero:"
                label-for="genero"
              >
                <b-form-select
                  id="genero"
                  v-model="generoSel"
                  :options="genero"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-pais"
                label="Pais:"
                label-for="pais"
              >
                <b-form-select
                  id="pais"
                  v-model="paisSel"
                  :options="pais"
                  required
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-fecha"
                label="Fecha de estreno:"
                label-for="fecha"
              >
                <b-input-group class="mb-3">
                  <b-form-input
                    id="example-input"
                    v-model="fecha"
                    type="text"
                    placeholder="YYYY-MM-DD"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-form-datepicker
                      v-model="fecha"
                      button-only
                      right
                      locale="es-ES"
                      required
                      aria-controls="example-input"
                    ></b-form-datepicker>
                  </b-input-group-append>
                </b-input-group>
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
                  required
                  placeholder="Ingrese Director"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-duracion"
                label="Duracion:"
                label-for="duracion"
              >
                <b-form-timepicker
                  id="duracion"
                  v-model="duracion"
                  locale="es"
                  required
                ></b-form-timepicker>
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
            required
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group align="center">
          <b-overlay
            :show="cargando"
            rounded
            opacity="0.6"
            spinner-small=""
            spinner-variant="primary"
            class="d-inline-blocks"
          >
            <b-button
              block
              variant="primary"
              type="submit"
              :disabled="isDisabled"
              v-b-modal.ModalPelicula
            >
              Agregar
            </b-button>
          </b-overlay>
          <b-button
            block
            type="reset"
            variant="danger"
          >
            Restablecer
          </b-button>
        </b-form-group>
      </form>
    </b-container>
  </div>
</template>

<script>
import ContenidoModalPelicula from "@/components/ContenidoModalPelicula.vue";
import notificacion from "@/mixin/notificacion";
import getCount from "@/mixin/getCount";
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "AgregarPelicula",
  mixins: [notificacion, getCount],
  data() {
    return {
      idiomasSel: null,
      subtitulosSel: null,
      generoSel: null,
      paisSel: null,
      idiomas: [
        { value: null, text: "Por favor selecciona un idioma" },
        { value: "es-LA", text: "Español Latino" },
        { value: "es-ES", text: "Español España" },
        { value: "en-US", text: "Ingles Nortea-Americano" },
        { value: "en-UK", text: "Ingles Britanico" },
        { value: "jap", text: "Japones" },
        { value: "chn", text: "Chino" }
      ],
      subtitulos: [
        { value: null, text: "Por favor selecciona un Subtitulo" },
        { value: "es-LA", text: "Español Latino" },
        { value: "es-ES", text: "Español España" },
        { value: "en-US", text: "Ingles Nortea-Americano" },
        { value: "en-UK", text: "Ingles Britanico" },
        { value: "jap", text: "Japones" },
        { value: "chn", text: "Chino" }
      ],
      genero: [
        { value: null, text: "Por favor selecciona un Genero" },
        { value: "Drama", text: "Drama" },
        { value: "Accion", text: "Accion" },
        { value: "Suspenso", text: "Suspenso" },
        { value: "Ciencia Ficcion", text: "Ciencia Ficcion" },
        { value: "No-binario", text: "No-Binario" }
      ],
      pais: [
        { value: null, text: "Por favor selecciona un Pais" },
        { value: "usa", text: "Estados Unidos" },
        { value: "uk", text: "Reino Unido" },
        { value: "en-US", text: "Ingles Nortea-Americano" },
        { value: "en-UK", text: "Ingles Britanico" },
        { value: "jap", text: "Japon" },
        { value: "chn", text: "China" }
      ],
      portada: null,
      titulo: "",
      productora: "",
      actores: "",
      tituloOriginal: "",
      director: "",
      duracion: "",
      fecha: "",
      sinopsis: "",
      tipo: this.$route.params.tipo,
      id: ""
    };
  },
  computed: {
    ...mapGetters("Catalogo", ["peliculas"]),
    ...mapGetters(["cargando"]),
    isDisabled() {
      return this.portada === null || this.sinopsis === "";
    }
  },
  methods: {
    ...mapActions("Catalogo", ["agregarPelicula"]),
    ...mapMutations(["addBreadcrumb"]),
    retornaPelicula() {
      return {
        id: "mov-" + this.id,
        titulo: this.titulo,
        idioma: this.idiomasSel,
        subtitulo: this.subtitulosSel,
        productora: this.productora,
        actores: this.actores,
        tituloOriginal: this.tituloOriginal,
        genero: this.generoSel,
        pais: this.paisSel,
        fecha: this.fecha,
        director: this.director,
        duracion: this.duracion,
        portada: this.portada === null ? "" : this.portada,
        sinopsis: this.sinopsis,
        tipo: this.tipo
      };
    },
    _agregarPelicula() {
      const resultado = this.agregarPelicula(this.retornaPelicula());
      resultado.then(res => {
        this.show(res, "Pelicula", "agregada");
        this.id++;
      });
    }
  },
  async beforeMount() {
    this.id = await this.count();
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
        text: "Agregar Pelicula",
        to: { name: "Agregar Pelicula" }
      }
    ]);
  },
  components: {
    ContenidoModalPelicula
  }
};
</script>

<style lang="scss" scoped>
.contenido_image {
  position: absolute;
  height: 30rem;
  z-index: -1;
  margin-left: 10rem;
}
</style>