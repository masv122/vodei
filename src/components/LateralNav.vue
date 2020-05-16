<template>
  <div>
    <b-navbar-nav vertical class="nav_lateral h-100">
      <b-nav-item class="app-box">
        <a :to="{ name: 'Contenido' }">
          <img class="app-icono" src="@/assets/vodei administrador.png"
        /></a>
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'Contenido' }"
        @click="activar(1)"
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[1] ? 'activado' : ''
        ]"
        id="contenido"
      >
        <a class="" :to="{ name: 'Contenido' }">
          <i class="fa fa-play-circle" aria-hidden="true"></i>
        </a>
        <b-tooltip
          target="contenido"
          placement="right"
          triggers="hover"
          variant="info"
        >
          Contenido
        </b-tooltip>
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'Salas y Funciones' }"
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[2] ? 'activado' : ''
        ]"
        @click="activar(2)"
        id="salasfunciones"
      >
        <a :to="{ name: 'Salas y Funciones' }"
          ><i class="fa fa-film" aria-hidden="true"></i
        ></a>
        <b-tooltip
          target="salasfunciones"
          placement="right"
          triggers="hover"
          variant="info"
        >
          Salas y Funciones
        </b-tooltip>
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'Contenido en Emision' }"
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[3] ? 'activado' : ''
        ]"
        @click="activar(3)"
        id="contenido-en-emision"
      >
        <a :to="{ name: 'Contenido en Emision' }"
          ><i class="fa fa-star" aria-hidden="true"></i
        ></a>
      </b-nav-item>
      <b-tooltip
        target="contenido-en-emision"
        placement="right"
        triggers="hover"
        variant="info"
      >
        Contenido en Emision
      </b-tooltip>
      <b-nav-item
        :to="{ name: 'Tienda' }"
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[4] ? 'activado' : ''
        ]"
        @click="activar(4)"
        id="tienda"
      >
        <a :to="{ name: 'Tienda' }"
          ><i class="fa fa-shopping-cart" aria-hidden="true"></i
        ></a>
              <b-tooltip
        target="tienda"
        placement="right"
        triggers="hover"
        variant="info"
      >
        Tienda
      </b-tooltip>
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'Pagos' }"
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[5] ? 'activado' : ''
        ]"
        @click="activar(5)"
        id="pagos"
      >
        <a :to="{ name: 'Pagos' }"
          ><i class="fa fa-credit-card" aria-hidden="true"></i
        ></a>
        <b-tooltip
          target="pagos"
          placement="right"
          triggers="hover"
          variant="info"
        >
          Pagos
        </b-tooltip>
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'Mensajes' }"
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[6] ? 'activado' : ''
        ]"
        @click="activar(6)"
        id="mensajes"
      >
        <a :to="{ name: 'Mensajes' }"
          ><i class="fa fa-envelope" aria-hidden="true"></i
        ></a>
        <b-tooltip
          target="mensajes"
          placement="right"
          triggers="hover"
          variant="info"
        >
          Mensajes
        </b-tooltip>
      </b-nav-item>
      <b-nav-item
        :to="{ name: 'Usuarios' }"
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[7] ? 'activado' : ''
        ]"
        @click="activar(7)"
      >
        <a href=""><i class="fa fa-users" aria-hidden="true"></i></a>
      </b-nav-item>
      <b-nav-item
        :class="[
          'contenedor-hover',
          'contenedor_items',
          botones[8] ? 'activado' : ''
        ]"
        @click="activar(8)"
      >
        <a href=""><i class="fas fa-user-friends"></i></a>
      </b-nav-item>
    </b-navbar-nav>
  </div>
</template>

<script>
export default {
  name: "LateralNav",
  data() {
    return {
      botones: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
      }
    };
  },
  created() {
    window.addEventListener("scroll", this.posicionScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.posicionScroll);
  },
  methods: {
    entra() {
      console.log("entra");
    },
    activar(boton) {
      for (var key in this.botones) {
        if (key == boton) {
          this.botones[key] = true;
        } else {
          this.botones[key] = false;
        }
      }
    },
    setHover(boton) {
      for (var key in this.hover) {
        if (key == boton) {
          this.hover[key] = true;
        } else {
          this.hover[key] = false;
        }
      }
    }
  }
};
</script>

<style  scoped>
.nav_lateral {
  text-align: center;
  color: #fff;
  position: fixed;
  transition: 0.5s ease;
  font-size: 0.74rem;
  background-color: #009870;
  z-index: 1000;
  width: 60px;
}
.app-box {
  background-color: #151615;
}
.app-icono {
  width: 3.5rem;
  color: #fff;
}
.contenedor_items a {
  font-size: 2rem;
  color: #fff;
  transition: all 0.4s ease;
  padding-left: 0.1rem;
}
small {
  font-size: 1rem;
}
.activado {
  border-right: 4px solid #9a980b;
}

.contenedor-hover:hover {
  background: #9a980b;
}
</style>