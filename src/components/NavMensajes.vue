<template>
  <div>
    <b-nav class="p-2 mt-4 bg-light shadow">
      <b-nav-item disabled
        ><h4><i class="fa fa-envelope" aria-hidden="true"></i></h4
      ></b-nav-item>
      <b-nav-item disabled><h4>Historial de Mensajes</h4></b-nav-item>
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
            </b-input-group-append> </b-input-group
          ><b-input-group>
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
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </template>
            <b-dropdown-header>Seeccione el estado</b-dropdown-header>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              >Sin Atender <i class="fa fa-envelope" aria-hidden="true"></i
            ></b-dropdown-item>
            <b-dropdown-item
              >Atendidos <i class="fa fa-envelope-open" aria-hidden="true"></i
            ></b-dropdown-item>
            <b-dropdown-item>Todos</b-dropdown-item>
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
        </b-button-group>
      </b-nav-form>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavMensajes",
  data() {
    return {
      value: ""
    };
  }
};
</script>

<style lang="scss" scoped>
</style>