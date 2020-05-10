import Vue from "vue";
import Vuex from "vuex";
import Catalogo from "@/modules/Catalogo";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    vistaPagos: true,
    breadcrumb: [],
    tabSalasFunciones: true,
    loginVisible: true,
    servidor: false,
  },
  mutations: {
    cargarDatos(state, datos) {
      state.peliculas = datos;
    },
    setvistaPagos(state) {
      state.vistaPagos = !state.vistaPagos;
    },
    addBreadcrumb(state, rutas) {
      state.breadcrumb = rutas;
    },
    setTabSalasFunciones(state, estado) {
      state.tabSalasFunciones = estado;
    },
    setloginVisible(state, estado) {
      state.loginVisible = estado;
    },
    updateServidor(state, res) {
      state.servidor = res;
    },
  },
  actions: {
    updateServidor: async function({ commit }) {
      const res = Vue.axios
        .get("/")
        .then(() => {
          return true;
        })
        .catch(() => {
          return false;
        });
      commit("updateServidor", res);
    },
  },
  getters: {
    loginVisible: (state) => {
      return state.loginVisible;
    },
    servidor: (state) => {
      return state.servidor;
    }
  },
  modules: {
    Catalogo,
  },
});
