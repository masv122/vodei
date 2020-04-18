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
        :header="titulo"
        :lead="pieTitulo"
        class="mb-1 jumbo"
        v-show="visible"
      >
        <p>{{ parrafo }}</p>
        <b-button variant="success" href="#"><i class="fa fa-book" aria-hidden="true"></i> Documentacion {{ titulo }}</b-button>
        <div class="ml-auto"></div>
      </b-jumbotron>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Jumbotron",
  props: {
    titulo: {
      type: String,
      default: ''
    },
    pieTitulo: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      visible: true,
      parrafo: 'Pára mas informacion visite la documentacion'
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