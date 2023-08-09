<template>
  <div class="card">
    <div class="card__preview">
      <img :src="src" alt="card-preview" class="card__preview__img" />
    </div>

    <div class="card__content">
      <slot />
    </div>

    <div class="card__border"></div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.card__preview__img {
  width: 100%;
}

.card__content,
.card__border {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.card__content {
  z-index: 10;
  height: 166%;
  background-color: white;
  border: 1px solid transparent;
  border-bottom: 0;
  transition: 0.2s ease-in-out;
}

.card__border {
  z-index: 15;
  border: 1px solid var(--primary);
  border-top: 0;
  border-radius: 0 0 16px 16px;
}

/* Hover */

.card:hover {
  border-color: var(--primary);
}

.card:hover .card__content {
  border-radius: 16px 16px 0 0;
  border-color: var(--primary);
  transform: translateY(-40%);
}
</style>
