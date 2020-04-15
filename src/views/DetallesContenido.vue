<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <div class="container mt-4">
            <h5>Sinopsis</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              vel odit magni optio sequi commodi eligendi fugiat possimus omnis.
              Voluptatibus accusamus distinctio assumenda ab architecto, id
              blanditiis aliquam aut minima?
            </p>
          </div>
          <div class="comentarios mt-4">
            <h5>Comentarios Recibidos</h5>
            <NavComentarios />
            <Comentarios />
            <Paginacion />
            <hr />
          </div>
        </div>
        <div class="col-md-4">
          <FichaTecnica></FichaTecnica>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FichaTecnica from "@/components/FichaTecnica.vue";
import NavComentarios from "@/components/NavComentarios.vue";
import Comentarios from "@/components/Comentarios.vue";
import Paginacion from "@/components/Paginacion.vue";
import { mapMutations } from "vuex";

export default {
  name: "DetallesContenido",
  components: {
    FichaTecnica,
    NavComentarios,
    Comentarios,
    Paginacion
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
        text: "Contenido",
        to: { name: "Contenido" }
      },
      {
        text: "Detalles Contenido",
        to: { name: "Detalles Contenido" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>