<template>
  <section class="main-section">
    <div class="main-section__title">
      <img
        src="./SOME_TEA-logo.png"
        alt="Some Tea Logo"
        class="main-section__logo" />
      <h1>{{ title1 }}</h1>
    </div>
    <div class="main-section__menu">
      <a href="#menuItems" class="main-section__link">
        {{ menuBtn }}
      </a>
      <h1>{{ title2 }}</h1>
      <p
        v-for="(item, index) in about"
        :key="index"
        class="main-section__about">
        {{ item.subtitle1 }} <br />
        {{ item.subtitle2 }}
      </p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  data() {
    return {
      title1: 'Want',
      title2: 'Some Tea?',
      menuBtn: 'menu',
      about: [
        {
          subtitle1: 'Healthy beverage for your soul.',
          subtitle2: 'The taste of the best tea making in our tea house.',
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
.main-section {
  width: 100%;
  display: flex;
  min-height: 90vh;
  &__title {
    width: 50%;
    background-image: url(./bg-tea.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    h1 {
      color: #fff;
      text-transform: uppercase;
      text-align: right;
      font-size: 15vw;
      margin: 10px;
    }
  }
  &__logo {
    max-width: 100%;
    filter: invert(1);
    position: absolute;
    left: 2%;
    top: 0%;
  }
  &__menu {
    width: 50%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1 {
      color: rgba(79, 121, 39, 1);
      font-size: 15vw;
      text-transform: uppercase;
      margin: 10px;
      background: url(./bg-tea.jpg);
      background-size: cover;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  &__about {
    color: rgb(94, 118, 99);
    opacity: 0.8;
    max-width: 90%;
    margin: 0 20px;
    font-size: 20px;
    line-height: 1;
  }
  &__link {
    border: 4px solid rgba(79, 121, 39, 1);
    color: rgba(79, 121, 39, 1);
    text-decoration: none;
    border-radius: 50%;
    padding: 40px;
    text-transform: uppercase;
    background-color: #fff;
    position: absolute;
    right: 5%;
    top: 0%;
    transition: 0.5s all ease-in-out;
    &:hover {
      background-color: rgba(79, 121, 39, 1);
      color: #fff;
    }
  }
}
</style>
