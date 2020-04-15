<template>
  <div>
    <form class="border rounded p-2 my-2 text-center">
      <h6 class="display-4">Suscripcion Activa</h6>
      <b-form-row>
        <b-col cols-sm="12" cols-md="6">
          <b-form-group>
            <b-form-group
              id="label-tipo-de-suscripcion"
              label="Tipo de Suscripcion:"
              label-for="tipo-de-suscripcion"
            >
              <b-form-input
                id="tipo-de-suscripcion"
                type="text"
                readonly
                placeholder="Tipo de Suscripcion"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="label-pantallas"
              label="Pantallas:"
              label-for="Pantallas"
            >
              <b-form-input
                id="pantallas"
                type="text"
                readonly
                placeholder="Pantallas"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-calidad"
              label="Calidad:"
              label-for="calidad"
            >
              <b-form-input
                id="calidad"
                type="text"
                readonly
                placeholder="Calidad"
              >
              </b-form-input>
            </b-form-group>
          </b-form-group>
        </b-col>
        <b-col cols-sm="12" cols-md="6">
          <b-form-group>
            <b-form-group
              id="input-suscripcion"
              label="Suscripcion:"
              label-for="suscripcion"
            >
              <b-form-input
                id="suscripcion"
                type="text"
                readonly
                placeholder="Suscripcion"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="input-dias-restantes"
              label="Dias Restantes:"
              label-for="telefono"
            >
              <b-form-input
                id="dias-restantes"
                type="text"
                readonly
                placeholder="Dias Restantes"
              >
              </b-form-input> </b-form-group
            ><b-form-group
              id="input-ultimo-pago"
              label="Ultimo pago:"
              label-for="ultimo-pago"
            >
              <b-form-input
                id="ultimo-pago"
                type="text"
                readonly
                placeholder="Ultimo pago"
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
  name: "UsuarioSuscripcion"
};
</script>

<style lang="scss" scoped>
</style>