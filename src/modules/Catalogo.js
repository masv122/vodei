export default{
    namespaced: true,
    state: {
        peliculas: [],
        series: []
    },
    mutations: {
        setPeliculas(state, peliculas){
            state.peliculas = peliculas;
        }
    },
    actions: {

    },
    getters: {
        peliculas: state => {
            return state.peliculas;
          }
    },
};