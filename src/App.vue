<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col v-if="!loginVisible" class="navLateral bg-dark shadow" cols="1">
          <LateralNav/>
        </b-col>
        <b-col class="contenido pb-5" :cols="loginVisible ? 12 : 11">
          <SupNav></SupNav>
          <b-container fluid>
            <Breadcrumb v-if="!loginVisible"/>
            <router-view />
          </b-container>
        </b-col>
      </b-row>
    </b-container>
    <BannerFooter v-if="!loginVisible"/>
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
.contenido,
.navLateral {
  padding-left: unset;
  padding-right: unset;
}
.navLateral {
  padding-left: 2rem;
}
</style>
