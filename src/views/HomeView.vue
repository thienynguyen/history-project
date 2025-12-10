<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section>
    <div class="container">
      <div class="left-box">
        <h1>Welcome!</h1>
        <p>
          Learn and test your German and Scandinavian culture and controversies up until the 1700s.
          Explore important texts and connect them to other events by going to our 'Read More' page.
          Try organizing historical events based on when they happened by playing our game!
        </p>
        <div class="buttons">
          <RouterLink to="/play" class="play-link">Play game &#x2192;</RouterLink>
          <RouterLink to="/readings" class="readings-link">Read more &#x2192;</RouterLink>
        </div>
      </div>
      <img
        src="../assets/hero-image.jpg"
        alt="Illustration representing Germanic and Scandinavian history"
      />
    </div>

    <div class="container background">
      <h1>Readings</h1>
      <p>
        The readings featured on this site are part of the required materials for the University of
        Minnesota course GSD 3511W: Vikings, Knights, and Reformers: German and European Culture and
        Controversies to 1700, which I took in the fall of 2025 with Dr. Arsena Ianeva-Lockney. This
        class explored the evolution of Germanic and European identity through key historical texts,
        from early tribal epics and medieval chronicles to humanist and Reformation-era writings.
        Works such as Tacitus’s Germania, The Saga of the Volsungs, Einhard’s Life of Charlemagne,
        and The Nibelungenlied trace early heroic and courtly ideals, while Otto of Freising’s Deeds
        of Frederick Barbarossa and Walther von der Vogelweide’s poetry reflect the moral and
        political transformations of the High Middle Ages. Later readings, including Erasmus’s
        Praise of Folly, Martin Luther’s writings, and Grimmelshausen’s Simplicissimus, capture the
        intellectual and spiritual upheavals of the Renaissance and Reformation. I do not claim
        authorship of any of these works and give full credit to their respective authors and
        historical sources.
      </p>
      <div class="button">
        <RouterLink to="/readings" class="readings-link">Read more &#x2192;</RouterLink>
      </div>
    </div>

    <div class="container" id="how-to-play">
      <img
        src="../assets/tutorial.gif"
        alt="Animated tutorial showing how to play the ship timeline game"
      />
      <div class="left-box">
        <h1>How to Play on Desktop</h1>
        <p>
          Your goal is to place each ship in the correct chronological order on the timeline of
          history. At the top of the screen, you will see a ship waiting to be launched. Each ship
          represents an important historical event written on its sail.
        </p>
        <p>To play:</p>
        <ol>
          <li>Drag the top ship down onto the water below.</li>
          <li>
            Position it along the timeline, where the left side represents 0 B.C. and the right side
            represents the present day. When you release the ship, it will take its place among the
            others.
          </li>
          <li>
            If you placed it correctly, the ship will stay its original color. If you placed it
            incorrectly, the ship will turn red to show it is in the wrong spot.
          </li>
        </ol>
        <p>
          Be careful, sailor! If you misplace three ships, your fleet will sink, and you will have
          to start over from the beginning. The goal is to see how many ships you can correctly
          place in order while testing your sense of history and your command of time’s vast seas.
          ⚓
        </p>
        <div class="button">
          <RouterLink to="/play" class="play-link">Play game &#x2192;</RouterLink>
        </div>
      </div>
    </div>
    <div class="container" id="how-to-play-mobile">
      <img
        src="../assets/tutorialmobile.gif"
        alt="Animated tutorial showing how to play the ship timeline game"
      />
      <div class="left-box">
        <h1>How to Play on Mobile</h1>
        <p>
          Your goal is to place each ship in the correct chronological order on the timeline of
          history. On the left of the screen, you will see a card waiting to be placed. Each card
          represents an important historical event.
        </p>
        <p>To play:</p>
        <ol>
          <li>Drag the card to the right timeline.</li>
          <li>
            Position it along the timeline, where the bottom represents 0 B.C. and the top
            represents the present day. When you release the card, it will take its place among the
            others.
          </li>
          <li>
            If you placed it correctly, the card will stay its original color. If you placed it
            incorrectly, the card will turn red to show it is in the wrong spot.
          </li>
        </ol>
        <p>
          Be careful! If you misplace three cards, you lose, and you will have
          to start over from the beginning. The goal is to see how many cards you can correctly
          place in order while testing your sense of history.
        </p>
        <div class="button">
          <RouterLink to="/play" class="play-link">Play game &#x2192;</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 8vh;
  margin: 8vh auto;
  max-width: 1100px;
  width: 100%;
}

div.container {
  margin: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 24px;

  &.background {
    background-color: rgba(185, 178, 163, 0.6);
    border-radius: 15px;
  }

  img {
    max-width: 50%;
    border-radius: 10px;
    margin: 0;
    max-height: 60vh;
  }

  .left-box {
    flex: 1 1;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  a {
    padding: 10px 15px;
    text-decoration: none;
  }
}

.play-link {
  border-radius: 20px;
  background-color: var(--main3);
  color: #f9f3e9;
  transition:
    background-color 0.5s ease,
    color 0.5s ease;

  &:hover {
    background-color: #f9f3e9;
    color: var(--dark1);
  }
}

.readings-link {
  text-decoration: underline;
  color: var(--dark1);
  transition:
    font-size 0.5s ease,
    color 0.5s ease;

  &:hover {
    font-weight: bolder;
    color: black;
  }
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 12px;
}

.button {
  display: flex;
  justify-content: flex-end;
}

@media (max-width: 1000px) {
  div.container {
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      max-width: 520px;
      width: 100%;
      border-radius: 10px;
      margin: 0;
    }

    .left-box {
      flex: 1 1 420px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  .button {
    justify-content: center;
  }

  section {
    padding: 0;
    max-width: 100%;
    margin-bottom: 30px;
  }
}
</style>
