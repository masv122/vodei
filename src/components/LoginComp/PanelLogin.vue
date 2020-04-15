<template>
  <div>
    <section class="text-center mt-5">
      <b-container>
        <b-col md="6" offset="1" offset-md="3">
          <b-form
            class="shadow py-2 px-4"
          >
            <b-form-row class="my-3">
              <b-col cols="12">
                <b-form-group
                  id="input-group-1"
                  label="Usuario:"
                  label-for="input-1"
                >
                  <b-input-group>
                    <template v-slot:prepend>
                      <b-input-group-text><i class="fa fa-user" aria-hidden="true"></i></b-input-group-text>
                    </template>
                    <b-form-input
                      id="input-1"
                      type="text"
                      required
                      placeholder="Ingrese su Usuario"
                    >
                    </b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row class="my-3">
              <b-col cols="12">
                <b-form-group
                  id="input-group-2"
                  label="Contraseña"
                  label-for="input-2"
                >
                  <b-input-group>
                    <template v-slot:prepend>
                      <b-input-group-text><i class="fa fa-key" aria-hidden="true"></i></b-input-group-text>
                    </template>
                    <b-form-input
                    type="password"
                      id="input-2"
                      required
                      placeholder="Ingrese su contraseña"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row class="my-3">
              <b-button type="submit" :to="{ name: 'Home' }" variant="success" block
                >Ingresar</b-button
              >
            </b-form-row>
          </b-form>
        </b-col>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PanelLogin'
};
</script>


