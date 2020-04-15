<template>
  <div>
    <b-jumbotron fluid bg-variant="secondary">
      <template v-slot:header>
        <b-row>
          <b-col cols="8">
            <h1 class="display-3">Administrador</h1>
            <h1 class="display-3">Vodei</h1>
            <h1 class="display-2">Enterteiment</h1>
          </b-col>
          <b-col cols="4">
            <img
              :src="require(`@/assets/vodei_logo.png`)"
              class="figure-img mt-5"
              width="260px"
              alt="vodei_logo"
            />
          </b-col>
        </b-row>
      </template>
      <template v-slot:lead>
        <p class="lead">Diseñado por LunarSoftware</p>
        <hr class="my-2" />
      </template>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: "JumbotronHome"
};
</script>

<style scoped>
.jumbotron {
  color: #fff;
}

.jumbotron img {
  padding: 0.25rem;
  background-color: #fff;
  border: 0.25rem solid #2a8d11;
  border-radius: 50%;
  max-width: 100%;
  height: auto;
}
</style>