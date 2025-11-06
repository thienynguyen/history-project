<script setup>
import triviaData from '@/assets/trivia.json';
let deck = triviaData.length
</script>

<template>
  <h1>
    Game goes here
  </h1>
  <div class = "onDeck">
    {{ deck }}
    <div class = "newCard" v-if = 'deck > 10'>
      {{ deck }}
    </div>
  </div>
  <div class = "placed">

  </div>
</template>

<style scoped>

</style>
