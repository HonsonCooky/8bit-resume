<script setup>
import NavElements from '@/components/header/nav-elements.vue'

const emit = defineEmits(['navClicked'])
</script>

<template>
  <nav @click="emit('navClicked')">
    <nav-elements />
  </nav>
</template>

<style scoped>
nav {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  height: calc(100vh - var(--nav-height));
  z-index: 900;

  display: flex;
  flex-direction: column;
  background-color: var(--crust);
  padding: 1em;
  width: 70%;
  box-shadow: 0 0 var(--shadow-blur) var(--overlay);

  &[hidden] {
    display: none !important;
  }
}
</style>
