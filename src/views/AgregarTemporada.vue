<template>
  <div>
    <b-modal id="ModalPelicula" title="Confirme">
      <template v-slot:modal-footer="{ ok, cancel }">
        <b-button size="sm" variant="success" @click="ok()">
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
      <form @submit.prevent="">
        <b-form-row>
          <b-col cols-sm="12" cols-md="4">
            <b-form-group
              id="input-group-serie"
              label="Serie:"
              label-for="serie"
            >
              <b-form-input
                id="serie"
                type="text"
                required
                placeholder="Ingrese el nombre de la serie"
              >
              </b-form-input>
              <b-list-group>
                <b-list-group-item class="d-flex" v-for="(serie, index) in series" :key="index">
                  <div>
                    <b-img
                      :src="`http://localhost:3000/uploads/portadas/${serie.portada}`"
                      fluid
                      alt="portada"
                      class="image"
                    ></b-img>
                  </div>
                  <div class="ml-4">
                    <div><h5>Titulo</h5></div>
                    <div><h6>Numero de temporadas</h6></div>
                  </div>
                </b-list-group-item>
              </b-list-group>
            </b-form-group>
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
                placeholder="Ingrese el nombre de la temporada"
              >
              </b-form-input>
              <b-button
                block
                variant="primary"
                type="submit"
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
import { mapGetters } from "vuex";
export default {
    name: 'AgregarTemporada',
    computed: {
        ...mapGetters('Catalogo', ["series"])
    },
};
</script>

<style lang="scss" scoped>
.image{
    height: 5rem;
}

</style>