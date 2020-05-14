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
    conErr: false,
    cargando: false,
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
    updateConErr(state, res) {
      state.conErr = res;
    },
    setCargando(state) {
      state.cargando = !state.cargando;
    },
  },
  actions: {
    updateServidor: async function({ commit }) {
      commit("updateConErr", false);
      commit("updateServidor", false);
      const res = await Vue.axios
        .get("/")
        .then(() => {
          commit("updateConErr", false);
          return true;
        })
        .catch(() => {
          commit("updateConErr", true);
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
    },
    conErr: (state) => {
      return state.conErr;
    },
    cargando: (state) => state.cargando,
  },
  modules: {
    Catalogo,
  },
});
