import Vue from "vue";
import Vuex from "vuex";
import Catalogo from "@/modules/Catalogo";
import filtros from "@/modules/filtros";

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
    cargandoCatalogo: false,
    loadingViews: false,
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
    setCargandoCatalogo(state) {
      state.cargandoCatalogo = !state.cargandoCatalogo;
    },
    setLoadingViews(state) {
      state.loadingViews = !state.loadingViews;
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
    loginVisible: (state) => state.loginVisible,
    servidor: (state) => state.servidor,
    conErr: (state) => state.conErr,
    cargando: (state) => state.cargando,
    cargandoCatalogo: (state) => state.cargandoCatalogo,
    loadingViews: (state) => state.loadingViews,
  },
  modules: {
    Catalogo,
    filtros
  },
});
