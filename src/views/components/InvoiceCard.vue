<template>
  <div class="card mt-1">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Documentos</h6>
        </div>
        <div class="col-6 text-end">
          <material-button color="primary" size="sm" variant="outline" data-bs-toggle="modal" data-bs-target="#exampleModal"
            >Crear nuevo</material-button
          >
           
          <!-- Modal -->
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Crear documento</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body ">
                  <form @submit.prevent="crearDocumento">
                    <div class="mb-3">
                      <label for="nombre" class="form-label">Nombre del documento</label>
                      <input type="text" class="form-control" v-model="nuevoDocumento.nombre" required>
                    </div>
                    <div class="mb-3">
                      <label for="descripcion" class="form-label">Descripción</label>
                      <textarea class="form-control" v-model="nuevoDocumento.descripcion"></textarea>
                    </div>
                    <div class="mb-3">
                      <label for="fecha_creacion" class="form-label">Fecha de creación</label>
                      <input type="date" class="form-control" v-model="nuevoDocumento.fecha_creacion" required>
                    </div>
                    <div class="mb-3">
                      <label for="version" class="form-label">Versión</label>
                      <input type="text" class="form-control" v-model="nuevoDocumento.version" required>
                    </div>
                    <div class="mb-3">
                      <label for="file" class="form-label">Archivo</label>
                      <input type="file" class="form-control" @change="handleFileChange" required>
                    </div>
                    <button type="submit" class="btn btn-primary">Guardar documento</button>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body p-3 mb-0">
      <ul class="list-group">
        
        <li v-for="documento in documentos" :key="documento.id"
          class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg"
        >
          <div class="d-flex flex-column">
            <h6 class="text-dark mb-1 font-weight-bold text-sm">
              Contrato - {{ documento.nombre }}
            </h6>
            <span class="text-xs"> {{ documento.fecha_creacion }} </span>
          </div>
          <div class="d-flex align-items-center text-sm">
            v.{{ documento.version }}
            <a href= '{{ documento.ubicacion_almacenamiento }}'   class="btn btn-link text-dark text-sm mb-0 px-0 ms-4">
              <i class="fas fa-file-pdf text-lg me-1" aria-hidden="true"></i>
              PDF
            </a>
          </div>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import MaterialButton from "@/components/MaterialButton.vue";
import axios from "axios";

export default {
  name: "invoice-card",
  components: {
    MaterialButton,
  },
  data(){
    return{
      documentos: [],
      nuevoDocumento: {
        nombre: "",
        descripcion: "",
        fecha_creacion: "",
        version: "",
        file: null,
      },
    }
  },
  methods: {
    crearDocumento() {
      const formData = new FormData();
      formData.append("nombre", this.nuevoDocumento.nombre);
      formData.append("descripcion", this.nuevoDocumento.descripcion);
      formData.append("fecha_creacion", this.nuevoDocumento.fecha_creacion);
      formData.append("version", this.nuevoDocumento.version);
      formData.append("file", this.nuevoDocumento.file);

      axios.post("http://52.91.91.216/api/contrato", formData)
        .then(response => {
          // Manejar la respuesta, actualizar la lista de documentos, etc.
          console.log(response.data);
          // Cerrar el modal después de agregar el documento
          this.$refs.modal.hide();
        })
        .catch(error => {
          console.error(error);
        });
    },
    handleFileChange(event) {
      // Manejar el cambio en el input de tipo file
      this.nuevoDocumento.file = event.target.files[0];
    },
  },
  mounted(){
    axios.get('http://52.91.91.216/api/contrato')
      .then(response => {
        this.documentos=response.data.data;
      })
      .catch(error =>{
        console.log(error);
      })
  }

};
</script>
