<template>
  <div>
    <b-modal id="ModalPelicula" title="Confirme">
      <h5>¿Agregar Capitulo?</h5>
      <b-form @submit.prevent="">
        <b-form-row>
          <b-col cols="6">
            <b-form-group
              align="center"
              id="input-group-serie-modal"
              label="Serie"
              label-for="serie-modal"
            >
              <b-form-input
                id="serie-modal"
                type="text"
                readonly
                v-if="contenido != null"
                v-model="contenido.Titulo"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              align="center"
              id="input-group-titulo-modal"
              label="Titulo"
              label-for="titulo-modal"
            >
              <b-form-input
                id="titulo-modal"
                type="text"
                readonly
                v-model="titulo"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              align="center"
              id="input-group-idioma-modal"
              label="Idioma"
              label-for="idioma-modal"
            >
              <b-form-input
                id="idioma-modal"
                type="text"
                readonly
                v-model="idiomasSel"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
          <b-col cols="6">
            <b-form-group
              align="center"
              id="input-group-temporada-modal"
              label="Temporada"
              label-for="temporada-modal"
            >
              <b-form-input
                id="temporada-modal"
                type="text"
                readonly
                v-if="temporada != null"
                v-model="temporada.titulo"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              align="center"
              id="input-group-duracion-modal"
              label="Duracion"
              label-for="duracion-modal"
            >
              <b-form-input
                id="duracion-modal"
                type="text"
                readonly
                v-model="duracion"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              align="center"
              id="input-group-subtitulos-modal"
              label="Subtitulos"
              label-for="duracion-modal"
            >
              <b-form-input
                id="subtitulos-modal"
                type="text"
                readonly
                v-model="subtitulosSel"
              >
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-form-row>
          <b-form-group
            align="center"
            id="input-group-director-modal"
            label="Director"
            label-for="director-modal"
          >
            <b-form-input
              id="director-modal"
              type="text"
              readonly
              v-model="director"
            >
            </b-form-input>
          </b-form-group>
      </b-form>
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button
          size="sm"
          variant="success"
          @click="
            ok();
            _agregarCapitulo();
          "
        >
          Agregar
        </b-button>
        <b-button size="sm" variant="danger" @click="cancel()">
          Cancelar
        </b-button>
      </template>
    </b-modal>
    <b-container>
      <h1 class="display-4 my-3">
        <i class="fa fa-plus" aria-hidden="true"></i> Informacion del capitulo
      </h1>
      <form @submit.prevent="">
        <b-form-row>
          <b-col cols-sm="12" cols-md="4">
            <b-alert variant="warning" show v-if="series.length === 0">
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
              No hay series registradas.
            </b-alert>
            <b-form-group id="input-group-serie" v-else-if="contenido == null">
              <div class="border-bottom mb-2">
                <label>Series</label>
              </div>
              <b-input-group>
                <b-form-input
                  id="serie"
                  type="text"
                  v-model="textSerie"
                  @keyup="filtrar"
                  required
                  placeholder="Ingrese el nombre de la serie"
                >
                </b-form-input>
                <b-input-group-addon>
                  <b-button variant="info" @click="filtrar">
                    <i class="fa fa-search" aria-hidden="true"></i> Buscar
                  </b-button>
                </b-input-group-addon>
              </b-input-group>
              <ListaContenido :contenidos="series" />
            </b-form-group>
            <div v-else>
              <b-button variant="danger" block @click="reiniciarSerie()">
                <i class="fa fa-times" aria-hidden="true"></i>
              </b-button>
              <ContenidoIndividual
                :titulo="contenido.Titulo"
                :portada="contenido.portada"
                :nTemp="contenido.nTemp"
                :detalles="false"
                :tContenido="1"
              ></ContenidoIndividual>
            </div>
          </b-col>
          <b-col cols-sm="12" cols-md="4">
            <div class="border-bottom mb-2" v-if="temporada == null">
              <label>Temporadas</label>
            </div>
            <b-alert variant="warning" show v-if="contenido == null">
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
              Seleccione una serie.
            </b-alert>
            <b-alert variant="warning" show v-else-if="temporadas.length === 0">
              <i class="fa fa-exclamation-triangle" aria-hidden="true"></i> La
              serie no posee temporadas aun.
            </b-alert>
            <ListaTemporadas
              v-else-if="temporadas.length > 0 && temporada == null"
              :temporadas="temporadas"
              class="overflow-auto listas"
            />
            <div v-else-if="temporada != null">
              <b-button variant="danger" block @click="reiniciarTemporada()">
                <i class="fa fa-times" aria-hidden="true"></i>
              </b-button>
              <h4>Temporada: {{ temporada.titulo }}</h4>
              <b-alert variant="warning" show v-if="capitulos.length == 0">
                <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                La serie no posee capitulos aun.
              </b-alert>
              <ListaCapitulos :capitulos="capitulos" v-else />
            </div>
          </b-col>
          <b-col cols-sm="12" cols-md="4">
            <b-form-group>
              <b-form-group
                id="input-group-temporada"
                label="Ingrese Titulo"
                label-for="temporada"
              >
                <b-form-input
                  id="temporada"
                  type="text"
                  required
                  v-model="titulo"
                  placeholder="Ingrese el nombre del Capitulo"
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
            </b-form-group>
            <b-button
              block
              variant="primary"
              type="submit"
              :disabled="contenido == null || temporada == null"
              v-b-modal.ModalPelicula
            >
              Agregar
            </b-button>
            <b-button block type="reset" variant="danger">
              Cancelar
            </b-button>
          </b-col>
        </b-form-row>
      </form>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ListaContenido from "@/components/ListaContenido.vue";
