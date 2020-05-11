<template>
  <div>
    <b-modal id="ModalPelicula" title="Confirme">
      <h5>¿Agregar Temporada?</h5>
      <b-form @submit.prevent="">
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
            v-model="titulo"
          >
          </b-form-input>
        </b-form-group>
        <b-form-group
          align="center"
          id="input-group-serie-modal"
          label="Serie"
          label-for="serie-modal"
          v-if="contenido != null"
        >
          <b-form-input
            id="serie-modal"
            type="text"
            readonly
            v-model="contenido.Titulo"
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
            _agregarTemporada();
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
        <i class="fa fa-plus" aria-hidden="true"></i> Agregar Temporada
      </h1>
      <form @submit.prevent="agregarTemporada(getTemporada)">
        <b-form-row>
          <b-col cols-sm="12" cols-md="4">
            <b-form-group
              id="input-group-serie"
              label="Serie:"
              label-for="serie"
              v-if="contenido == null"
            >
              <b-input-group>
                <b-form-input
                  id="serie"
                  type="text"
                  v-model="filtro"
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
              <ListaContenido
                :contenidos="catalogo" 
              />
            </b-form-group>
            <div v-else>
              <b-button
                class="float-right"
                variant="primary"
                @click="updateContenido(null)"
              >
                Deseleccionar
              </b-button>
              <ContenidoIndividual
                :titulo="contenido.Titulo"
                :portada="contenido.portada"
                :nTemp="contenido.nTemp"
                :detalles="false"
                tContenido="1"
              ></ContenidoIndividual>
            </div>
          </b-col>
          <b-col cols-sm="12" cols-md="8">
            <b-form-group
              align="center"
              id="input-group-temporada"
              label="Agregue temporada"
              label-for="temporada"
            >
              <b-form-input
                id="temporada"
                type="text"
                required
                v-model="titulo"
                placeholder="Ingrese el nombre de la temporada"
              >
              </b-form-input>
              <b-button
                block
                variant="primary"
                type="submit"
                :disabled="contenido == null"
                v-b-modal.ModalPelicula
              >
                Agregar
              </b-button>
              <b-button block type="reset" variant="danger">
                Cancelar
              </b-button>
            </b-form-group>
          </b-col>
        </b-form-row>
      </form>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
import ListaContenido from "@/components/ListaContenido.vue";
import ContenidoIndividual from "@/components/ContenidoIndividual.vue";
import notificacion from "@/mixin/notificacion";
export default {
  name: "AgregarTemporada",
  mixins: [notificacion],
  data() {
    return {
      filtro: "",
      titulo: ""
    };
  },
  computed: {
    ...mapGetters("Catalogo", [
      "series",
      "contenido",
      "catalogo",
      "temporadas"
    ])
  },
  methods: {
    ...mapActions("Catalogo", [
      "updateContenido",
      "updateTemporadas",
      "agregarTemporada",
      "cargarSeries"
    ]),
    ...mapMutations("Catalogo", ["filtrarContenido"]),
    getTemporada() {
      return {
        idTemporada: this.temporadas.length,
        id_serie: this.contenido.id_serie,
        Titulo: this.titulo
      };
    },
    filtrar() {
      this.filtrarContenido({
        contenido: this.series,
        texto: this.filtro
      });
    },
    _agregarTemporada() {
      const resultado = this.agregarTemporada(this.getTemporada());
      resultado.then(res => {
        this.show(res, "Temporada");
      });
    }
  },
  components: {
    ListaContenido,
    ContenidoIndividual
  },
  created() {
    this.updateTemporadas();
  }
};
</script>

<style lang="scss" scoped>
</style>