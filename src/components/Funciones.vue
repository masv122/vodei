<template>
  <div class="text-center">
      <NavFunciones/>
      <h3 class="display-4 my-4">Funciones</h3>
    <b-row>
      <b-col cols="3">
        <b-card
          no-body
          header-tag="header"
          footer-tag="footer"
          header-bg-variant="info"
          footer-bg-variant="secondary"
        >
          <template v-slot:header>
            <h4><b-badge variant="primary">Primera Funcion</b-badge></h4>
          </template>
          <b-list-group>
            <b-list-group-item class="border">Pelicula</b-list-group-item>
            <b-list-group-item class="border">Sala 1</b-list-group-item>
            <b-list-group-item class="border">Hora de Inicio</b-list-group-item>
            <b-list-group-item class="border"
              >Hora de Finazacion</b-list-group-item
            >
          </b-list-group>
          <template v-slot:footer>
            <b-badge variant="success"
              ><i class="fa fa-check" aria-hidden="true"></i
            ></b-badge>
          </template>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          no-body
          header-tag="header"
          footer-tag="footer"
          header-bg-variant="info"
          footer-bg-variant="secondary"
        >
          <template v-slot:header>
            <h4><b-badge variant="warning">Primera Funcion</b-badge></h4>
          </template>
          <b-list-group>
            <b-list-group-item class="border">Pelicula</b-list-group-item>
            <b-list-group-item class="border">Sala 1</b-list-group-item>
            <b-list-group-item class="border">Hora de Inicio</b-list-group-item>
            <b-list-group-item class="border"
              >Hora de Finazacion</b-list-group-item
            >
          </b-list-group>
          <template v-slot:footer>
            <b-badge variant="success"
              ><i class="fa fa-check" aria-hidden="true"></i
            ></b-badge>
          </template>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          no-body
          header-tag="header"
          footer-tag="footer"
          header-bg-variant="info"
          footer-bg-variant="secondary"
        >
          <template v-slot:header>
            <h4><b-badge variant="danger">Primera Funcion</b-badge></h4>
          </template>
          <b-list-group>
            <b-list-group-item class="border">Pelicula</b-list-group-item>
            <b-list-group-item class="border">Sala 1</b-list-group-item>
            <b-list-group-item class="border">Hora de Inicio</b-list-group-item>
            <b-list-group-item class="border"
              >Hora de Finazacion</b-list-group-item
            >
          </b-list-group>
          <template v-slot:footer>
            <b-badge variant="success"
              ><i class="fa fa-check" aria-hidden="true"></i
            ></b-badge>
          </template>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          no-body
          header-tag="header"
          footer-tag="footer"
          header-bg-variant="info"
          footer-bg-variant="secondary"
        >
          <template v-slot:header>
            <h4><b-badge variant="dark">Primera Funcion</b-badge></h4>
          </template>
          <b-list-group>
            <b-list-group-item class="border">Pelicula</b-list-group-item>
            <b-list-group-item class="border">Sala 1</b-list-group-item>
            <b-list-group-item class="border">Hora de Inicio</b-list-group-item>
            <b-list-group-item class="border"
              >Hora de Finazacion</b-list-group-item
            >
          </b-list-group>
          <template v-slot:footer>
            <b-badge variant="success"
              ><i class="fa fa-check" aria-hidden="true"></i
            ></b-badge>
          </template>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import NavFunciones from "@/components/NavFunciones";
export default {
    name: 'Funciones',
    components: {
        NavFunciones,
    },
};
</script>

<style lang="scss" scoped>
</style>