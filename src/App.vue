<template>
  <div>
    <b-toast id="toast" static no-auto-hide> </b-toast>
    <LateralNav v-if="!loginVisible" />
    <b-container fluid class="contenido">
      <SupNav></SupNav>
      <b-container fluid>
        <Breadcrumb v-if="!loginVisible" />
        <transition name="fade">
          <router-view />
        </transition>
      </b-container>
    </b-container>
    <BannerFooter v-if="!loginVisible" />
  </div>
</template>

<script>
import SupNav from "@/components/SupNav.vue";
import LateralNav from "@/components/LateralNav.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import BannerFooter from "@/components/BannerFooter.vue";
import { mapMutations, mapGetters } from "vuex";
export default {
  components: {
    SupNav,
    LateralNav,
    Breadcrumb,
    BannerFooter
  },
  computed: {
    ...mapGetters(["loginVisible"])
  },
  methods: {
    ...mapMutations(["cargarDatos"])
  },
  created: function() {
    let datos = JSON.parse(localStorage.getItem("PeliculasDB"));
    if (datos != null) {
      this.cargarDatos(datos);
    }
  }
};
</script>

<style scoped>
.contenido {
  padding-left: 5rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
