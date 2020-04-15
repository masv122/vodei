<template>
  <div class="text-center">
      <NavSalas/>
    <h3 class="display-4 my-4">Salas</h3>
    <b-container fluid>
      <b-row>
        <b-card-group columns>
          <b-card no-body >
            <b-card-title class="mt-2">Sala #1</b-card-title>
            <b-card-text>
              <b-list-group>
                <b-list-group-item class="mt-1" variant="success">
                  Funcion Anterior: Funcion Anterior
                </b-list-group-item>
                <b-list-group-item class="mt-1" variant="warning">
                  Funcion Actual
                  <b-list-group flush class="mt-2">
                    <b-list-group-item class="mt-1" variant="light">
                      Hora inicio
                    </b-list-group-item>
                    <b-list-group-item class="mt-1" variant="light">
                      Contenido
                    </b-list-group-item>
                    <b-list-group-item class="mt-1" variant="light">
                      Hora Fin
                    </b-list-group-item>
                  </b-list-group>
                </b-list-group-item>
                <b-list-group-item class="mt-1" variant="secondary">
                  Siguiente Funcion: Siguiente Funcion
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
            <b-card-text class="small text-muted pb-3"
              >Proxima Funcion en 00/00</b-card-text
            >
          </b-card>
          <b-card no-body >
            <b-card-title class="mt-2">Sala #1</b-card-title>
            <b-card-text>
              <b-list-group>
                <b-list-group-item class="mt-1" variant="success">
                  Funcion Anterior: Funcion Anterior
                </b-list-group-item>
                <b-list-group-item class="mt-1" variant="warning">
                  Funcion Actual
                  <b-list-group flush class="mt-2">
                    <b-list-group-item class="mt-1" variant="light">
                      Hora inicio
                    </b-list-group-item>
                    <b-list-group-item class="mt-1" variant="light">
                      Contenido
                    </b-list-group-item>
                    <b-list-group-item class="mt-1" variant="light">
                      Hora Fin
                    </b-list-group-item>
                  </b-list-group>
                </b-list-group-item>
                <b-list-group-item class="mt-1" variant="secondary">
                  Siguiente Funcion: Siguiente Funcion
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
            <b-card-text class="small text-muted pb-3"
              >Proxima Funcion en 00/00</b-card-text
            >
          </b-card>
          <b-card no-body >
            <b-card-title class="mt-2">Sala #1</b-card-title>
            <b-card-text>
              <b-list-group>
                <b-list-group-item class="mt-1" variant="success">
                  Funcion Anterior: Funcion Anterior
                </b-list-group-item>
                <b-list-group-item class="mt-1" variant="warning">
                  Funcion Actual
                  <b-list-group flush class="mt-2">
                    <b-list-group-item class="mt-1" variant="light">
                      Hora inicio
                    </b-list-group-item>
                    <b-list-group-item class="mt-1" variant="light">
                      Contenido
                    </b-list-group-item>
                    <b-list-group-item class="mt-1" variant="light">
                      Hora Fin
                    </b-list-group-item>
                  </b-list-group>
                </b-list-group-item>
                <b-list-group-item class="mt-1" variant="secondary">
                  Siguiente Funcion: Siguiente Funcion
                </b-list-group-item>
              </b-list-group>
            </b-card-text>
            <b-card-text class="small text-muted pb-3"
              >Proxima Funcion en 00/00</b-card-text
            >
          </b-card>
        </b-card-group>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavSalas from "@/components/NavSalas";

export default {
  name: "Salas",
  components: {
      NavSalas,
  },
};
</script>

<style lang="scss" scoped>
</style>