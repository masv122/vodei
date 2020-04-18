import Vue from "vue";
export default {
  namespaced: true,
  state: {
    peliculas: [],
    series: [],
  },
  mutations: {
    _cargarPeliculas(state, peliculas) {
      state.peliculas = peliculas;
    },
    agregarPelicula(state, pelicula) {
      Vue.axios
        .post("/pelicula", pelicula)
        .then((res) => {
          if (res.data.error) {
            alert(
              "Ha ocurrido un error al ingresar la pelicula ",
              res.data.error_object
            );
          } else {
            state.peliculas.push(pelicula);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  actions: {
    cargarPeliculas: async function({ commit }) {
      const peliculas = await Vue.axios
        .get("/pelicula")
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
  },
  getters: {
    peliculas: (state) => {
      return state.peliculas;
    },
  },
};
