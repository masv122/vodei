<template>
  <div>
    <b-toast id="toast" static no-auto-hide> </b-toast>
    <b-overlay
      v-if="!servidor"
      show
      rounded="sm"
      spinner-type="grow"
      class="overlay"
    >
      <template v-slot:overlay>
        <div class="text-center" v-if="!conErr">
          <h4 class="display-4 mt-4">
            Conectando con el servidor...
          </h4>
          <b-img
            src="@/assets/vodei server logo.png"
            class="serverLogo text-center mt-4"
            fluid
            alt="Responsive image"
          ></b-img>
          <div class="mt-4">
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
            <b-spinner
              variant="success"
              type="grow"
              label="Spinning"
            ></b-spinner>
          </div>
        </div>
        <div class="text-center" v-else>
          <h4 class="display-4 mt-4">
            Conexion Fallida
          </h4>
          <b-img
            src="@/assets/vodei server logo.png"
            class="serverLogo text-center mt-4"
            fluid
            alt="Responsive image"
          ></b-img>
          <div class="mt-3">
            <b-button variant="success" class="ml-2" @click="updateServidor">
              <i class="fas fa-redo    "></i> Reconectar
            </b-button>
          </div>
        </div>
      </template>
    </b-overlay>
    <div v-if="servidor">
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
    return {};
  },
  computed: {
    ...mapGetters(["loginVisible", "servidor", "conErr"])
  },
  methods: {
    ...mapMutations(["cargarDatos"]),
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
.overlay {
  margin-top: 18rem;
}
.conectando {
  display: inline-block;
  justify-content: center;
}
.serverLogo {
  width: 5rem;
}
</style>
