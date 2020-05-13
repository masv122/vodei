import Vue from "vue";
import getFormData from "../mixin/getFormData";
export default {
  namespaced: true,
  state: {
    catalogo: [],
    peliculas: [],
    series: [],
    temporadas: [],
    capitulos: [],
    contenido: null,
    serie: null,
    temporada: null,
    capitulo: null,
    tcontenido: 0,
  },
  mutations: {
    cargarPeliculas(state, peliculas) {
      state.peliculas = peliculas;
      state.catalogo = state.peliculas;
    },
    cargarSeries(state, series) {
      state.series = series;
      state.catalogo = state.series;
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
      state.catalogo = params.contenido.filter((item) =>
        item.Titulo.toLowerCase().includes(params.texto.toLowerCase())
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
    modifyTContenido(state, tContenido) {
      state.tContenido = tContenido;
    },
    updateTemporada(state, temporada) {
      state.temporada = temporada;
    },
  },
  actions: {
    agregarPelicula: async function({ commit }, pelicula) {
      const resultado = await Vue.axios
        .post("/pelicula", getFormData(pelicula), {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.error) {
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("agregarPelicula", pelicula);
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          return {
            error: e,
          };
        });
      return resultado;
    },
    agregarSerie: async function({ commit }, serie) {
      const resultado = await Vue.axios
        .post("/serie", getFormData(serie), {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.data.error) {
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("agregarSerie", serie);
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          return {
            error: e,
          };
        });
      return resultado;
    },
    agregarTemporada: async function({ commit, dispatch }, temporada) {
      const resultado = await Vue.axios
        .post("/temporada", temporada)
        .then((res) => {
          if (res.data.error) {
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
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          return {
            error: e,
          };
        });
      return resultado;
    },
    agregarCapitulo: async function({ commit, dispatch }, capitulo) {
      const resultado = await Vue.axios
        .post("/capitulo", capitulo)
        .then((res) => {
          if (res.data.error) {
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
            return {
              error: res.data.error,
            };
          }
        })
        .catch((e) => {
          return {
            error: e,
          };
        });
      return resultado;
    },
    cargarPeliculas: async function({ commit }, tipo) {
      const peliculas = await Vue.axios
        .get(`/peliculas/${tipo}`)
        .then((res) => {
          if (res.data.error) {
            return res.data.error_object;
          } else {
            return res.data.peliculas;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("cargarPeliculas", peliculas);
    },
    cargarSeries: async function({ commit }) {
      const series = await Vue.axios
        .get("/serie")
        .then((res) => {
          if (res.data.error) {
            return res.data.error_object;
          } else {
            return res.data.series;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("cargarSeries", series);
    },
    updateTemporadas: async function({ commit }, id) {
      const ruta = id == null ? "/temporada" : `/temporada-serie/${id}`;
      const temporadas = await Vue.axios
        .get(ruta)
        .then((res) => {
          if (res.data.error) {
            return res.data.error.error_object;
          } else {
            return res.data.temporadas;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("updateTemporadas", temporadas);
    },
    updateCapitulos: async function({ commit }, id) {
      const ruta = id == null ? "/capitulo" : `/capitulos-temporada/${id}`;
      const capitulos = await Vue.axios
        .get(ruta)
        .then((res) => {
          if (res.data.error) {
            return res.data.error.error_object;
          } else {
            return res.data.capitulos;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("updateCapitulos", capitulos);
    },
    modifySerie: async function({ commit }, serie) {
      Vue.axios
        .put(`/serie/${serie.id}`, serie)
        .then((res) => {
          if (res.data.error) {
            return res.data.error.error_object;
          } else {
            return res.data.temporadas;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("modifySerie", serie);
    },
    updateSerie: async function({ commit }, id) {
      const serie = Vue.axios
        .get(`/serie/${id}`)
        .then((res) => {
          if (res.data.error) {
            return null;
          } else {
            return res.data.serie;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("modifySerie", serie);
      return serie;
    },
    updateTemporada: async function({ commit }, id) {
      const temporada = Vue.axios
        .get(`/temporada/${id}`)
        .then((res) => {
          if (res.data.error) {
            return null;
          } else {
            return res.data.temporada;
          }
        })
        .catch((e) => {
          return e;
        });
      commit("updateTemporada", temporada);
      return temporada;
    },
  },
  getters: {
    catalogo: (state) => {
      return state.catalogo;
    },
    series: (state) => {
      return state.series;
    },
    peliculas: (state) => {
      return state.peliculas;
    },
    contenido: (state) => {
      return state.contenido;
    },
    contenidoFiltrado: (state) => {
      return state.contenidoFiltrado;
    },
    temporadas: (state) => {
      return state.temporadas;
    },
    capitulos: (state) => {
      return state.capitulos;
    },
    serie: (state) => {
      return state.serie;
    },
    tContenido: (state) => {
      return state.tContenido;
    },
    temporada: (state) => {
      return state.temporada;
    },
  },
};
