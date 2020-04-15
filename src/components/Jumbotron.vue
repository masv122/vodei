<template>
  <div>
      <b-button
        v-show="!visible"
        v-on:click="visible = !visible"
        variant="outline-success"
        href=""
      >
        <i class="fas fa-eye    "></i>
      </b-button>
      <b-button
        v-on:click="visible = !visible"
        v-show="visible"
        variant="outline-danger"
      >
        <i class="fa fa-eye-slash" aria-hidden="true"></i>
      </b-button>

    <transition name="fade">
      <b-jumbotron
        bg-variant="light"
        header="BootstrapVue"
        lead="Bootstrap 4 Components for Vue.js 2"
        class="mb-1 jumbo"
        v-show="visible"
      >
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">Documentacion</b-button>
        <div class="ml-auto"></div>
      </b-jumbotron>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  data() {
    return {
      visible: true
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>