<template>
  <div>
    <b-toast id="toast" static no-auto-hide> </b-toast>
    <b-alert variant="danger" class="text-center" :show="servidor">
      <i class="fa fa-times" aria-hidden="true"></i>
      Servidor fuera de linea
    </b-alert>
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
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  components: {
    SupNav,
    LateralNav,
    Breadcrumb,
    BannerFooter
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["loginVisible", "servidor"])
  },
  methods: {
    ...mapMutations(["cargarDatos"]),
    ...mapActions(["updateServidor"]),
  },
  created() {

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
