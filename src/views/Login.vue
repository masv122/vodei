<template>
  <div class="home text-center">
    <h6 class="display-4">¡Hola!</h6>
    <h3>Bienvenido a Administrador Vodei</h3>
    <h4>Escribe tus datos para ingresar al sistema</h4>
    <PanelLogin/>
    <CreditosLogin/>
  </div>
</template>

<script>
import PanelLogin from '@/components/LoginComp/PanelLogin.vue'
import CreditosLogin from '@/components/LoginComp/CreditosLogin.vue'
import { mapMutations } from "vuex";
export default {
  name: 'Login',
  components: {
    PanelLogin,
    CreditosLogin
  },
  methods: {
    ...mapMutations(["setloginVisible"])
  },
  created () {
    this.setloginVisible(true);
  },
  destroyed () {
    this.setloginVisible(false);
  },
}
</script>