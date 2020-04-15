<template>
  <div>
    <b-container class="CreditosLogin mt-5">
      <div class="my-4">
        <img
          src="@/assets//vodei_logo_completo.png"
          alt="logoVodei"
          class="logoVodei"
        />
      </div>
      <div>
        <h4 id="creditos">Desarrollado por</h4>
        <img
          src="@/assets//logo_icono_lunar_software.png"
          width="100px"
          alt="logo_lunar_software"
        />
                <img
          src="@/assets/logo_letras_lunar_software.png"
          width="100px"
          alt="logo_lunar_software"
        />
      </div>
      <div class="my-4">
        <h4 class="mb-4">Potenciado por</h4>
        <b-row>
          <b-col class="FrameWorks " md="4">
            <b-card
              border-variant="success"
              text-variant="dark"
              title="Vue.js"
              header-tag="header"
              footer-tag="footer"
              class="shadow"
            >
              <i class="fab fa-vuejs"></i>
              <template v-slot:footer>
                <b-button variant="secondary" href="">
                  Pagina Oficial <i class="fa fa-link" aria-hidden="true"></i>
                </b-button>
              </template>
            </b-card>
          </b-col>
          <b-col class="FrameWorks " md="4">
            <b-card
              border-variant="primary"
              text-variant="dark"
              title="Bootstrap"
              header-tag="header"
              footer-tag="footer"
              class="shadow"
            >
              <i class="fab fa-bootstrap"></i>
              <template v-slot:footer>
                <b-button variant="secondary" href="">
                  Pagina Oficial <i class="fa fa-link" aria-hidden="true"></i>
                </b-button>
              </template>
            </b-card>
          </b-col>
          <b-col class="FrameWorks " md="4">
            <b-card
              border-variant="info"
              text-variant="dark"
              title="Node.js"
              header-tag="header"
              footer-tag="footer"
              class="shadow"
            >
              <i class="fab fa-node    "></i>
              <template v-slot:footer>
                <b-button variant="secondary" href="">
                  Pagina Oficial <i class="fa fa-link" aria-hidden="true"></i>
                </b-button>
              </template>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div>
        <h6>
          <sup><i class="fa fa-copyright" aria-hidden="true"></i></sup> Vodei
          Enterteiment 2020 todos los derechos reservados
        </h6>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logoVodei {
  width: 15em;
}

.FrameWorks {
  opacity: 0.8;
}

.FrameWorks:hover {
  opacity: unset;
}

.fab {
  font-size: 5rem;
  opacity: 0.8;
  color: #000;
}
</style>