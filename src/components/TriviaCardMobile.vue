<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
  placed: { type: Boolean, default: false },
  correct: { type: Boolean, default: true },
})
</script>

<template>
  <div
    class="ship-card"
    draggable="false"
    :class="[correct ? 'correct' : 'incorrect', placed ? 'unplaced' : 'placed']"
  >
    <img :src="`./src/assets/${props.item.id}.jpg`" alt="Representative image" />
    <div class="info">
      <div class="text">{{ item.subject }}</div>
      <div v-if="placed" class="year">
        {{ item.year }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  line-height: 0.9;
  gap: 10px;
  margin: 2px;
}

.text {
  justify-self: center;
  text-align: center;
  max-width: 100px;
  color: white;
  white-space: normal;
  font-size: 12px;
}

.year {
  text-align: center;
  min-width: 64px;
  color: var(--main2);
  font-size: 12px;
  font-weight: bold;
}

.ship-card {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

}

.ship-card.correct {
  background-color: var(--dark2);
}

.ship-card.incorrect {
  background-color: var(--main3);
}

.ship-card.placed {
  height: 150px;
  width: 100px;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
    height: 50%;
    border-radius: 10px 10px 0 0 ;
  }
}

.ship-card.unplaced {
  height: 100px;
  width: 200px;
  flex-flow: row-reverse;
  img {
    width: 50%;
    height: 100%;
    border-radius: 0 10px 10px 0;
  }
  aside{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
