<template>
    <div>
              <b-navbar toggleable="lg" type="light" variant="light">
        <b-container>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">salas 1 a 4</b-nav-item>
              <b-nav-item href="#">Salas 5 a 8</b-nav-item>
              <b-nav-item href="#">Salas 9 a 12</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                ></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit"
                  >Buscar</b-button
                >
              </b-nav-form>

              <b-nav-item-dropdown text="Hora" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

                  <b-nav-item-dropdown text="Estado" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
</template>

<script>
    export default {
        name: 'NavFunciones'
    }
</script>

<style lang="scss" scoped>

</style>