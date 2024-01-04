<template>
  <div class="container-fluid py-4">
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Clientes</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Author
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Function
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Status
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Employed
                    </th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                
                  <tr v-for="cliente in paginatedItems" :key="cliente.id">
                    <td>
                      <div class="d-flex px-2 py-1">
                        <div>
                          <img
                            src="../assets/img/team-2.jpg"
                            class="avatar avatar-sm me-3 border-radius-lg"
                            alt="user1"
                          />
                        </div>
                        <div class="d-flex flex-column justify-content-center">
                          <h6 class="mb-0 text-sm">{{ cliente.nombre }}</h6>
                          <p class="text-xs text-secondary mb-0">
                            {{ cliente.email }}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p class="text-xs font-weight-bold mb-0">{{ cliente.funcion }}</p>
                      <p class="text-xs text-secondary mb-0">{{cliente.cargo}}</p>
                    </td>
                    <td class="align-middle text-center text-sm">
                      <span :class="{'badge': true, 'badge-sm': true, 'bg-gradient-success': cliente.estatus, 'bg-gradient-danger': !cliente.estatus}"
                        >{{cliente.estatus ? 'ACtivo' : 'Inactivo' }}</span
                      >
                    </td>
                    <td class="align-middle text-center">
                      <span class="text-secondary text-xs font-weight-bold"
                        >{{cliente.fecha_inicio}}</span
                      >
                    </td>
                    <td class="align-middle">
                      <a
                        href="javascript:;"
                        class="text-secondary font-weight-bold text-xs"
                        data-toggle="tooltip"
                        data-original-title="Edit user"
                      >
                        Edit
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav class="p-3">
                <button @click="prevPage" :disabled="currentPage === 1" :class="{'badge': true, 'badge-sm': true, 'bg-gradient-success': currentPage !== 1, 'bg-gradient-secondary': currentPage === 1}" >Anterior</button>
                <span class="mx-3">{{ currentPage }} / {{ pageCount }}</span>
                <button @click="nextPage" :disabled="currentPage === pageCount" :class="{'badge': true, 'badge-sm': true, 'bg-gradient-secondary': currentPage === pageCount, 'bg-gradient-success': currentPage !== pageCount}" >Siguiente</button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card my-4">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-success shadow-success border-radius-lg pt-4 pb-3"
            >
              <h6 class="text-white text-capitalize ps-3">Productos</h6>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive p-0">
              <table
                class="table align-items-center justify-content-center mb-0"
              >
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Producto
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Precio unitario
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
                    >
                      Estado
                    </th>
                    <th
                      class="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2"
                    >
                      Porcentaje examen de calidad
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="producto in productos.data " :key="producto.id">
                    <td>
                      <div class="d-flex px-2">
                        <div>
                          <img
                            src="../assets/img/small-logos/logo-asana.svg"
                            class="avatar avatar-sm rounded-circle me-2"
                            alt="spotify"
                          />
                        </div>
                        <!-- Aquí puedes mostrar la información del producto -->
                        <div class="my-auto">
                          <h6 class="mb-0 text-sm">{{ producto.nombre  }}</h6>
                        </div>
                         
                      </div>
                    </td>
                    <td>
                      <p class="text-sm font-weight-bold mb-0">{{ producto.precio_unitario }}</p>
                    </td>
                    <td>
                      <!-- Puedes mostrar el estado del producto aquí -->

                      <span class="text-xs font-weight-bold"> {{ producto.activo ? 'Activo' : 'Inactivo' }} </span>
                    </td>
                    <td class="align-middle text-center">
                      <div
                        class="d-flex align-items-center justify-content-center"
                      >
                        <span class="me-2 text-xs font-weight-bold">60%</span>
                        <div>
                          <div class="progress">
                            <div
                              class="progress-bar bg-gradient-info"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              style="width: 60%"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="align-middle">
                      <button class="btn btn-link text-secondary mb-0">
                        <i
                          class="fa fa-ellipsis-v text-xs"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "tables",
 
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
    axios.get('https://backend-gestion-bi.vercel.app/producto')
      .then(response => {
        // Almacenar los productos en el arreglo de productos
        this.productos = response.data;
        console.log('Productos:', this.productos)
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
      });
    axios.get('https://backend-gestion-bi.vercel.app/cliente')
      .then(response => {
        // Almacenar los productos en el arreglo de productos
        this.clientes = response.data.data;
        console.log('Clientes:', this.clientes)
      })
      .catch(error => {
        console.error('Error al obtener clientes:', error);
      });
    
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
