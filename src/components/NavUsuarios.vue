<template>
  <div>
    <b-nav class="p-2 mt-4 bg-light shadow">
      <b-nav-item disabled
        ><h4><i class="fa fa-users" aria-hidden="true"></i></h4
      ></b-nav-item>
      <b-nav-item disabled><h4>Usuarios</h4></b-nav-item>
      <b-nav-form class="ml-auto">
        <b-button-group>
          <b-dropdown text="Dropdown Button">
            <template v-slot:button-content>
              <i class="fa fa-user" aria-hidden="true"></i>
            </template>
            <b-dropdown-header>Seeccione el estado</b-dropdown-header>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              ><i class="fa fa-user" aria-hidden="true"
                ><sup
                  ><i
                    class="fa fa-check-circle"
                    aria-hidden="true"
                  ></i></sup></i
            > Activos
              </b-dropdown-item>
            <b-dropdown-item
              > <i class="fa fa-user" aria-hidden="true"
                ><sup
                  ><i
                    class="fa fa-hourglass"
                    aria-hidden="true"
                  ></i></sup></i> inactivos
             </b-dropdown-item
            ><b-dropdown-item
              ><i class="fa fa-user" aria-hidden="true"
                ><sup><i class="fa fa-times" aria-hidden="true"></i></sup
              ></i>
              Bloqueados</b-dropdown-item
            >
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
  name: "NavUsuarios"
};
</script>

<style lang="scss" scoped>
</style>