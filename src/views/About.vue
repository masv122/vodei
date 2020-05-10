<template>
  <div class="about">
  
    <b-container>
      <form @submit.prevent="">
        <!-- <input type="file" @change="onFileChange" name="" id="" /> -->
        <img :src="image" alt="" />
        <b-form-group>
          <div class="mt-1">
            Portada Seleccionada: {{ portada ? portada.name : "" }}
          </div>
          <b-form-file
            v-model="portada"
            accept="image/*"
            @change="cargarImagen"
            :state="Boolean(portada)"
            placeholder="Selecciona una portada o arrastrala aqui..."
            drop-placeholder="Arrastrala aqui..."
            required
          ></b-form-file>
        </b-form-group>
        <b-form-group align="center">
          <b-button block variant="primary" type="submit" @click="enviar()">
            Agregar
          </b-button>
        </b-form-group>
      </form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      image: null,
      portada: null
    };
  },
  methods: {
    enviar() {
      console.log(this.retornaPortada());
      this.axios
        .post("/upload", this.retornaPortada())
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    cargarImagen(e) {
     var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.verImagen(files[0])
      let fd = new FormData();
      fd.append("image", files[0]);
      this.axios
        .post("/upload", fd, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(e => {
          console.log(e);
        });
    },
    verImagen(file) {
      var reader = new FileReader();
      reader.onload = e => {
        this.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    retornaPortada() {
      return {
        image: this.image === null ? "" : this.image
      };
    }
  },
  computed: {}
};
</script>
