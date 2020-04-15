<template>
  <div>
    <b-nav class="p-2 mt-4 bg-light shadow">
      <b-nav-item disabled
        ><h4><i class="fas fa-money-bill    "></i></h4
      ></b-nav-item>
      <b-nav-item disabled><h4>Historial de Pagos</h4></b-nav-item>
      <b-nav-form class="ml-auto">
        <b-button-group>
          <b-input-group>
            <b-form-input
              id="example-input"
              v-model="value"
              type="text"
              placeholder="Desde"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="value"
                button-only
                right
                locale="es-ES"
                aria-controls="example-input"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group><b-input-group>
            <b-form-input
              id="example-input"
              v-model="value"
              type="text"
              placeholder="Hasta"
            ></b-form-input>
            <b-input-group-append>
              <b-form-datepicker
                v-model="value"
                button-only
                right
                locale="es-ES"
                aria-controls="example-input"
              ></b-form-datepicker>
            </b-input-group-append>
          </b-input-group>
          <b-dropdown text="Dropdown Button">
            <template v-slot:button-content>
              <i class="fas fa-money-check    "
                ><sup><i class="fa fa-check" aria-hidden="true"></i></sup
              ></i>
            </template>
            <b-dropdown-header>Seeccione el estado</b-dropdown-header>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              >Realizados <i class="fa fa-check" aria-hidden="true"></i
            ></b-dropdown-item>
            <b-dropdown-item
              >Pendientes <i class="fa fa-hourglass" aria-hidden="true"></i
            ></b-dropdown-item>
            <b-dropdown-item
              >Rechazados <i class="fa fa-times" aria-hidden="true"></i
            ></b-dropdown-item>
          </b-dropdown>
          <b-input-group>
            <template v-slot:append>
              <b-button-group>
                <b-button variant="outline-info"
                  ><i class="fa fa-search" aria-hidden="true"></i>
                  Buscar</b-button
                >
              </b-button-group>
            </template>
            <b-form-input type="text" placeholder="Buscar"> </b-form-input>
          </b-input-group>
          <b-button v-on:click="setvistaPagos" variant="primary" href="">
            <i v-if="vistaPagos" class="fa fa-table" aria-hidden="true"></i>
            <i v-else class="fa fa-list" aria-hidden="true"></i>
          </b-button>
        </b-button-group>
      </b-nav-form>
    </b-nav>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "NavPagos",
  data() {
    return {
      value: ""
    };
  },
  computed: {
    ...mapState(["vistaPagos"])
  },
  methods: {
    ...mapMutations(["setvistaPagos"])
  },
};
</script>

<style lang="scss" scoped>
</style>