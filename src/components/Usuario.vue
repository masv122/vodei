<template>
  <div>
    <b-card class="text-center shadow">
      <b-avatar
        variant="white"
        size="5rem"
        :src="require(`@/assets/vodei_logo.png`)"
      ></b-avatar>
      <b-avatar variant="info" class="icono_suscripcion" size="2.5rem"
        ><custom-icon><i class="fa fa-play" aria-hidden="true"></i></custom-icon
      ></b-avatar>
      <h6 class="display-4">Nombre</h6>
      <h6 class="text-secondary">usuario</h6>
      <b-list-group>
        <b-list-group-item class="border">
          Estado
        </b-list-group-item>
        <b-list-group-item class="border">
          Fecha de ingreso
        </b-list-group-item>
      </b-list-group>
      <b-button :to="{name: 'Usuario Detalles'}" block variant="primary" class="mt-2" href="">
        Detalles
      </b-button>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Usario"
};
</script>

<style  scoped>
</style>