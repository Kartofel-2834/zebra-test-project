<template>
  <div class="card">
    <div class="card__preview">
      <img :src="src" alt="card-preview" class="card__preview__img" />
    </div>

    <div class="card__content">
      <slot name="content" />
    </div>

    <div class="card__border">
      <slot name="static" />
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
  grid-template-rows: 4fr 6fr;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s ease-in-out;
}

.card__preview {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card__preview__img {
  width: 100%;
  height: auto;
}

.card__content {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  background-color: white;
  padding: 2em;
  transform: translateY(40%);
  border-radius: 0 0 16px 16px;
  border: 1px solid var(--primary);
  border-top: 1px solid transparent;
  border-bottom: none;
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

.card:hover .card__content {
  transform: translateY(0);
  border-radius: 16px;
  border-top: 1px solid var(--primary);
}
</style>
