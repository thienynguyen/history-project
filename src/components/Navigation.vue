<script setup>

import {RouterLink} from "vue-router";
</script>

<template>
<nav>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/play">Play</RouterLink>
  <RouterLink to="/readings">Learn More</RouterLink>
</nav>
</template>

<style scoped>
nav{
  width: 60%;
  margin: 10px auto;
  display: flex;
  background-color: var(--main2);
  border-radius: 100px;
  padding: 8px;
  justify-content: space-around;
  a{
    border-radius: 100px;
    padding: 10px 15px;
    text-decoration: none;
    color: var(--dark1);
    background-color: rgba(255,255,255,70%);
    transition: background-color 0.5s ease, padding 0.5s ease;
    &:hover{
      background-color: rgba(255,255,255,85%);
      padding: 10px 40px;
    }
  }
}
@media (width < 600px){
  nav {
    position: fixed;
    bottom: 0;
    width: 85vw;
    margin: 10px;
    padding: 8px;
    z-index: 1000;
    a{
      padding: 8px 15px;
    }
    a:hover{
      padding: 8px 25px;
    }
  }
}
</style>
