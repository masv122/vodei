<template>
  <div>
    <b-card class="">
      <div class="float-right">
        <b-dropdown class="mr-5" right>
          <b-dropdown-header>This is a heading</b-dropdown-header>
          <b-dropdown-item>Action</b-dropdown-item>
          <b-dropdown-item>Another action</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item>Something else here...</b-dropdown-item>
          <b-dropdown-item disabled>Disabled action</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="text-center mb-5">
        <b-avatar
          variant="white"
          size="10rem"
          :src="require(`@/assets/vodei_logo.png`)"
        ></b-avatar>
        <b-avatar variant="info" class="icono_suscripcion" size="5rem"
          ><custom-icon
            ><i class="fa fa-play" aria-hidden="true"></i></custom-icon
        ></b-avatar>
      </div>
      <UsuarioDatos />
      <UsuarioSuscripcion />
      <h4>Suscripcion Activa</h4>
      <div role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-1 variant="white"
              ><i class="fas fa-money-bill    "></i> Pagos Realizados</b-button
            >
          </b-card-header>
          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body>
              <TablaPagos />
              <Paginacion />
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-2 variant="white"
              ><i class="fa fa-comment" aria-hidden="true"></i> Comentarios Enviados</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <Comentarios />
              <Paginacion />
            </b-card-body>
          </b-collapse>
        </b-card>

        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.accordion-3 variant="white"
              ><i class="fa fa-envelope" aria-hidden="true"></i> Mensajes Enviados</b-button
            >
          </b-card-header>
          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <ListaMensajes />
              <Paginacion />
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-card>
  </div>
</template>

<script>
import UsuarioDatos from "@/components/UsuarioDatos.vue";
import UsuarioSuscripcion from "@/components/UsuarioSuscripcion.vue";
import TablaPagos from "@/components/TablaPagos.vue";
import Paginacion from "@/components/Paginacion.vue";
import Comentarios from "@/components/Comentarios.vue";
import ListaMensajes from "@/components/ListaMensajes.vue";
export default {
  name: "UsuarioDetalles",
  data() {
    return {};
  },
  components: {
    UsuarioDatos,
    UsuarioSuscripcion,
    TablaPagos,
    Paginacion,
    Comentarios,
    ListaMensajes
  }
};
</script>

<style scoped>
.fa-play{
    font-size: 3.1rem;
    margin-left: 0.4rem;
}
</style>