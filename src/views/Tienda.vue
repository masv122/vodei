<template>
  <div class="ofertas">
    <Jumbotron />
    <h3 class="display-4">Pelicula</h3>
    <div class="row tabla_ofertas">
      <b-col cols="4" class="cajon_ofertas">
        <OfertaPelicula />
      </b-col>
    </div>
    <h3 class="display-4">Oferta Especial</h3>
    <div class="row tabla_ofertas">
      <b-col cols="6" class="cajon_ofertas_especial">
        <OfertaEspecial />
      </b-col>
    </div>
    <h3 class="display-4">Series</h3>
    <div class="row tabla_ofertas">
      <section class="col-md-3 cajon_ofertas-serie">
        <OfertaSerie />
      </section>
    </div>
    <h3 class="display-4">Streaming</h3>
    <div class="row tabla_ofertas">
      <section class="col-md-4 cajon_suscripciones">
        <OfertaSuscripcion />
      </section>
    </div>
  </div>
</template>

<script>
import Jumbotron from "@/components/Jumbotron.vue";
import OfertaPelicula from "@/components/OfertasTienda/OfertaPelicula.vue";
import OfertaEspecial from "@/components/OfertasTienda/OfertaEspecial.vue";
import OfertaSerie from "@/components/OfertasTienda/OfertaSerie.vue";
import OfertaSuscripcion from "@/components/OfertasTienda/OfertaSuscripcion.vue";
import { mapMutations } from "vuex";

export default {
  name: "Tienda",
  components: {
    Jumbotron,
    OfertaPelicula,
    OfertaEspecial,
    OfertaSerie,
    OfertaSuscripcion
  },
  methods: {
    ...mapMutations(["addBreadcrumb"])
  },
  created() {
    this.addBreadcrumb([
      {
        text: "Home",
        to: { name: "Home" }
      },
      {
        text: "Tienda",
        to: { name: "Tienda" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
.ofertas {
  text-align: center;
}
.display-4 {
  margin-top: 4rem;
  background-color: #f8f9fa;
}
.tabla_ofertas {
  margin: auto;
  padding-top: 50px;
}

.cajon_ofertas {
  float: left;
  margin-top: 20px;
  border: 1px solid #85c34a;
  background: #30353c;
}

.cajon_ofertas_especial {
  float: left;
  margin-top: 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.9);
  z-index: 500;
}

.cajon_ofertas-serie {
  float: left;
  margin-top: 20px;
  border: 1px solid #ffc107;
  background: #3c3030;
}

.cajon_suscripciones {
  float: left;
  margin-top: 20px;
  border: 1px solid #30353c;
  background: #291135;
  box-shadow: 0 0 8px rgba(141, 90, 23, 0.9);
}
</style>