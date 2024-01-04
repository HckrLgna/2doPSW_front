<template>
    <div class="container-fluid px-4">
        <h1 class="mt-4">Capturar Entrada de Camara</h1>
        <ol class="breadcrumb mb-4">
            <li class="breadcrumb-item"><a href="{{ url_for('index') }}">Dashboard</a></li>
            <li class="breadcrumb-item active">Analisis en Tiempo Real</li>
        </ol>
        <div class="card mb-4 ">
            <div class="row g-0">
                <!-- Primera columna con imagen -->
                <div class="col-lg-6 d-flex align-items-center justify-content-center">    
                                  
                    <img v-if="flag" id="imgCamara" v-bind:src="src"  class="img-fluid rounded-start" 
                        style="width: 600px; height: 450px; object-fit: contain;" alt="Imagen">
                    <img v-else id="imgCamara" src="@/assets/img/camaraweb2.jpg"  class="img-fluid rounded-start" 
                        style="width: 600px; height: 450px; object-fit: contain;" alt="Imagen">    
                </div>
                <!-- Segunda columna con botones -->                                
                <div class="col-lg-6">
                    <div class="card-body d-flex align-items-center justify-content-center h-100">
                        <div class="d-grid gap-3 col-6 mx-auto">
                            <button id="btnIniciarCamara" class="btn btn-primary" type="button" @click="capturar" > INICIAR CAPTURA</button>
                            <button id="btnDetenerCamara" class="btn btn-outline-danger" type="button" @click="detener" >DETENER</button>
                        </div>
                    </div>
                </div>
        </div>                        
        </div>
    </div>
</template>
<script>

export default{
    data(){
        return{
            flag: false,
            src: "../assets/img/camaraweb2.jpg",
        }
    },
    methods:{
        capturar(){
            this.flag = !this.flag;
            console.log("capturar");
            this.src = "https://detector-objetos-extranos-production.up.railway.app/camara_feed";
        },
        detener(){
            this.flag = false;
            console.log("detener");
            
        }
    }
}

</script>