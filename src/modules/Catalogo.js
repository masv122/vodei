import Vue from "vue";
import getFormData from "../mixin/getFormData";
export default {
  namespaced: true,
  state: {
    catalogo: [],
    peliculas: [],
    series: [],
    tipo: "pelicula",
    temporadas: [],
    capitulos: [],
    contenido: null,
    serie: null,
    pelicula: null,
    temporada: null,
    capitulo: null,
    tcontenido: 0,
  },
  mutations: {
    cargarPeliculas(state, peliculas) {
      state.peliculas = peliculas;
      state.catalogo = state.peliculas;
      state.tipo = "pelicula";
    },
    cargarSeries(state, series) {
      state.series = series;
      state.catalogo = state.series;
      state.tipo = "serie";
    },
    updateCatalogo(state, catalogo) {
      state.catalogo = catalogo;
    },
    agregarPelicula(state, pelicula) {
      state.peliculas.push(pelicula);
    },
    agregarSerie(state, serie) {
      state.series.push(serie);
    },
    agregarTemporada(state, temporada) {
      state.temporadas.push(temporada);
    },
    agregarCapitulo(state, capitulo) {
      state.capitulos.push(capitulo);
    },
    filtrarContenido(state, params) {
      state.catalogo = params.contenido.filter(
        (item) =>
          item.Titulo.toLowerCase().includes(params.texto.toLowerCase()) &&
          item.Idioma.toLowerCase().includes(params.idioma.toLowerCase()) &&
          item.Genero.toLowerCase().includes(params.genero.toLowerCase()) &&
          item.Director.toLowerCase().includes(params.director.toLowerCase()) &&
          item.Pais.toLowerCase().includes(params.pais.toLowerCase()) &&
          item.Productora.toLowerCase().includes(
            params.productora.toLowerCase()
          ) &&
          item.Fecha_estreno.toLowerCase().includes(params.año.toLowerCase())
      );
    },
    updateContenido(state, contenido) {
      state.contenido = contenido;
    },
    updateTemporadas(state, temporadas) {
      state.temporadas = temporadas;
    },
    updateCapitulos(state, capitulos) {
      state.capitulos = capitulos;
    },
    modifySerie(state, serie) {
      state.serie = serie;
    },
    modifyPelicula(state, pelicula) {
      state.pelicula = pelicula;
    },
    modifyTContenido(state, tContenido) {
      state.tContenido = tContenido;
    },
    updateTemporada(state, temporada) {
      state.temporada = temporada;
    },
  },
  actions: {
    agregarPelicula: async function({ commit }, pelicula) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/pelicula", getFormData(pelicula), {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("agregarPelicula", pelicula);
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return {
            error: e,
          };
        });
      return resultado;
    },
    agregarSerie: async function({ commit }, serie) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/serie", getFormData(serie), {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("agregarSerie", serie);
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return {
            error: e,
          };
        });
      return resultado;
    },
    agregarTemporada: async function({ commit, dispatch }, temporada) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/temporada", temporada)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("agregarTemporada", temporada);
            dispatch("updateSerie", temporada.id_serie).then((res) => {
              const serie = res;
              serie.nTemp++;
              dispatch("modifySerie", serie);
              dispatch("cargarSeries", null);
              commit("updateContenido", serie);
            });
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return {
            error: e,
          };
        });
      return resultado;
    },
    agregarCapitulo: async function({ commit, dispatch }, capitulo) {
      commit("setCargando", null, { root: true });
      const resultado = await Vue.axios
        .post("/capitulo", capitulo)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("agregarCapitulo", capitulo);
            dispatch("updateSerie", capitulo.idSerie).then((res) => {
              const serie = res;
              serie.nCap++;
              dispatch("modifySerie", serie);
              dispatch("cargarSeries", null);
              commit("updateContenido", serie);
            });
            commit("setCargando", null, { root: true });
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return {
            error: e,
          };
        });
      return resultado;
    },
    cargarPeliculas: async function({ commit }, tipo) {
      commit("setCargandoCatalogo", null, { root: true });
      const peliculas = await Vue.axios
        .get(`/peliculas/${tipo}`)
        .then((res) => {
          if (res.data.error) {
            commit("setCargandoCatalogo", null, { root: true });
            return res.data.error_object;
          } else {
            commit("setCargandoCatalogo", null, { root: true });
            return res.data.peliculas;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("cargarPeliculas", peliculas);
    },
    cargarSeries: async function({ commit }) {
      commit("setCargandoCatalogo", null, { root: true });
      const series = await Vue.axios
        .get("/serie")
        .then((res) => {
          if (res.data.error) {
            commit("setCargandoCatalogo", null, { root: true });
            return res.data.error_object;
          } else {
            commit("setCargandoCatalogo", null, { root: true });
            return res.data.series;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("cargarSeries", series);
    },
    updateTemporadas: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const ruta = id == null ? "/temporada" : `/temporada-serie/${id}`;
      const temporadas = await Vue.axios
        .get(ruta)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return res.data.error.error_object;
          } else {
            commit("setCargando", null, { root: true });
            return res.data.temporadas;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("updateTemporadas", temporadas);
    },
    updateCapitulos: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const ruta = id == null ? "/capitulo" : `/capitulos-temporada/${id}`;
      const capitulos = await Vue.axios
        .get(ruta)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return res.data.error.error_object;
          } else {
            commit("setCargando", null, { root: true });
            return res.data.capitulos;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("updateCapitulos", capitulos);
    },
    modifySerie: async function({ commit }, serie) {
      commit("setCargando", null, { root: true });
      Vue.axios
        .put(`/serie/${serie.id}`, serie)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return res.data.error.error_object;
          } else {
            commit("setCargando", null, { root: true });
            return res.data.temporadas;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("modifySerie", serie);
    },
    updateSerie: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const serie = await Vue.axios
        .get(`/serie/${id}`)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return null;
          } else {
            commit("setCargando", null, { root: true });
            return res.data.serie;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("modifySerie", serie);
      return serie;
    },
    updatePelicula: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const pelicula = await Vue.axios
        .get(`/pelicula/${id}`)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return null;
          } else {
            commit("setCargando", null, { root: true });
            return res.data.pelicula;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("modifyPelicula", pelicula);
      return pelicula;
    },
    updateTemporada: async function({ commit }, id) {
      commit("setCargando", null, { root: true });
      const temporada = await Vue.axios
        .get(`/temporada/${id}`)
        .then((res) => {
          if (res.data.error) {
            commit("setCargando", null, { root: true });
            return null;
          } else {
            commit("setCargando", null, { root: true });
            return res.data.temporada;
          }
        })
        .catch((e) => {
          commit("updateConErr", true, { root: true });
          return e;
        });
      commit("updateTemporada", temporada);
      return temporada;
    },
  },
  getters: {
    catalogo: (state) => state.catalogo,
    series: (state) => state.series,
    peliculas: (state) => state.peliculas,
    contenido: (state) => state.contenido,
    contenidoFiltrado: (state) => state.contenidoFiltrado,
    temporadas: (state) => state.temporadas,
    capitulos: (state) => state.capitulos,
    serie: (state) => state.serie,
    pelicula: (state) => state.pelicula,
    tContenido: (state) => state.tContenido,
    temporada: (state) => state.temporada,
  },
};
