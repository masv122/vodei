<template>
  <div>
    <b-card
      :title="titulo"
      header-tag="header"
      footer-tag="footer"
      align="center"
      :img-src="`http://localhost:3000/uploads/portadas/${portada}`"
      style="width: 100%;"
      class="shadow"
    >
      <b-card-text v-if="tContenido === 1">Numero de temporadas: {{nTemp}}</b-card-text>
      <template v-slot:footer v-if="detalles">
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
    },
    nTemp: {
      type: Number,
      default: 0
    },
    detalles: {
      type: Boolean,
      default: true
    },
    tContenido: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style lang="scss" scoped>

</style>