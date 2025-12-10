<script setup>
import { computed } from 'vue'
import shipLocation from '@/assets/ship-silhouette.png'
const props = defineProps({
  item:   { type: Object, required: true },   // { id, subject, year, image }
  placed: { type: Boolean, default: false },
  correct:{ type: Boolean, default: true },
  sailRect: {
    type: Object,
    default: () => ({ left: '28%', top: '8%', width: '36%', height: '49%' })
  },
  width:  { type: [Number, String], default: 300 },
  ratio:  { type: String, default: '4 / 3' }
})

const sailStyle = computed(() => ({
  left: props.sailRect.left,
  top: props.sailRect.top,
  width: props.sailRect.width,
  height: props.sailRect.height,
  backgroundImage: `url('./src/assets/${props.item.id}.jpg')`
}))
</script>

<template>
  <div
    class="ship-card"
    :style="{
      '--ship-url': `url(${shipLocation})`,
      width: typeof width === 'number' ? width + 'px' : String(width),
      aspectRatio: ratio
    }"
    draggable="false"
    :class="correct ? 'correct' : 'incorrect'"
  >
    <div class="sail" :style="sailStyle" />
    <div class="info">
      <div class="text">{{ item.subject }}</div>
      <div
        v-if="placed"
        class="year"
      >
        {{ item.year }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.ship-card{
  position: relative;
  background: #111;
  -webkit-mask: var(--ship-url) no-repeat center / contain;
  mask: var(--ship-url) no-repeat center / contain;
  border-radius: 12px;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.sail{
  position: absolute;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 3px;
  pointer-events: none;
}

.info{
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  /*grid-template-rows: .68fr auto auto;*/
  align-items: center;
  pointer-events: none;
  justify-content: space-between;
  line-height: .9;
}

.text{
  justify-self: center;
  text-align: center;
  max-width: 200px;
  color: white;
  word-wrap: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  font-size: 12px;
  padding: 145px 10px 2px 10px;
}

.year{
  text-align: center;
  min-width: 64px;
  color: var(--main2);
  padding: 2px 10px 150px 10px;
  font-size: 12px;
  font-weight: bold;
}

.ship-card.correct   { background-color: var(--dark2); }
.ship-card.incorrect { background-color: var(--main3); }
</style>
