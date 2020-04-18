import Vue from "vue";
import Vuex from "vuex";
import Catalogo from '@/modules/Catalogo';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vistaPagos: true,
    breadcrumb: [],
    tabSalasFunciones: true,
    loginVisible: true
  },
  mutations: {
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
  modules: {
    Catalogo
  },
});
