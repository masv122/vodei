import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peliculas: [],
    vistaPagos: true,
    breadcrumb: [],
    tabSalasFunciones: true,
    loginVisible: true
  },
  mutations: {
    agregarPelicula(state, pelicula) {
      state.peliculas.push(pelicula);
      localStorage.setItem('PeliculasDB', JSON.stringify(state.peliculas));
      alert('Pelicula agregada')
    },
    cargarDatos(state, datos){
      state.peliculas = datos;
    },
    setvistaPagos(state){
      state.vistaPagos = !state.vistaPagos
    },
    addBreadcrumb(state, rutas){
      state.breadcrumb = rutas;
    },
    setTabSalasFunciones(state, estado){
      state.tabSalasFunciones= estado;
    },
    setloginVisible(state, estado){
      state.loginVisible = estado;
    }
  },
  actions: {},
  getters: {
    loginVisible: state => {
      return state.loginVisible;
    }
  },
  modules: {},
});
