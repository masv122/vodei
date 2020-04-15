<template>
  <div>
    <b-container>
      <div class="overflow-auto">
        <b-pagination-nav
          :link-gen="linkGen"
          :number-of-pages="10"
          use-router
          align="center"
        ></b-pagination-nav>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Paginacion",
  methods: {
    linkGen(pageNum) {
      return pageNum === 1 ? "?" : `?page=${pageNum}`;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>