<script setup>
import readings from '@/data/readings.json'
import { useRoute } from 'vue-router'

const route = useRoute()
const reading = readings.filter((text) => text.id === Number(route.params.id))[0]
</script>

<template>
  <div class="margins">
    <div class="container">
      <aside class="header">
        <h1>{{ reading.title }} ({{ reading.year_written }})</h1>
        <h4>
          {{ reading.description }}
        </h4>
        <h6>
          {{ reading.version_details }}
        </h6>
      </aside>
      <section>
        <div class="paragraph" v-for="(paragraph, index) in reading.text" :key="index">
          <div class="text">
            <p>
              {{ paragraph }}
            </p>
          </div>
          <aside class="summary">
            <strong>AI Summary:</strong>
            <p>
              {{ reading.summary[index] }}
            </p>
          </aside>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.margins{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 85%;
}

.header {
  width: 70%;
}

.summary {
  display: flex;
  background-color: #D6AF6C6f;
  border-radius: 10px;
  width: 25%;
  padding: 10px;
  color: var(--dark2);
  height: fit-content;
  flex-direction: column;
}

section {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
}

.paragraph {
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
  align-items: center;
}

.text {
  width: 70%;
}

@media screen and (max-width: 900px) {
  .text,
  .summary,
  .header {
    width: 100%;
  }

  .container {
    width: 90%;
  }
}
</style>
