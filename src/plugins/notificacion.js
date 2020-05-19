export default {
  install(Vue) {
    Vue.prototype.$notificacion = {
      mostrar: function(vue, res, tipo, accion) {
        let mensaje = "";
        let variant = "";
        let icono = "";
        if (res.error) {
          mensaje = `No se pudo ${accion} la ${tipo}`;
          variant = "danger";
          icono = "fa-times";
          console.log(res.error_object);
        } else {
          mensaje = `${tipo} ${accion} satisfactoriamente`;
          variant = "success";
          icono = "fa-check";
        }
        const h = vue.$createElement;
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
        vue.$bvToast.toast([vNodesMsg], {
          title: [vNodesTitle],
          autoHideDelay: 5000,
          toaster: "b-toaster-bottom-right",
          appendToast: false,
          variant: variant,
        });
      },
    };
  },
};
