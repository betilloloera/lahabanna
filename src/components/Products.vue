<template>
    <section class="products" id="Products">
        <h1 class="heading">Conoce a las chicas mas hermosas</h1>
        
        <div class="box-container">
            
            <div class="box" v-for="emp in empleados">
                <div class="image">
                    <img :src="emp.empleadoImg" alt="">
                </div>                
            </div>
        </div>
    </section>
</template>
<script setup>
    import {HttpClientService} from '../services/HttpClientService';
    import { ref } from 'vue';

    let empleados = ref(null);  

    // HttpClientService.obtenerEmpleados().then((e)=>{
    //     empleados.value = e??[];
    // });

</script>