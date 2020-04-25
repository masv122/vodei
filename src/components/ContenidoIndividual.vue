<template>
  <div>
    <b-card
      :title="titulo"
      header-tag="header"
      footer-tag="footer"
      border-variant="info"
      align="center"
      :img-src="`http://localhost:3000/uploads/portadas/${portada}`"
      style="width: 100%;"
    >
      <b-card-text> </b-card-text>
      <template v-slot:footer>
        <b-button :to="{ name: 'Detalles Contenido' }" variant="primary"
          >Detalles</b-button
        >
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "ContenidoIndividual",
  props: {
    titulo: {
      type: String,
      default: ""
    },
    portada: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>

</style>