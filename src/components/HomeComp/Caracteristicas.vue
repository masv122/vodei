<template>
      <div class="caracteristicas">
        <h6 class="display-4 my-5 text-center">
          ¿Que hace especial este Administrador?
        </h6>
        <b-card-group>
          <b-card
            bg-variant="primary"
            text-variant="white"
            title="Diseñado usando Frameworks"
            header-tag="header"
            footer-tag="footer"
            class="shadow"
          >
            <b-card-text>
              <div class="display-4 text-center">
                <i class="fab fa-bootstrap"></i>
                <i class="fab fa-font-awesome    "></i>
                <i class="fab fa-vuejs    "></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                dolore animi maxime quo cupiditate odio quos culpa maiores, vero
                error quisquam ipsam hic tenetur, consequatur delectus officiis
                quasi? Expedita, laborum!
              </p>
            </b-card-text>
            <template class="d-flex" v-slot:footer>
              <div><a class="card-link" href="">Bootstrap</a></div>
              <div><a class="card-link" href="">FontA</a></div>
              <div><a class="card-link" href="">Vue.js</a></div>
            </template>
          </b-card>
          <b-card
            bg-variant="secondary"
            text-variant="white"
            title="Diseño Responsivo"
            header-tag="header"
            footer-tag="footer"
            class="shadow"
          >
            <b-card-text>
              <div class="display-4 text-center">
                <i class="fas fa-mobile-alt    "></i>
                <i class="fa fa-tablet-alt" aria-hidden="true"></i>
                <i class="fas fa-tv    "></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                dolore animi maxime quo cupiditate odio quos culpa maiores, vero
                error quisquam ipsam hic tenetur, consequatur delectus officiis
                quasi? Expedita, laborum!
              </p>
            </b-card-text>
            <template class="d-flex" v-slot:footer>
              <div><a>Tables </a></div>
              <div><a>Moviles </a></div>
              <div><a>PC's </a></div>
            </template>
          </b-card>
          <b-card
            bg-variant="info"
            text-variant="white"
            title="Interfaz Intuitiva"
            header-tag="header"
            footer-tag="footer"
            class="shadow"
          >
            <b-card-text>
              <div class=" display-4 text-center">
                <i class="fa fa-user-circle" aria-hidden="true"></i>
                <i class="fas fa-user-cog    "></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                dolore animi maxime quo cupiditate odio quos culpa maiores, vero
                error quisquam ipsam hic tenetur, consequatur delectus officiis
                quasi? Expedita, laborum!
              </p>
            </b-card-text>
            <template class="d-flex" v-slot:footer>
              <div><a class="">Agrega...</a></div>
              <div><a class="">Modifica..</a></div>
              <div><a class="">Actualiza...</a></div>
            </template>
          </b-card>
          <b-card
            bg-variant="warning"
            text-variant="white"
            title="Sistema de base datos"
            header-tag="header"
            footer-tag="footer"
            class="shadow"
          >
            <b-card-text>
              <div class="display-4 text-center">
                <i class="fab fa-node-js    "></i>
                <i class="fa fa-database" aria-hidden="true"></i>
                <i class="fa fa-server" aria-hidden="true"></i>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
                dolore animi maxime quo cupiditate odio quos culpa maiores, vero
                error quisquam ipsam hic tenetur, consequatur delectus officiis
                quasi? Expedita, laborum!
              </p>
            </b-card-text>
            <template class="d-flex" v-slot:footer>
              <div><a class="card-link" href="">Node.js</a></div>
              <div><a class="card-link" href="">MariaDB</a></div>
              <div><a class="card-link" href="">Express</a></div>
            </template>
          </b-card>
        </b-card-group>
      </div>
</template>

<script>
    export default {
        name: 'Caracteristicas'
    }
</script>

<style  scoped>
.shadow .display-4 i {
  margin: 0 1rem;
}

.card-footer a {
  text-decoration: none;
  color: #ddd;
}
</style>