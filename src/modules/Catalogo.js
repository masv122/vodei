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
    _agregarPelicula(state, pelicula) {
      state.peliculas.push(pelicula);
    }
  },
  actions: {
    agregarPelicula: async function({ commit }, pelicula) {
      const resultado = await Vue.axios
        .post("/pelicula", pelicula)
        .then((res) => {
          if (res.data.error) {
            return{
              error : res.data.error,
              error_object : res.data.error_object
            }
          } else {
            commit('_agregarPelicula', pelicula)
            return{
              error : res.data.error
            }
          }
        })
        .catch((e) => {
          return{
            error : e
          }
        });
        return resultado;
    },
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
