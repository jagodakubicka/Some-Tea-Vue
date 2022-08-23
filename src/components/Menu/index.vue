<template>
  <h1 id="menuItems">{{ greeting }}</h1>
  <div class="menu-filters">
    <button
      v-for="category in categories"
      :key="category"
      type="button"
      @click="removeDuplicateCategory(e)"
      value="{{ category }}"
    >
      {{ category }}
    </button>
  </div>
  <div class="menu-section">
    <div
      v-for="name in menuProducts"
      :key="name"
      class="menu-section__singleItem"
    >
      <h2>Some {{ name.title }}</h2>
      <img v-bind:src="name.imgUrl" alt="" class="menu-section__productImg" />
      <p>{{ name.desc }}</p>
      <p>$ {{ name.price }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { products } from './data';
export default {
  name: 'Menu',
  data() {
    return {
      greeting: 'Some Menu' as string,
      menuProducts: products,
      selectedCategory: 'all',
    };
  },
  methods: {
    categories(): void {
      console.log('clicked btn');
    },
  },
  computed: {
    categories(): string[] {
      const categories = this.menuProducts.map(
        (product: Product) => product.category
      );
      return ['all', ...new Set(categories)];
    },
  },
};
</script>

<style scoped lang="scss">
#menuItems {
  text-align: center;
  font-size: 10vw;
  background: url(../Header/bg-tea.jpg);
  background-size: cover;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.menu-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  button {
    margin: 10px;
    width: 100px;
    cursor: pointer;
    border-radius: 20px;
    padding: 5px 20px;
    text-transform: uppercase;
    font-size: 20px;
    font-family: 'Bebas Neue', cursive;
    background-color: transparent;
    color: rgba(79, 121, 39, 1);
    border: 4px solid rgba(79, 121, 39, 1);
    &:hover {
      background-color: rgba(79, 121, 39, 1);
      color: #fff;
    }
  }
}
.menu-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  &__singleItem {
    margin: 20px;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(79, 121, 39, 1);
  }
  &__productImg {
    width: 160px;
    height: 250px;
  }
}
</style>
