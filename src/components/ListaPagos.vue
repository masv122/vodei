<template>
  <div>
    <b-list-group>
      <b-list-group-item>
        <b-card header-tag="header" footer-tag="footer">
          <template v-slot:header>
            Realizado por
          </template>
          <b-card-text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, nam
            asperiores. Tempora neque molestiae dolore sit repudiandae
            consequuntur. Cupiditate, quidem perspiciatis! Non natus quidem ut
            odio? Voluptates hic placeat nihil.
          </b-card-text>
          <template v-slot:footer>
           fecha
          </template>
        </b-card>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "ListaPagos"
};
</script>

<style lang="scss" scoped>
</style>