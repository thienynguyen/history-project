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
        <footer>
          <Footer></Footer>
        </footer>
      </section>
    </section>
  </section>
</template>

<style scoped>
section {
  margin:0;
  padding:0;
}
.container {
  color: var(--dark1);
  display: flex;
  flex-direction: column;
}
.main-content{
  margin: auto;
}
@media (width < 600px){
  .content{
    flex-direction: column-reverse;
  }
}
</style>
