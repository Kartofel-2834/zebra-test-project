<template>
  <div class="loading" :class="{ loading_active: active }">
    <div class="loading__content">
      <slot />
    </div>

    <div v-show="!hidden" class="loading__loader">
      <span class="loading__loader__spinner" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, watchEffect } from "vue";

// Utils
import sleep from "@/utils/sleep";

const props = defineProps({
  active: { type: Boolean, default: false },
});

const hidden = ref(false);

async function show() {
  hidden.value = false;
}

async function hide() {
  await sleep(300);
  hidden.value = true;
}

watchEffect(() => {
  if (props.active) {
    show();
  } else {
    hide();
  }
});
</script>

<style>
.loading {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.loading > * {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.loading__loader {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 100;
  opacity: 0;
  transition: 0.2s ease-in-out;
}

.loading__loader__spinner {
  width: 8em;
  height: 8em;
  border: 5px solid var(--primary);
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

.loading_active .loading__loader {
  opacity: 1;
}
</style>
