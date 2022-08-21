<template>
  <h1 id="menuItems">{{ greeting }}</h1>
  <div class="menu-filters">
    <button
      v-for="name in menuProducts"
      :key="name.menuProducts"
      type="button"
      @click="removeDuplicateCategory(e)"
      value="{{ name.category }}"
    >
      {{ name.category }}
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
export default {
  name: 'Menu',
  data() {
    return {
      greeting: 'Some Menu' as string,
      menuProducts: [
        {
          title: 'Green Tea' as string,
          imgUrl:
            'https://images.pexels.com/photos/6545346/pexels-photo-6545346.jpeg?auto=compress&cs=tinysrgb&w=400',
          desc: 'Fresh green tea leafs.' as string,
          price: 3.5 as number,
          category: 'tea' as string,
          id: 1 as number,
        },
        {
          title: 'Fresh Smoothie' as string,
          imgUrl:
            'https://images.pexels.com/photos/4443494/pexels-photo-4443494.jpeg?auto=compress&cs=tinysrgb&w=400' as string,
          desc: 'Smoothie from seasonal fruits.' as string,
          price: 5.5 as number,
          category: 'smoothie' as string,
          id: 2 as number,
        },
        {
          title: 'Coffee' as string,
          imgUrl:
            'https://images.pexels.com/photos/2616172/pexels-photo-2616172.jpeg?auto=compress&cs=tinysrgb&w=400' as string,
          desc: 'Coffee from finest Arabica beans' as string,
          price: 3.5 as number,
          category: 'coffee' as string,
          id: 3 as number,
        },
        {
          title: 'Lavender-lemon Tea' as string,
          imgUrl:
            'https://images.pexels.com/photos/1772124/pexels-photo-1772124.jpeg?auto=compress&cs=tinysrgb&w=400' as string,
          desc: 'Delicious black tea with lavender and lemon' as string,
          price: 3.5 as number,
          category: 'tea' as string,
          id: 4 as number,
        },
        {
          title: 'sandwich' as string,
          imgUrl:
            'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=400' as string,
          desc: `Freshly made sandwich - ask for today's ingredietns` as string,
          price: 4.5 as number,
          category: 'lunch' as string,
          id: 5 as number,
        },
      ],
      filterButtons: '' as string,
    };
  },
  methods: {
    removeDuplicateCategory() {
      console.log('clicked btn');
    },
  },
  computed: {},
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
