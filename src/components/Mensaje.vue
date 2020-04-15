<template>
  <div>
    <b-list-group-item href="#">
      <b-container fluid>
        <b-row>
          <b-col cols="1" class="pt-4 pl-4">
            <b-avatar variant="info" size="3rem" :src="require(`@/assets/vodei_icon_32.png`)"></b-avatar>
          </b-col>
          <b-col cols="10">
            <b-link><h4>Remitente</h4></b-link>
            <h6>Asunto</h6>
            <p>Cuerpo</p>
          </b-col>
          <b-col cols="1" class="text-center">
              <div class="pt-2 mb-2">Fecha</div>
              <div class="pt-1 estado"><i class="fa fa-envelope" aria-hidden="true"></i></div>
          </b-col>
        </b-row>
      </b-container>
    </b-list-group-item>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Mensaje",
  methods: {
    ...mapMutations(["addBreadcrumb"])
  },
  created() {
    this.addBreadcrumb([
      {
          text: 'Home',
          to : { name : "Home"}
      },
      { 
        text: "Mensajes", 
        to: { name: "Mensajes" } 
      }
    ]);
  }
};
</script>

<style scoped>
.estado{
    font-size: 2rem;
}
</style>