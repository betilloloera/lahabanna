<template>
    <section class="products" id="Products">
        <h1 class="heading">Conoce a las chicas mas hermosas</h1>
        
        <div class="box-container">
            
            <div class="box" v-for="emp in empleados">
                <div class="image">
                    <img :src="emp.empleadoimg" alt="">
                </div>                
            </div>
        </div>
    </section>
</template>
<script setup>
    import {HttpClientService} from '../services/HttpClientService';
    import { ref } from 'vue';
    import gql from '../services/graphql-client';
    import constants from '../services/constants';

    let empleados = ref(null);  
    let rutaServ = 'https://lahabannamensclub.com/imagenes/chicas/';  
    let empleadosTemp = []
    
    gql.query(constants.command.GETALL_EMP,{}).then((result)=>{
        empleadosTemp = result.data.empleados
        for (const element of empleadosTemp) {
            element.empleadoimg = rutaServ+element.empleadoimg
        }
        empleados.value = empleadosTemp;
    });

    

</script>