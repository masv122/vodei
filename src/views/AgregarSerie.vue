<template>
  <div>
    <b-container>
      <h1 class="display-4 my-3">
        <i class="fa fa-plus" aria-hidden="true"></i> Agregar Serie
      </h1>
      <form>
        <b-form-row>
          <b-col cols-sm="12" cols-md="6">
            <b-form-group>
              <b-form-group
                id="input-group-titulo"
                label="Titulo:"
                label-for="titulo"
              >
                <b-form-input
                  id="titulo"
                  type="text"
                  required
                  placeholder="Ingrese Titulo"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-idioma"
                label="Idioma:"
                label-for="idioma"
              >
                <b-form-select
                  id="idioma"
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-subtitulo"
                label="Subtitulo:"
                label-for="input-1"
              >
                <b-form-select
                  id="subtitulo"
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-productora"
                label="Productora:"
                label-for="productora"
              >
                <b-form-input
                  id="productora"
                  type="text"
                  required
                  placeholder="Ingrese Productora"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-actores"
                label="Actores:"
                label-for="input-1"
              >
                <b-form-input
                  id="actores"
                  type="text"
                  required
                  placeholder="Ingrese Actores"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group>
                <div class="mt-1">
                  Portada Seleccionada: {{ file ? file.name : "" }}
                </div>
                <b-form-file
                  v-model="file"
                  accept="image/*"
                  :state="Boolean(file)"
                  placeholder="Selecciona una portada o arrastrala aqui..."
                  drop-placeholder="Arrastrala aqui..."
                ></b-form-file>
              </b-form-group>
            </b-form-group>
          </b-col>
          <b-col cols-sm="12" cols-md="6">
            <b-form-group>
              <b-form-group
                id="input-group-titulo-original"
                label="Titulo original:"
                label-for="titulo-original"
              >
                <b-form-input
                  id="titulo-original"
                  type="text"
                  required
                  placeholder="Ingrese Titulooriginal"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-genero"
                label="Genero:"
                label-for="genero"
              >
                <b-form-select
                  id="genero"
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-pais"
                label="Pais:"
                label-for="pais"
              >
                <b-form-select
                  id="pais"
                  v-model="selected"
                  :options="options"
                ></b-form-select>
              </b-form-group>
              <b-form-group
                id="input-group-fecha"
                label="Fecha de estreno:"
                label-for="fecha"
              >
                <b-form-input
                  id="fecha"
                  type="text"
                  required
                  placeholder="Ingrese Fecha de estreno"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-director"
                label="Director:"
                label-for="director"
              >
                <b-form-input
                  id="director"
                  type="text"
                  required
                  placeholder="Ingrese Director"
                >
                </b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-duracion"
                label="Duracion:"
                label-for="pais"
              >
                <b-row>
                  <b-col cols="6">
                    <b-form-select
                      id="pais"
                      v-model="selected"
                      :options="options"
                    ></b-form-select>
                  </b-col>
                  <b-col cols="6">
                    <b-form-select
                      id="pais"
                      v-model="selected"
                      :options="options"
                    ></b-form-select>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-form-group>
          </b-col>
        </b-form-row>
        <b-form-group
          id="input-group-sinopsis"
          label="Sinopsis:"
          label-for="sinopsis"
        >
          <b-form-textarea
            id="sinopsis"
            v-model="text"
            placeholder="Ingrese sinopsis..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
        <b-form-group align="center">
          <b-button block type="submit" variant="primary">
            Agregar
          </b-button>
          <b-button block type="reset" variant="danger">
            Restablecer
          </b-button>
        </b-form-group>
      </form>
    </b-container>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "Serie",
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
      filtros: false,
      file: null,
      file2: null,
      text: ""
    };
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
        text: "Agregar Serie",
        to: { name: "Agregar Serie" }
      }
    ]);
  }
};
</script>

<style lang="scss" scoped>
</style>