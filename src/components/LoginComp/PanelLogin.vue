<template>
  <div>
    <section class="text-center mt-5">
      <b-container>
        <b-col offset-md="4" md="8">
          <b-form class="shadow py-2 px-4">
            <div>
              <b-img
                class="avatar"
                src="@/assets/svg/undraw_male_avatar_323b.svg"
                fluid
                alt="Responsive image"
              ></b-img>
            </div>
            <b-form-row class="my-3">
              <b-col cols="12">
                <b-form-group
                  id="input-group-1"
                  label="Usuario:"
                  label-for="input-1"
                >
                  <b-input-group class="inputGroup">
                    <template v-slot:prepend>
                      <b-input-group-text class="bg-white border-success slot"
                        ><i class="fa fa-user" aria-hidden="true"></i
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      id="input-1"
                      type="text"
                      required
                      placeholder="Ingrese su Usuario"
                      class="input border-success"
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
                  <b-input-group class="inputGroup">
                    <template v-slot:prepend>
                      <b-input-group-text class="bg-white border-success slot"
                        ><i class="fa fa-key" aria-hidden="true"></i
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      type="password"
                      id="input-2"
                      required
                      class="input border-success"
                      placeholder="Ingrese su contraseña"
                    ></b-form-input>
                  </b-input-group>
                </b-form-group>
              </b-col>
            </b-form-row>
            <b-form-row class="my-3">
              <b-button
                type="submit"
                :to="{ name: 'Home' }"
                variant="success"
                block
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
  name: "PanelLogin"
};
</script>

<style scoped>
.avatar {
  width: 8rem;
}
.inputGroup{
    color: #495057;
  background-color: #fff;
  border-radius: 20px;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 255, 98, 0.5);
}
.input {
  border-radius: 20px;
  border-left: unset;
}
.slot {
  border-right: unset;
  border-radius: 20px;
}
.input:focus{
  border-color: unset;
  outline: 0;
  box-shadow: unset;
}
</style>