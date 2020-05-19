import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/contenido",
    name: "Contenido",
    component: () => import("../views/Contenido.vue"),
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/contenido/agregar-pelicula/:tipo",
    name: "Agregar Pelicula",
    component: () => import("../views/AgregarPelicula.vue"),
  },
  {
    path: "/contenido/agregar-serie",
    name: "Agregar Serie",
    component: () => import("../views/AgregarSerie.vue"),
  },
  {
    path: "/contenido/agregar-temporada",
    name: "Agregar Temporada",
    component: () => import("../views/AgregarTemporada.vue"),
  },
  {
    path: "/contenido/agregar-capitulo",
    name: "Agregar Capitulo",
    component: () => import("../views/AgregarCapitulo.vue"),
  },
  {
    path: "/contenido/detalles-contenido/:id",
    name: "Detalles Contenido",
    component: () => import("../views/DetallesContenido.vue"),
  },
  {
    path: "/salas-funciones",
    name: "Salas y Funciones",
    component: () => import("../views/SalasFunciones.vue"),
  },
  {
    path: "/contenido-emision",
    name: "Contenido en Emision",
    component: () => import("../views/ContenidoEmision.vue"),
  },
  {
    path: "/pagos",
    name: "Pagos",
    component: () => import("../views/Pagos.vue"),
  },
  {
    path: "/mensajes",
    name: "Mensajes",
    component: () => import("../views/Mensajes.vue"),
  },
  {
    path: "/usuarios",
    name: "Usuarios",
    component: () => import("../views/Usuarios.vue"),
  },
  {
    path: "/usuarios/detalles",
    name: "Usuario Detalles",
    component: () => import("../views/UsuarioDetalles.vue"),
  },
  {
    path: "/tienda",
    name: "Tienda",
    component: () => import("../views/Tienda.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
