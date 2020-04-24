<template>
  <div>
    <b-container class="border rounded" fluid>
      <b-nav class="my-2" pills>
        <b-nav-item class="mt-4" active>Estrenos</b-nav-item>
        <b-nav-item class="mt-4">Series</b-nav-item>
        <b-nav-item class="mt-4">Contemporaneas</b-nav-item>
        <div class="border rounded p-1">
          <b-dropdown-header
            >Selecciona el tipo de contenido a agregar</b-dropdown-header
          >
          <b-dropdown text="Agregar Peliculas">
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item :to="{name: 'Agregar Pelicula', params: {tipo: 0} }">Estreno</b-dropdown-item>
            <b-dropdown-item :to="{name: 'Agregar Pelicula', params: {tipo: 1} }">Contempornea</b-dropdown-item>
          </b-dropdown>
          <b-dropdown text="Agregar Series">
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item :to="{name: 'Agregar Serie'}">Serie</b-dropdown-item>
            <b-dropdown-item :to="{name: 'Agregar Serie'}">Temporada</b-dropdown-item>
            <b-dropdown-item :to="{name: 'Agregar Serie'}">Capitulo</b-dropdown-item>
          </b-dropdown>
        </div>
        <b-nav-form class="ml-auto">
          <b-input-group>
            <template v-slot:append>
              <b-button-group>
                <b-button variant="outline-info"
                  ><i class="fa fa-search" aria-hidden="true"></i>
                  Buscar</b-button
                >
                <b-button v-on:click="filtros = !filtros" variant="warning"
                  ><i class="fa fa-filter" aria-hidden="true"></i>
                  Filtrar</b-button
                >
              </b-button-group>
            </template>
            <b-form-input type="text" placeholder="Buscar"> </b-form-input>
          </b-input-group>
        </b-nav-form>
      </b-nav>
      <div></div>
      <div class="nav_bar_contenido_y_filtro" v-show="filtros">
        <div class="form-inline my-2 justify-content-center">
          <hr />
          <b-input-group class="m-1" size="sm" prepend="Idioma">
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Genero">
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Subtitulo">
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Pais">
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Productora">
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Año">
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
          <b-input-group class="m-1" size="sm" prepend="Valoracion">
            <div>
              <b-form-select
                v-model="selected"
                :options="options"
                size="sm"
              ></b-form-select>
            </div>
          </b-input-group>
        </div></div
    ></b-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "NavFiltros",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "a", text: "This is First option" },
        { value: "b", text: "Selected Option" },
        { value: { C: "3PO" }, text: "This is an option with object value" },
        { value: "d", text: "This one is disabled", disabled: true }
      ],
      filtros: false
    };
  },
  methods: {
    ...mapMutations(["addBreadcrumb"])
  },
};
</script>

<style lang="scss" scoped>
</style>