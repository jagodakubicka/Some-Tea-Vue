<template>
  <Header></Header>
  <Menu></Menu>
</template>

<script lang="ts">
import Header from '@/components/Header/Header.vue';
import Menu from '@/components/Menu/Menu.vue';
export default {
  name: 'App',
  components: {
    Header,
    Menu,
  },
};
</script>
