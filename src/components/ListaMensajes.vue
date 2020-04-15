<template>
  <div>
    <b-list-group>
      <Mensaje/>
    </b-list-group>
  </div>
</template>

<script>
import Mensaje from "@/components/Mensaje.vue";
export default {
  name: "ListaMensajes",
  components: {
      Mensaje,
  },
};
</script>

<style lang="scss" scoped>
</style>