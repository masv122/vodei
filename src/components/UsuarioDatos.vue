<template>
  <div>
    <form class="border rounded p-2 my-2 text-center">
      <h6 class="display-4">Datos Personales</h6>
      <b-form-row>
        <b-col cols-sm="12" cols-md="6">
          <b-form-group>
            <b-form-group
              id="input-group-Nombre"
              label="Nombre:"
              label-for="nombre"
            >
              <b-form-input
                id="nombre"
                type="text"
                readonly
                placeholder="Nombre"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="input-group-Correo"
              label="Correo:"
              label-for="Correo"
            >
              <b-form-input
                id="correo"
                type="text"
                readonly
                placeholder="Correo"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="input-group-fecha-de-registro"
              label="Fecha de registro:"
              label-for="fecha-de-registro"
            >
              <b-form-input
                id="fecha-de-registro"
                type="text"
                readonly
                placeholder="Fecha de registro"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="input-group-Direccion"
              label="Direccion:"
              label-for="Direccionn"
            >
              <b-form-input
                id="Direccion"
                type="text"
                readonly
                placeholder="Direccion"
              >
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-col>
        <b-col cols-sm="12" cols-md="6">
          <b-form-group>
            <b-form-group
              id="input-group-titulo"
              label="Apellido:"
              label-for="apellido"
            >
              <b-form-input
                id="apellido"
                type="text"
                readonly
                placeholder="Apellido"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="input-group-titulo"
              label="Telefono:"
              label-for="telefono"
            >
              <b-form-input
                id="telefono"
                type="text"
                readonly
                placeholder="telefono"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="input-group-reseñas-emitidas"
              label="Reseñas Emitidas:"
              label-for="reseñas-emitidas"
            >
              <b-form-input
                id="reseñas-emitidas"
                type="text"
                readonly
                placeholder="Reseñas Emitidas"
              >
              </b-form-input>
            </b-form-group><b-form-group
              id="input-group-ultima-vez"
              label="Ultima vez:"
              label-for="ultima-vez"
            >
              <b-form-input
                id="ultima-vez"
                type="text"
                readonly
                placeholder="Ultima vez"
              >
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-col>
      </b-form-row>
    </form>
  </div>
</template>

<script>
export default {
  name: "UsuarioDatos"
};
</script>

<style lang="scss" scoped>
</style>