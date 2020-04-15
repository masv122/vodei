<template>
  <div>
    <b-nav class="p-2 mt-4 bg-light shadow">
      <b-nav-item disabled
        ><i class="fa fa-comment" aria-hidden="true"></i
      ></b-nav-item>
      <b-nav-item disabled><b> Comentarios Enviados</b></b-nav-item>
      <b-nav-form class="ml-auto">
        <b-button-group>
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
          <b-dropdown text="Dropdown Button">
            <template v-slot:button-content>
              <i class="fa fa-align-right" aria-hidden="true"></i>
            </template>
            <b-dropdown-header>Filtros</b-dropdown-header>
            <b-dropdown-item>Action</b-dropdown-item>
            <b-dropdown-item>Another action</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item>Something else here...</b-dropdown-item>
            <b-dropdown-item disabled>Disabled action</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
      </b-nav-form>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "NavComentarios"
};
</script>

<style lang="scss" scoped>
</style>