<template>
  <div>
    <b-overlay
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
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "CargaServidor",
    computed: {
    ...mapGetters(["servidor", "conErr"])
  },
  methods: {
    ...mapActions(["updateServidor"])
  },
};
</script>

<style>
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