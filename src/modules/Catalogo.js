import Vue from "vue";
export default {
  namespaced: true,
  state: {
    catalogo: [],
    peliculas: [],
    series: [],
    peliculasFiltradas: [],
  },
  mutations: {
    _cargarPeliculas(state, peliculas) {
      state.peliculas = peliculas;
      state.catalogo = state.peliculas;
    },
    _cargarSeries(state, series) {
      state.series = series;
      state.catalogo = state.series;
    },
    _agregarPelicula(state, pelicula) {
      state.peliculas.push(pelicula);
    },
    _agregarSerie(state, serie) {
      state.series.push(serie);
    },
    filtrarPeliculas(state, texto) {
      state.peliculasFiltradas = state.peliculas.filter((item) =>
        item.titulo.includes(texto)
      );
    },
  },
  actions: {
    agregarPelicula: async function({ commit }, pelicula) {
      const resultado = await Vue.axios
        .post("/pelicula", pelicula)
        .then((res) => {
          if (res.data.error) {
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("_agregarPelicula", pelicula);
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
        .post("/serie", serie)
        .then((res) => {
          if (res.data.error) {
            return {
              error: res.data.error,
              error_object: res.data.error_object,
            };
          } else {
            commit("_agregarSerie", serie);
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
      commit("_cargarPeliculas", peliculas);
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
      commit("_cargarSeries", series);
    }
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
  },
};
