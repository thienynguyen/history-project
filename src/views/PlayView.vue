<script setup>
import { ref, watch, nextTick, reactive } from 'vue'
import draggable from 'vuedraggable'
import rawTrivia from '@/assets/trivia.json'
import TriviaCard from '@/components/TriviaCard.vue'

const triviaItems = ref(rawTrivia.slice())
const onDeck = ref([])
const placed = ref([drawRandomItem()])
const cardStatus = reactive({})
const mistakes = ref(0)

function drawRandomItem() {
  if (!triviaItems.value.length) return null
  const i = Math.floor(Math.random() * triviaItems.value.length)
  const [item] = triviaItems.value.splice(i, 1)
  return item
}

function sortAndCheckIfReordered() {
  const before = placed.value.map((i) => i.year).join(',')
  placed.value.sort((a, b) => Number(a.year) - Number(b.year))
  const after = placed.value.map((i) => i.year).join(',')
  return before !== after
}

async function handleAdd(evt) {
  await nextTick()
  const added = placed.value[evt.newIndex]
  if (!added) return

  if (cardStatus[added.id] == null) {
    const reordered = sortAndCheckIfReordered()
    cardStatus[added.id] = { correct: !reordered }
    if (reordered) mistakes.value += 1
  } else {
    sortAndCheckIfReordered()
  }
}

function handleEnd() {
  sortAndCheckIfReordered()
}

watch(
  onDeck,
  (newVal) => {
    if (newVal.length === 0) {
      const nextItem = drawRandomItem()
      if (nextItem) onDeck.value.push(nextItem)
      else console.log('All trivia cards have been used!')
    }
  },
  { deep: true, immediate: true },
)
</script>
<template>
  <section>
    <div class="top-row">
      <div class="info">
        <a href="http://localhost:5174/#how-to-play">How to Play</a>
        <!--      <router-link to="/#how-to-play">How to Play</router-link>-->
        <div class="lives">
          <img v-if="mistakes > 2" src="../assets/shield.png" alt="shield" class="transparent" />
          <img v-else src="../assets/shield.png" alt="shield" />
          <img v-if="mistakes > 1" src="../assets/shield.png" alt="shield" class="transparent" />
          <img v-else src="../assets/shield.png" alt="shield" />
          <img v-if="mistakes > 0" src="../assets/shield.png" alt="shield" class="transparent" />
          <img v-else src="../assets/shield.png" alt="shield" />
        </div>
        <div class="fleet">Fleet: {{ placed.length - mistakes }}</div>
      </div>
      <div class="onDeck">
        <draggable
          v-model="onDeck"
          tag="ul"
          class="cards"
          :group="{ name: 'cards', pull: true, put: false }"
          :animation="180"
          chosen-class="chosen"
        >
          <template #item="{ element: item }">
            <li class="card">
              <TriviaCard
                :item="item"
                :placed="false"
                :correct="cardStatus[item.id]?.correct ?? true"
              />
            </li>
          </template>
        </draggable>
      </div>
      <div id="filler"></div>
    </div>

    <div class="bottom-row">
      <div class="placed-scroll">
        <draggable
          v-model="placed"
          item-key="id"
          tag="ul"
          class="cards horizontal"
          :group="{ name: 'cards', pull: false, put: true }"
          :animation="180"
          chosen-class="chosen"
          @add="handleAdd"
          @end="handleEnd"
        >
          <template #item="{ element: item }">
            <li class="card">
              <TriviaCard
                :item="item"
                :placed="true"
                :correct="cardStatus[item.id]?.correct ?? true"
              />
            </li>
          </template>
        </draggable>
      </div>
    </div>
  </section>
</template>

<style scoped>
ul,
li,
h3 {
  display: inline-block;
  list-style-type: none;
  margin: 0;
}

section {
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  background-image: url('../assets/gameBackground.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 610px;
  width: 100%;
  margin: 0;
}

.onDeck {
  display: flex;
  align-items: center;
  justify-content: center;

  TriviaCard {
    margin-left: -70px;
  }
}

.placed-scroll {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: thin;
  padding-bottom: 30px;
}

.cards.horizontal {
  display: flex;
  flex-wrap: nowrap;
}

.card {
  display: inline-block;
  vertical-align: top;
  margin: 0 -35px;
}

.top-row {
  /* info and on deck card and filler div */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50%;

  .info {
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 5px;
    width: 30%;

    .lives {
      img {
        height: 40px;
      }

      .transparent {
        opacity: 0.2;
      }
    }

    div.fleet {
      /* how many ships */
      font-size: 40px;
      color: white;
    }

    * div,
    a {
      /* centering info */
      display: flex;
      justify-content: center;
      width: 130px;
    }
  }

  a {
    border-radius: 100px;
    text-decoration: none;
    color: var(--dark1);
    padding: 10px 15px;
    background-color: rgba(255, 255, 255, 70%);
    transition: background-color 0.5s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 85%);
    }
  }

  div#filler {
    width: 34%; /* empty space on the right of top row */
  }
}
</style>
