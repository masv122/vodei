<template>
  <div>
    <b-toast id="toast" static no-auto-hide> </b-toast>
    <CargaServidor v-if="!servidor" />
    <div v-else>
      <LateralNav v-if="!loginVisible" />
      <b-container fluid class="contenido">
        <SupNav></SupNav>
        <b-container fluid>
          <Breadcrumb v-if="!loginVisible" />
          <b-overlay :show="loadingViews" rounded fixed spinner-variant="primary">
            <transition name="fade">
              <router-view />
            </transition>
          </b-overlay>
        </b-container>
      </b-container>
      <BannerFooter v-if="!loginVisible" />
    </div>
  </div>
</template>

<script>
import SupNav from "@/components/SupNav.vue";
import LateralNav from "@/components/LateralNav.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import BannerFooter from "@/components/BannerFooter.vue";
import CargaServidor from "@/components/loading/CargaServidor.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    SupNav,
    LateralNav,
    Breadcrumb,
    BannerFooter,
    CargaServidor
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["loginVisible", "servidor", "loadingViews"])
  },
  methods: {
    ...mapActions(["updateServidor"])
  },
  created() {
    this.updateServidor();
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
