<template>
  <div>
    <h6 class="display-4 my-5 text-center">
      Hechale un vistazo a estos accesos directos
    </h6>
    <b-alert
      class="my-4 acceso_rapido_1 shadow border rounded"
      variant="success"
      show
    >
      <b-row>
        <b-col cols="8">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut fuga
            error dicta, tempore accusamus minus sunt saepe illum beatae tempora
            modi est rerum, ratione quidem aliquam laboriosam blanditiis
            consequatur!
          </p>
        </b-col>
        <b-col cols="4">
          <b-nav pills class="flex-column justify-content-center text-center">
            <b-nav-item>
              <b-button
                block
                variant="success"
                :to="{ name: 'Agregar Pelicula' }"
              >
                Agregar Estreno
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </b-button>
            </b-nav-item>
            <b-nav-item>
              <b-button
                block
                variant="success"
                :to="{ name: 'Agregar Pelicula' }"
              >
                Agregar Serie
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </b-button>
            </b-nav-item>
            <b-nav-item>
              <b-button block variant="success" :to="{ name: 'Agregar Serie' }">
                Agregar Contemporanea
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </b-button>
            </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-alert>
    <b-alert
      class="my-4 acceso_rapido_1 shadow border rounded"
      variant="primary"
      show
    >
      <b-row>
        <b-col cols="4">
          <b-nav pills class="flex-column justify-content-center text-center">
            <b-nav-item>
              <b-button
                block
                variant="primary"
                @click="setTabSalasFunciones(true)"
                :to="{ name: 'Salas y Funciones' }"
              >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                Salas
              </b-button>
            </b-nav-item>
            <b-nav-item>
              <b-button
                block
                variant="primary"
                @click="setTabSalasFunciones(false)"
                :to="{ name: 'Salas y Funciones' }"
              >
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                Funciones
              </b-button>
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="8">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut fuga
            error dicta, tempore accusamus minus sunt saepe illum beatae tempora
            modi est rerum, ratione quidem aliquam laboriosam blanditiis
            consequatur!
          </p>
        </b-col>
      </b-row>
    </b-alert>
    <b-alert
      class="my-4 acceso_rapido_1 shadow border rounded"
      variant="secondary"
      show
    >
      <b-row>
        <b-col cols="8">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut fuga
            error dicta, tempore accusamus minus sunt saepe illum beatae tempora
            modi est rerum, ratione quidem aliquam laboriosam blanditiis
            consequatur!
          </p>
        </b-col>
        <b-col cols="4">
          <b-nav pills class="flex-column justify-content-center text-center">
            <b-nav-item>
              <b-button block variant="secondary" href="">
                Actualizar Estrenos
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </b-button>
            </b-nav-item>
            <b-nav-item>
              <b-button block variant="secondary" href="">
                Actualizar Series
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </b-button>
            </b-nav-item>
            <b-nav-item>
              <b-button block variant="secondary" href="">
                Actualizar Contemporanea
                <i class="fa fa-arrow-right" aria-hidden="true"></i>
              </b-button>
            </b-nav-item>
          </b-nav>
        </b-col>
      </b-row>
    </b-alert>
    <b-alert
      class="my-4 acceso_rapido_1 shadow border rounded"
      variant="warning"
      show
    >
      <b-row>
        <b-col cols="4" class="pt-3">
          <b-nav pills class="flex-column justify-content-center text-center">
            <b-nav-item>
              <b-button block variant="warning" :to="{ name: 'Tienda' }">
                <i class="fa fa-arrow-left" aria-hidden="true"></i>
                Modificar la tienda
              </b-button>
            </b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="8">
          <p class="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut fuga
            error dicta, tempore accusamus minus sunt saepe illum beatae tempora
            modi est rerum, ratione quidem aliquam laboriosam blanditiis
            consequatur!
          </p>
        </b-col>
      </b-row>
    </b-alert>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "AccionesRapidos",
  methods: {
    ...mapMutations(["setTabSalasFunciones"])
  }
};
</script>

<style lang="scss" scoped>
</style>