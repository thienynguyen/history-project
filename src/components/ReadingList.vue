<script setup>
const props = defineProps({
  reading: { type: Object, required: true },
})
</script>

<template>
  <section>
    <router-link :to="`/readings/${reading.id}`">
      <div class="info">
        <div>
          <h2>{{ reading.title }}</h2>
          <h3>{{ reading.year_written }}</h3>
        </div>
        <p>{{ reading.description }}</p>
      </div>
      <aside>&#8250;</aside>
    </router-link>
  </section>
</template>

<style scoped>
section {
  background-color: var(--main1);
  border-radius: 10px;
  padding: 20px;
}
.info {
  width: 90%;
  div {
    display: flex;
    justify-content: space-between;
  }
}
aside {
  font-size: 80px;
  padding-right: 20px;
}
a{
  text-decoration: none;
  color: var(--dark1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
