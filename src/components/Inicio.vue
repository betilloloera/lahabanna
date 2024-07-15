<template>
    <!-- Header Section INICIO -->

    <section class="home" id="Home">
        <div class="content">
            <img class="imgH" src="../assets/info.jpg" alt="">
        </div>
    </section>

    <!-- Header Section FIN -->
</template>

<script setup>
    import {HttpClientService} from '../services/HttpClientService';
    import { ref } from 'vue';
      
    import gql from '../services/graphql-client';
    import constants from '../services/constants';
    
    let suc = ref(null);
    let sucTemp = null;

    Promise.all([
        gql.query(constants.command.GET_CFG,{}),
        gql.query(constants.command.GET_SUC,{})

    ]).then((result)=>{
    localStorage.setItem("urlServidorImagenes",result[0].data.hbconfiguracion[0].rutaservidor)
    suc.value = result[1].data.sucursales[0]
    sucTemp = result[1].data.sucursales[0]    
  })

  function openWhatsAppChat(){
    window.open(`https://wa.me/${sucTemp.sucursaltel}`, '_blank');
  }

</script>