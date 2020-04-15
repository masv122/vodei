<template>
  <div class="">
    <b-navbar toggleable="md" type="light" variant="white">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand>
          <img
            src="@/assets/vodei_logo_completo.png"
            class="d-inline-block align-top"
            height="60px"
            alt
          />
        </b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item :to="{name: 'Home'}" exact>Inicio</b-nav-item>
            <b-nav-item>Sitio Web</b-nav-item>
            <b-nav-item>Documentacion</b-nav-item>
          </b-navbar-nav>
         <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <span>Administrador</span>
              </template>
              <b-dropdown-item :to="{name: 'Login'}" exact>Perfil</b-dropdown-item>
              <b-dropdown-item href="#">Salir</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>