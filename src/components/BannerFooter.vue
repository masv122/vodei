<template>
  <div>
    <footer class="bg-secondary text-dark banner_footer">
      <b-container fluid>
        <b-row>
          <b-col cols="4">
            <div class="frameworks pr-5">
                <i class="fab fa-vuejs    mx-3"></i>
                <i class="fab fa-bootstrap mx-3"></i>
                <i class="fab fa-node-js   mx-3 "></i>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="derechos">
              <h6>
                <sup><i class="fa fa-copyright" aria-hidden="true"></i></sup>
                Vodei Enterteiment 2020 todos los derechos reservados
              </h6>
            </div>
          </b-col>
          <b-col cols="4">
            <div class="creditos pl-5 pt-2">
              <img
                src="@/assets/logo_icono_lunar_software.png"
                width="40px"
                alt="logo_lunar_software"
              />
              <img
                src="@/assets/logo_letras_lunar_software.png"
                width="160px"
                alt="logo_lunar_software"
              />
            </div>
          </b-col>
        </b-row>
      </b-container>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BannerFooter"
};
</script>

<style scoped>
.banner_footer {
  width: 100%;
  height: 60px;
  text-align: center;
  position: -ms-page;
}
.derechos, .frameworks, .creditos{
  color: #fff;

}
.derechos{
  padding-top: 0.5rem;
}
.frameworks{
  font-size: 2rem;
}
.creditos img{
  padding-left: 0.5rem;
}
</style>