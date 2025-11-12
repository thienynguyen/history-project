<script setup>
import { RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Footer from "@/components/Footer.vue";
import './assets/variables.css';
</script>
<template>
  <section class="container">
    <section class="content">
      <header>
        <navigation></navigation>
      </header>
      <section class="main-content">
        <router-view></router-view>
      </section>
    </section>
    <footer>
      <Footer></Footer>
    </footer>
  </section>
</template>

<style scoped>
.container {
  color: var(--dark1);
  display: flex;
  flex-direction: column;
  footer{
    justify-self: flex-end;
  }
}
.main-content{
  min-height: 80vh;
  width: 80%;
  margin: auto;
  background-color: white;
}
.content{
  display: flex;
  flex-direction: column;
}
@media (width < 600px){
  .content{
    flex-direction: column-reverse;
  }
}
</style>
