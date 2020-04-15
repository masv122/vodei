<template>
  <div class="comentario shadow rounded pt-2 mt-4">
    <b-nav>
      <div class="d-flex mb-2 ml-5">
        <b-nav-item>
          <img src="@/assets/vodei_icon_32.png" alt=""/>
        </b-nav-item>
        <b-nav-item disabled>Nombre</b-nav-item>
      </div>
      <b-dropdown
        class="ml-auto mr-5"
        variant="link"
        no-caret
        toggle-class="text-decoration-none"
        dropleft
        text="Dropdown Button"
      >
        <template v-slot:button-content>
          <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
        </template>
        <b-dropdown-header>Filtros</b-dropdown-header>
        <b-dropdown-item>Action</b-dropdown-item>
        <b-dropdown-item>Another action</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item>Something else here...</b-dropdown-item>
        <b-dropdown-item disabled>Disabled action</b-dropdown-item>
      </b-dropdown>
    </b-nav>
    <div class="text-left w-50 ml-5 pl-5">
      <small class="badge badge-pill badge-info"
        ><i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i>
        <i class="fa fa-star" aria-hidden="true"></i
      ></small>
      <small class="ml-3">00/00/00</small>
    </div>
    <div class="mt-3 p-3">
      <blockquote class="blockquote">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti enim
        laborum at quaerat voluptate fugiat est dolorem expedita tempore culpa
        perspiciatis molestiae minus, voluptas alias inventore quis? Ipsa, eos
        voluptas!
        <footer class="blockquote-footer">Apreciacion</footer>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: ""
};
</script>

<style lang="scss" scoped>
</style>