<template>
  <Header />
  <Menu />
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue';
import Menu from '@/components/Menu/index.vue';
export default {
  name: 'App',
  components: {
    Header,
    Menu,
  },
};
</script>
