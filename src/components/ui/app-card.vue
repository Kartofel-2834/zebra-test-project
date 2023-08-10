<template>
  <div class="card" :class="{ card_image: !!src }">
    <div v-if="src" class="card__preview">
      <img :src="src" alt="card-preview" class="card__preview__img" />
    </div>

    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  src: { type: String, default: "/news-preview.png" },
});
</script>

<style>
.card {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content auto;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s ease-in-out;
}

.card:active {
  opacity: 0.7;
}

.card:hover .card__preview {
  transform: scale(1.1);
}

.card__preview {
  max-height: 15em;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9ac9ec;
  transition: 0.5s ease-in-out;
}

.card__preview__img {
  width: auto;
  height: 100%;
}

.card__content {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: white;
  padding: 2em;
  border-radius: 16px;
  border: 1px solid var(--primary);
  transition: 0.2s ease-in-out;
}

.card__border {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  display: flex;
  height: fit-content;
  align-self: self-end;
  background-color: white;
  padding: 2em;
  padding-top: 0.5em;
  border-radius: 0 0 16px 16px;
  border: 1px solid var(--primary);
  border-top: 0;
  z-index: 10;
}

/* With image */
.card_image .card__content {
  grid-row: 2 / 3;
  border-radius: 0 0 16px 16px;
  border-top: none;
}
</style>
