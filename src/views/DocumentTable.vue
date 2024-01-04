<template>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12">
          <div class="card my-4">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
              <div
                class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
              >
                <h6 class="text-white text-capitalize ps-3">Gestion documental</h6>
              </div>
            </div>
            <div class="card-body px-0 pb-2">
              <invoice-card></invoice-card>
            </div>
          </div>
        </div>
      </div>
       
    </div>
  </template>
  
  <script>
 
import InvoiceCard from './components/InvoiceCard.vue';
  export default {
     
    components: {
      // Importamos el componente SidenavCollapse
      InvoiceCard,
    },
    data() {
      return {
        productos: [],
        clientes: [], // Aquí almacenaremos los productos obtenidos de la API
        itemsPerPage: 5, // Número de elementos por página
        currentPage: 1, // Página actual
      };
    },
    computed: {
      pageCount() {
        return Math.ceil(this.clientes.length / this.itemsPerPage);
      },
      paginatedItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.clientes.slice(startIndex, endIndex);
      },
    },
    mounted() {
      // Realizar la solicitud HTTP al endpoint de productos al cargar el componente
       
      
    },
    methods: {
      nextPage() {
        if (this.currentPage < this.pageCount) {
          this.currentPage++;
        }
      },
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
    },
  
  };
  
  </script>
  