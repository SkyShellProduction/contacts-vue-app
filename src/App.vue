<script setup lang="ts">
  import { useMainStore } from './stores';
  import { storeToRefs } from 'pinia';
  import { watch } from 'vue';
  import TheHeader from '@/components/TheHeader.vue';
  const store = useMainStore();
  const {contacts} = storeToRefs(store);
  watch(contacts, () => {
    localStorage.contacts = JSON.stringify(store.$state.contacts);
  }, {deep: true})
</script>
<template>
  <div class="app">
    <TheHeader />
    <main class="main">
      <RouterView v-slot="{ Component }">
        <Transition name="fade" mode="out-in">
          <Component :is="Component" />
        </Transition>
      </RouterView>
    </main>
  </div>
</template>
<style lang="scss">
    .fade{
      &-enter-active, &-leave-active{
        transition: 250ms linear;
      }
      &-enter-from, &-leave-to{
        opacity: 0;
        transform: scale(0.9);
        filter: blur(20px) brightness(0%);
      }
    }
</style>
