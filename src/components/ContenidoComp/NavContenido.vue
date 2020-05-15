<template>
  <div>
    <b-container class="shadow rounded" fluid>
      <b-nav class="my-2" pills>
        <b-nav-item
          class="mt-4"
          :active="botones[0] ? true : false"
          @click="
            cargarPeliculas(0).then(() => {
              updateFiltros(catalogo);
            });
            setActivo(0);
            modifyTContenido(0);
            resetFiltros();
          "
        >
          Estrenos</b-nav-item
        >
        <b-nav-item
          class="mt-4"
          :active="botones[1] ? true : false"
          @click="
            cargarSeries().then(() => {
              updateFiltros(catalogo);
            });
            setActivo(1);
            modifyTContenido(1);
            resetFiltros();
          "
        >
          Series</b-nav-item
        >
        <b-nav-item
          class="mt-4"
          :active="botones[2] ? true : false"
          @click="
            cargarPeliculas(1).then(() => {
              updateFiltros(catalogo);
            });
            resetFiltros();
            setActivo(2);
          "
        >
          Contemporaneas</b-nav-item
        >
        <div class="border rounded p-1">
          <b-dropdown-header
            >Selecciona el tipo de contenido a agregar</b-dropdown-header
          >
          <b-dropdown text="Agregar Peliculas">
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              :to="{ name: 'Agregar Pelicula', params: { tipo: 0 } }"
              >Estreno</b-dropdown-item
            >
            <b-dropdown-item
              :to="{ name: 'Agregar Pelicula', params: { tipo: 1 } }"
              >Contempornea</b-dropdown-item
            >
          </b-dropdown>
          <b-dropdown text="Agregar Series">
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item :to="{ name: 'Agregar Serie' }"
              >Serie</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Agregar Temporada' }"
              >Temporada</b-dropdown-item
            >
            <b-dropdown-item :to="{ name: 'Agregar Capitulo' }"
              >Capitulo</b-dropdown-item
            >
          </b-dropdown>
        </div>
        <b-nav-form class="ml-auto">
          <b-input-group>
            <template v-slot:append>
              <b-button-group>
                <b-button variant="outline-info" @click="filtrar()"
                  ><i class="fa fa-search" aria-hidden="true"></i>
                  Buscar</b-button
                >
                <b-button v-on:click="filtros = !filtros" variant="warning"
                  ><i class="fa fa-filter" aria-hidden="true"></i>
                  Filtrar</b-button
                >
              </b-button-group>
            </template>
            <b-form-input
              type="text"
              placeholder="Buscar"
              v-model="findText"
              @keyup="filtrar()"
            ></b-form-input>
          </b-input-group>
        </b-nav-form>
      </b-nav>
      <div class="nav_bar_contenido_y_filtro" v-show="filtros">
        <div class="form-inline my-2 justify-content-center">
          <b-input-group class="m-1" size="sm" prepend="Idioma">
            <div>
              <b-form-select
                v-model="idiomaSel"
                :options="idioma"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Genero">
            <div>
              <b-form-select
                v-model="generoSel"
                :options="genero"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group v-if="!botones[1]" class="m-1" size="sm" prepend="Director">
            <div>
              <b-form-select
                v-model="directorSel"
                :options="director"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Pais">
            <div>
              <b-form-select
                v-model="paisSel"
                :options="pais"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Productora">
            <div>
              <b-form-select
                v-model="productoraSel"
                :options="productora"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Año">
            <div>
              <b-form-select
                v-model="añoSel"
                :options="año"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "NavContenido",
  data() {
    return {
      filtros: false,
      idiomaSel: "",
      generoSel: "",
      directorSel: "",
      paisSel: "",
      productoraSel: "",
      añoSel: "",
      botones: {
        0: true,
        1: false,
        2: false
      },
      findText: ""
    };
  },
  computed: {
    ...mapGetters("Catalogo", ["series", "peliculas", "catalogo"]),
    ...mapGetters("filtros", [
      "idioma",
      "genero",
      "director",
      "pais",
      "productora",
      "año"
    ])
  },
  methods: {
    ...mapMutations(["addBreadcrumb"]),
    ...mapMutations("Catalogo", ["modifyTContenido", "filtrarContenido"]),
    ...mapMutations("filtros", ["updateFiltros"]),
    ...mapActions("Catalogo", ["cargarPeliculas", "cargarSeries"]),
    setActivo(boton) {
      for (var item in this.botones) {
        if (item == boton) {
          this.botones[item] = true;
        } else {
          this.botones[item] = false;
        }
      }
    },
    filtrar() {
      if (this.botones[0]) {
        this.filtrarContenido(this.getParams(this.peliculas));
      } else if (this.botones[1]) {
        this.filtrarContenido(this.getParams(this.series));
      } else {
        this.filtrarContenido(this.getParams(this.peliculas));
      }
    },
    resetFiltros() {
      this.idiomaSel = "";
      this.generoSel = "";
      this.directorSel = "";
      this.paisSel = "";
      this.productoraSel = "";
      this.añoSel = "";
    },
    getParams(contenido) {
      return {
        contenido: contenido,
        texto: this.findText,
        idioma: this.idiomaSel,
        genero: this.generoSel,
        director: this.directorSel,
        pais: this.paisSel,
        productora: this.productoraSel,
        año: this.añoSel
      };
    }
  }
};
</script>

<style lang="scss" scoped>
</style>