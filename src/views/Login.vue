<template>
  <div class="home text-center">
    <h6 class="display-4">¡Hola!</h6>
    <h3>Bienvenido a Administrador Vodei</h3>
    <h4>Escribe tus datos para ingresar al sistema</h4>
    <b-row>
    <div>
      <b-img
        class="login_image"
        fluid
        src="@/assets/svg/undraw_Mobile_app_p3ts.svg"
        alt="Responsive image"
      ></b-img>
    </div>
      <b-col cols="12" offset-md="4" md="8">
        <PanelLogin />
        </b-col>
    </b-row>
    <CreditosLogin />
  </div>
</template>

<script>
import PanelLogin from "@/components/LoginComp/PanelLogin.vue";
import CreditosLogin from "@/components/LoginComp/CreditosLogin.vue";
import { mapMutations } from "vuex";
export default {
  name: "Login",
  components: {
    PanelLogin,
    CreditosLogin
  },
  methods: {
    ...mapMutations(["setloginVisible"])
  },
  created() {
    this.setloginVisible(true);
  },
  destroyed() {
    this.setloginVisible(false);
  }
};
</script>

<style scoped>
.login_image {
  position: absolute;
  height: 30rem;
  z-index: -1;
}
</style>