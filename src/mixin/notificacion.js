export default {
  methods: {
    show(res, tipo) {
      let mensaje = "";
      let variant = "";
      let icono = "";
      if (res.error) {
        mensaje = `No se pudo agregar la ${tipo}`;
        variant = "danger";
        icono = "fa-times";
        alert(res.error_object);
      } else {
        mensaje = `${tipo} agregada satisfactoriamente`;
        variant = "success";
        icono = "fa-check";
      }
      const h = this.$createElement;
      const vNodesMsg = h("p", { class: ["text-center", "mb-0"] }, [
        h("i", { class: ["fa", icono] }),
        ` ${mensaje}`,
      ]);
      const vNodesTitle = h(
        "div",
        { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
        [
          h("strong", { class: "mr-2" }, "¡Nueva Notificacion!"),
          h("small", { class: "ml-auto text-italics" }, "Ahora"),
        ]
      );
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        autoHideDelay: 5000,
        toaster: "b-toaster-bottom-right",
        appendToast: false,
        variant: variant,
      });
    },
  },
};
