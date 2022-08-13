<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";

import { StringTension } from "@/scripts/classes/StringTension";
import { GuitarString } from "@/scripts/classes/GuitarString";

import { Note } from "@tonaljs/tonal";
import { StringType } from "@/scripts/classes/StringType";

const firstString = new StringTension(
  new GuitarString("PL010", 10, 0.0003955547, StringType.PlainSteelLockTwist),
  Note.freq("E4")
);
const secondString = new StringTension(
  new GuitarString("PL013", 13, 0.00066860352, StringType.PlainSteelLockTwist),
  Note.freq("B3")
);
const thirdString = new StringTension(
  new GuitarString("PL017", 17, 0.00114326916, StringType.PlainSteelLockTwist),
  Note.freq("G3")
);
const fourthString = new StringTension(
  new GuitarString(
    "NW026",
    26,
    0.0026742355,
    StringType.NickelPlatedSteelRoundWound
  ),
  Note.freq("D3")
);
const fifthString = new StringTension(
  new GuitarString(
    "NW036",
    36,
    0.00427949112,
    StringType.NickelPlatedSteelRoundWound
  ),
  Note.freq("A2")
);
const sixthString = new StringTension(
  new GuitarString(
    "NW046",
    46,
    0.00682461328,
    StringType.NickelPlatedSteelRoundWound
  ),
  Note.freq("E2")
);

console.log(firstString.getTension(), firstString.getTensionInKg());
console.log(secondString.getTension(), secondString.getTensionInKg());
console.log(thirdString.getTension(), thirdString.getTensionInKg());
console.log(fourthString.getTension(), fourthString.getTensionInKg());
console.log(fifthString.getTension(), fifthString.getTensionInKg());
console.log(sixthString.getTension(), sixthString.getTensionInKg());

/*console.log(
    "Tension : " + ((0.00023964 * Math.pow(2 * 25.5 * Note.freq("A2"), 2)) / 386.4),
    "Tension kg : " + (((0.00023964 * Math.pow(2 * 25.5 * Note.freq("A2"), 2)) / 386.4) * 4.45)
)*/
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
