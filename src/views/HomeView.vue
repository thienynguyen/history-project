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
          <RouterLink to="/play" id="play">Play game &#x2192;</RouterLink>
          <RouterLink to="/readings" id="readings">Read more &#x2192;</RouterLink>
        </div>
      </div>
      <img src="../assets/hero-image.jpg" alt="HeroImage" />
    </div>
    <div class="container background">
      <div class="middle-box">
        <h1>Readings</h1>
        <p>
          The readings featured on this site are part of the required materials for the University
          of Minnesota course GSD 3511W: Vikings, Knights, and Reformers: German and European
          Culture and Controversies to 1700, which I took in the fall of 2025 with Dr. Arsena
          Ianeva-Lockney. This class explored the evolution of Germanic and European identity
          through key historical texts, from early tribal epics and medieval chronicles to humanist
          and Reformation-era writings. Works such as Tacitus’s Germania, The Saga of the Volsungs,
          Einhard’s Life of Charlemagne, and The Nibelungenlied trace early heroic and courtly
          ideals, while Otto of Freising’s Deeds of Frederick Barbarossa and Walther von der
          Vogelweide’s poetry reflect the moral and political transformations of the High Middle
          Ages. Later readings, including Erasmus’s Praise of Folly, Martin Luther’s writings, and
          Grimmelshausen’s Simplicissimus, capture the intellectual and spiritual upheavals of the
          Renaissance and Reformation. I do not claim authorship of any of these works and give full
          credit to their respective authors and historical sources.
        </p>
        <div class="button">
          <RouterLink to="/readings" id="readings">Read more &#x2192;</RouterLink>
        </div>
      </div>
    </div>
    <div class="container" id="how-to-play">
      <img src="../assets/tutorial.gif" alt="tutorial" />
      <div class="left-box">
        <h1>How to Play?</h1>
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
          <RouterLink to="/play" id="play">Play game &#x2192;</RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8vh;
  margin: 8vh 0;
  padding: 0 4vw;
}

div.container {
  width: min(1100px, 100%);
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  border: chartreuse 1px solid;
}

div.container img {
  max-width: 520px;
  width: 100%;
  border-radius: 10px;
  margin: 0;
}

div.container .left-box {
  flex: 1 1 420px;
  max-width: 680px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

div.container .middle-box {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

div.container a {
  padding: 10px 15px;
  text-decoration: none;
  color: var(--dark1);
}

#play {
  border-radius: 20px;
  background-color: var(--main3);
  color: #f9f3e9;
  transition: background-color .5s ease, color .5s ease;
}
#play:hover { background-color: #f9f3e9; color: var(--dark1); }

#readings {
  text-decoration: underline;
  transition: font-size .5s ease, color .5s ease;
}
#readings:hover { font-weight: bolder; color: black; }

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

.background {
  background-color: rgba(185, 178, 163, 0.6);
  border-radius: 15px;
}

@media (width < 600px) {
  div.container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .button { justify-content: center; }
}
</style>
