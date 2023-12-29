<template>
  <div class="card mt-1">
    <div class="card-header pb-0 p-3">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <h6 class="mb-0">Documentos</h6>
        </div>
        <div class="col-6 text-end">
          <material-button color="primary" size="sm" variant="outline"
            >Crear nuevo</material-button
          >
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
    }
  },
  mounted(){
    axios.get('http://52.91.91.216/api/documento')
      .then(response => {
        this.documentos=response.data.data;
      })
      .catch(error =>{
        console.log(error);
      })
  }

};
</script>
