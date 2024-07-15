<template>
    <!-- Header Section INICIO -->

    <section class="home" id="Home">
        <div class="content">
            <h3>La mejor experiencia que puedas imaginar</h3>
            <div class="contentContact">
                <h2>Agenda tu cita</h2>
                <h2>{{info?info.sucursalTel:''}}</h2>
            </div>
        </div>
    </section>

    <!-- Header Section FIN -->
</template>

<script setup>
    import {HttpClientService} from '../services/HttpClientService';
    import { ref } from 'vue';
    
    let info = ref(null);
    
    HttpClientService.ObtenerInformacionPagina().then((e)=>{
        info.value = e[0]??null;
    });

</script>