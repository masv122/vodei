<template>
  <div>
    <b-card
      :title="titulo"
      header-tag="header"
      footer-tag="footer"
      border-variant="info"
      align="center"
      :img-src="require(`@/assets/portadas/${portada}`)"
    >
      <b-card-text>
      </b-card-text>
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
        default: "poster-joker-2-1567010576 (1).jpg"
      }
    }
};
</script>

<style lang="scss" scoped>
</style>