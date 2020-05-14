<template>
  <div>
    <b-row>
      <b-col cols="3" v-for="(elementos, index) in cantidad" :key="index">
        <b-overlay :show="true" rounded="sm">
        <b-card
          footer-tag="footer"
          align="center"
          style="width: 100%;"
          class="shadow"
        >
          <div class="imagen-card rounded mb-3"></div>
          <template v-slot:footer>
            <div class="pie-card"></div>
          </template>
        </b-card>
        </b-overlay>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
    name: "LoadingCatalogo",
    data() {
        return {
            cantidad: 4
        }
    },
};
</script>

<style>
.imagen-card {
  width: 100%;
  height: 200px;
  background-color: #aaa;
}
.pie-card {
  width: 50%;
  height: 25px;
  background-color: #aaa;
  margin: 0 auto;
}
</style>