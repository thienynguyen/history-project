<script setup>
import { ref, computed } from 'vue'
import flashcards from '@/data/flashcards.json'

const currentIndex = ref(0)
const isFlipped = ref(false)

// Track which cards the user marked
const correctIds = ref([])
const incorrectIds = ref([])

const currentCard = computed(() => flashcards[currentIndex.value] || null)

function nextCard() {
  if (currentIndex.value < flashcards.length - 1) {
    currentIndex.value++
    isFlipped.value = false
  }
}

function prevCard() {
  if (currentIndex.value > 0) {
    currentIndex.value--
    isFlipped.value = false
  }
}

function toggleFlip() {
  isFlipped.value = !isFlipped.value
}
function markCorrect() {
  if (!currentCard.value) return
  const id = currentCard.value.id

  incorrectIds.value = incorrectIds.value.filter((x) => x !== id)

  if (!correctIds.value.includes(id)) {
    correctIds.value.push(id)
  }

  advanceAfterAnswer()
}

function markIncorrect() {
  if (!currentCard.value) return
  const id = currentCard.value.id

  correctIds.value = correctIds.value.filter((x) => x !== id)

  if (!incorrectIds.value.includes(id)) {
    incorrectIds.value.push(id)
  }

  advanceAfterAnswer()
}
function advanceAfterAnswer() {
  isFlipped.value = false

  if (currentIndex.value < flashcards.length - 1) {
    currentIndex.value++
  }
}


const correctCards = computed(() =>
  flashcards.filter((card) => correctIds.value.includes(card.id))
)

const incorrectCards = computed(() =>
  flashcards.filter((card) => incorrectIds.value.includes(card.id))
)
</script>

<template>
  <div class="container">
    <div class="flashcard-area">
      <div class="flashcard" v-if="currentCard">
        <div class="flip-card" @click="toggleFlip">
          <div class="flip-card-inner" :class="{ flipped: isFlipped }">
            <div class="flip-card-front">
              <p>{{ currentCard.front }}</p>
            </div>
            <div class="flip-card-back">
              <p>{{ currentCard.back }}</p>
            </div>
          </div>
        </div>
        <div class="answer-buttons">
          <button @click.stop="markCorrect">I got it right ✅</button>
          <button @click.stop="markIncorrect">I got it wrong ❌</button>
        </div>
      </div>
    </div>

    <div class="sidebar">
      <aside class="correct">
        <h2>Correct</h2>
        <ul>
          <li
            v-for="card in correctCards"
            :key="card.id"
          >
            {{ card.front }}
          </li>
        </ul>
      </aside>

      <aside class="incorrect">
        <h2>Incorrect</h2>
        <ul>
          <li
            v-for="card in incorrectCards"
            :key="card.id"
          >
            {{ card.front }}
          </li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin: auto auto;
}

.flashcard-area{
  height: 84vh;
}

.flashcard {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
}

.flip-card {
  background-color: transparent;
  width: 50vw;
  min-height: 300px;
  perspective: 1000px;
  font-size: larger;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  min-height: 300px;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  min-height: 300px;
  backface-visibility: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.flip-card-front {
  background-color: #f9f3e9;
}

.flip-card-back {
  background-color: #d8c4a0;
  transform: rotateY(180deg);
}

.answer-buttons {
  margin-top: 12px;
  display: flex;
  gap: 10px;
  width: 50vw;
  height: 10vh;
  font-size: larger;
}

.answer-buttons button {
  width: 100%;
  border-radius: 8px;
  border: 1px solid #ccc;
  background: #f9f3e9;
}

.answer-buttons button:hover {
  background: #f0e1c7;
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 84vh;
}

aside.correct,
aside.incorrect {
  border-radius: 10px;
  padding: 10px;
  background: #f9f3e9;
  overflow-y: auto;
  width: 100%;
  height: 100%;
}
@media (width < 1000px) {

  .container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .sidebar {
    display: flex;
    flex-direction: row;
    gap: 16px;
    width: 84vw;
    height: 33vh;
    padding-bottom: 24px;
  }

  .flip-card {
    width: 84vw;
  }
  .answer-buttons {
    width: 84vw;
  }
  .flashcard-area{
    height: 48vh;
  }
}
</style>
