Array.prototype.unique = (function(a) {
  return function() {
    return this.filter(a);
  };
})(function(element, index, array) {
  return array.indexOf(element, index + 1) < 0;
});
export default {
  namespaced: true,
  state: {
    idioma: [{ value: null, text: "Seleccione un idioma" }],
    genero: [{ value: null, text: "Seleccione un genero" }],
    director: [{ value: null, text: "Seleccione un director" }],
    pais: [{ value: null, text: "Seleccione un pais" }],
    productora: [{ value: null, text: "Seleccione una productora" }],
    año: [{ value: null, text: "Seleccione un año" }],
  },
  getters: {
    idioma: (state) => {
      return state.idioma;
    },
    genero: (state) => {
      return state.genero;
    },
    director: (state) => {
      return state.director;
    },
    pais: (state) => {
      return state.pais;
    },
    productora: (state) => {
      return state.productora;
    },
    año: (state) => {
      return state.año;
    },
  },
  mutations: {
    updateFiltros(state, contenidos) {
      let idioma = [],
        genero = [],
        director = [],
        pais = [],
        productora = [],
        año = [];
      contenidos.forEach((contenido) => {
        idioma.push(contenido.Idioma);
        genero.push(contenido.Genero);
        director.push(contenido.Director);
        pais.push(contenido.Pais);
        productora.push(contenido.Productora);
        año.push(contenido.Fecha_estreno);
      });
      state.idioma = idioma.unique();
      state.genero = genero.unique();
      state.director = director.unique();
      state.pais = pais.unique();
      state.productora = idioma.unique();
      state.año = año.unique();
    },
  },
  actions: {},
};
