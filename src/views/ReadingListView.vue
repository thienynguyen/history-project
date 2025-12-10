<script setup>
import ReadingList from '@/components/ReadingList.vue'
import readings from '@/data/readings.json'
</script>

<template>
  <div class="container">
    <section>
      <h1>Readings</h1>
      <div>
        <ReadingList v-for="reading in readings" :key="reading.id" :reading="reading" />
      </div>
    </section>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

section {
  margin-bottom: 30px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