import ListaTemporadas from "@/components/ListaTemporadas.vue";
import ListaCapitulos from "@/components/ListaCapitulos.vue";
import ContenidoIndividual from "@/components/ContenidoIndividual.vue";
import notificacion from "@/mixin/notificacion";
export default {
  name: "AgregarCapitulo",
  mixins: [notificacion],
  data() {
    return {
      textSerie: "",
      textTemporada: "",
      titulo: this.contenido == null ? "" : this.contenido.nCap,
      idiomasSel: null,
      subtitulosSel: null,
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
      director: "",
      duracion: ""
    };
  },
  computed: {
    ...mapGetters("Catalogo", [
      "series",
      "contenido",
      "catalogo",
      "temporadas",
      "temporada",
      "capitulos"
    ])
  },
  methods: {
    ...mapActions("Catalogo", ["updateTemporadas", "agregarCapitulo"]),
    ...mapMutations("Catalogo", [
      "filtrarContenido",
      "updateContenido",
      "updateTemporada",
      "updateCapitulos"
    ]),
    ...mapMutations(["addBreadcrumb"]),
    getCapitulo() {
      return {
        id:
          "cap-" +
          this.contenido.id +
          "-" +
          this.temporada.id +
          "-" +
          this.capitulos.length,
        id_temporada: this.temporada.id,
        titulo: this.titulo,
        duracion: this.duracion,
        idioma: this.idiomasSel,
        subtitulos: this.subtitulosSel,
        director: this.director,
        idSerie: this.contenido.id
      };
    },
    filtrar() {
      this.filtrarContenido({
        contenido: this.series,
        texto: this.textSerie
      });
    },
    _agregarCapitulo() {
      const resultado = this.agregarCapitulo(this.getCapitulo());
      resultado.then(res => {
        this.show(res, "Capitulo");
      });
    },
    reiniciarSerie() {
      this.updateContenido(null);
      this.updateTemporadas(null);
    },
    reiniciarTemporada() {
      this.updateTemporada(null);
      this.updateCapitulos(null);
    }
  },
  components: {
    ListaContenido,
    ContenidoIndividual,
    ListaTemporadas,
    ListaCapitulos
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
        text: "Agregar Capitulo",
        to: { name: "Agregar Capitulo" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
.listas {
  height: 320px;
}
</style>