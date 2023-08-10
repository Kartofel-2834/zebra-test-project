<template>
  <section class="news">
    <page-news-card v-for="i in 9" :key="i">
      <template #title> Alpha объединяет усилия c Миром </template>

      <template #description>
        Alpha объявляет o партнёрстве c Миром, ведущим мировым поставщиком
        экологических услуг, чтобы помочь клиентам строить светлое будущее.
      </template>
    </page-news-card>

    <button class="news__loader">Загрузить ещё</button>
  </section>
</template>

<script setup>
// Components
import PageNewsCard from "./page-news-card.vue";
</script>

<style>
.news {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  gap: 3em;
  padding-top: 4em;
  padding-bottom: 4.5em;
}

.news__loader {
  justify-self: center;
  grid-column: 1 / 4;
}
</style>
