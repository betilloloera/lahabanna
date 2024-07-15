<template>
  
  <header class="header">
    <a href="#" class="logo">
      <img src="./assets/HabannaHeader.png" alt="">
    </a>

    <nav class="navbar">
      <a href="#Home">Inicio</a>
      <a href="#Nosotros">Nosotros</a>
      <a href="#Products">Catalogo</a>
      <a href="#Info">Informacion</a>
    </nav>


    <nav class="navbarMovile" :class="{ active: ShowInMovile }">
      <div class="navbarMovileItem"> 
        <div class="menuItemIcon">
          <img src="./assets/home.svg" style="width: 25px;"/> 
        </div>
        <div class="menuItemText">
          <a href="#Home">Inicio</a>
        </div>
      </div>
      <div class="navbarMovileItem">
        <div class="menuItemIcon">
          <img src="./assets/nosotros.svg" style="width: 25px;"/> 
        </div>
        <div class="menuItemText">
          <a href="#Nosotros">Nosotros</a>
        </div>
      </div>
      <div class="navbarMovileItem"> 
        <div class="menuItemIcon">
          <img src="./assets/corazon.svg" style="width: 25px;"/> 
        </div>
        <div class="menuItemText" >
          <a href="#Products">Catalogo</a>
        </div>
      </div>
      <div class="navbarMovileItem"> 
        <div class="menuItemIcon">
          <img src="./assets/info.svg" style="width: 25px;"/> 
        </div>
        <div class="menuItemText">
          <a href="#Info">Informacion</a>
        </div>
      </div>
    </nav>

    <div class="icons">
      <div class="fas fa-bars" id="menu-btn" @click="ToggleMenu" ></div>
    </div>
    <div class="search-form" :class="{ active: ActiveSearch }">
      <input type="search" name="" id="search-box" placeholder="Serch box">
      <label class="fas fa-search" for="search-box"></label>
    </div>
  </header>
  <Inicio></Inicio>
  <AboutUs></AboutUs>
  <Products></Products>
  <Footer></Footer>
</template>

<script setup>
  import Inicio from './components/Inicio.vue';
  import AboutUs from './components/AboutUs.vue';
  import Products from './components/Products.vue';
  import Footer from './components/footer.vue';
  
  // const gql = require.context('./services/graphql-client')
  // const constants = require.context('./services/constants');

  import { ref } from 'vue';
  let NavClass = ref(0);
  let ShowInMovile = ref(false);  
  let ActiveSearch = ref(false);
  
  

  // gql.query(constants.GETALL_EMP,'');

  const ToggleMenu = ()=>{
    ShowInMovile.value = !ShowInMovile.value;
    ActiveSearch.value = false;
  }

  const ToggleSearch = ()=>{
    ActiveSearch.value = !ActiveSearch.value;
    ShowInMovile.value = false;
  }

</script>

<style scoped></style>
