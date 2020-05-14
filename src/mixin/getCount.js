export default {
  methods: {
    count: async function() {
      const count = await this.axios
        .get("/pelicula-count")
        .then((res) => {
          return res.data[0].cant;
        })
        .catch((err) => {
          alert("ha ocurrido un error" + err);
        });
      return count;
    },
  },
};
