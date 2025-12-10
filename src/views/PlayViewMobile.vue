<script setup>
import { ref, watch, nextTick, reactive } from 'vue'
import draggable from 'vuedraggable'
import rawTrivia from '@/assets/trivia.json'
import TriviaCard from '@/components/TriviaCardMobile.vue'

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

function reloadgame() {
  location.reload()
}

function sortAndCheckIfReordered() {
  const before = placed.value.map((i) => i.year).join(',')
  placed.value.sort((a, b) => Number(b.year) - Number(a.year))
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
  <aside>
    <div class="info">
      <a href="/#how-to-play-mobile">How to Play</a>
      <div class="lives">
        <img v-if="mistakes > 2" src="../assets/shield.png" alt="shield" class="transparent" />
        <img v-else src="../assets/shield.png" alt="shield" />
        <img v-if="mistakes > 1" src="../assets/shield.png" alt="shield" class="transparent" />
        <img v-else src="../assets/shield.png" alt="shield" />
        <img v-if="mistakes > 0" src="../assets/shield.png" alt="shield" class="transparent" />
        <img v-else src="../assets/shield.png" alt="shield" />
      </div>
      <div class="fleet">Cards: {{ placed.length - mistakes }}</div>
    </div>
    <section class="playing" v-if="mistakes < 3">
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
    <section class="fail" v-else>
      <div>
        <h1 v-if="placed.length - mistakes > 1">
          Your fleet has sank!<br />Good job, it grew to {{ placed.length - mistakes }} ships.
        </h1>
        <h1 v-else>Your fleet has sank!<br />Do better, it didn't grow.</h1>
        <div id="button" @click="reloadgame">Play again</div>
      </div>
    </section>
  </aside>
</template>

<style scoped>
ul,
li,
h3 {
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

section {
  background-image: url('../assets/gameBackgroundMobile.jpg');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  min-height: calc(84vh);
  width: 100%;
  margin: 0;
}

section.playing {
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
}

section.fail {
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 50px;
    border-radius: 10px;
  }
}

.onDeck {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.cards.horizontal {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 70vh;
  gap: 10px;
}

.info {
  display: flex;
  flex-direction: row;
  padding: 10px;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;

  .lives {
    img {
      height: 40px;
    }

    .transparent {
      opacity: 0.2;
    }
  }

  div.fleet {
    font-size: larger;
    color: var(--dark1);
  }

  * div,
  a {
    display: flex;
    font-size: larger;
    justify-content: center;
    width: 130px;
  }
}

a {
  border-radius: 100px;
  text-decoration: none;
  color: var(--dark1);
  padding: 10px 15px;
  border: 1px solid var(--main1);
  transition: background-color 0.5s ease;

  &:hover {
    background-color: var(--main1);
  }
}

div#filler {
  width: 34%; /* empty space on the right of top row */
}

div#button {
  border-radius: 20px;
  background-color: var(--main3);
  color: #f9f3e9;
  transition:
    background-color 0.5s ease,
    color 0.5s ease;
  padding: 10px 20px;

  &:hover {
    background-color: #f9f3e9;
    color: var(--dark1);
  }
}
</style>
