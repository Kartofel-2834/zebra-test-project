<template>
  <app-loading :active="isLoading">
    <section class="news">
      <h3 v-if="!isLoading && !news?.length" class="news__row">Нет новостей</h3>

      <template v-else>
        <page-news-card
          v-for="note in news"
          :key="note.code"
          :src="note.image"
          :date="note.date"
          :description="note.previewText"
        >
          <template #title> {{ note.name }} </template>

          <template #tag>
            {{ note.type.value }}
          </template>
        </page-news-card>
      </template>

      <button
        v-show="current && current < total"
        class="news__row"
        @click="loadNews"
      >
        Загрузить ещё
      </button>
    </section>
  </app-loading>
</template>

<script setup>
import { ref } from "vue";

// UI Components
import AppLoading from "@/components/ui/app-loading.vue";

// Components
import PageNewsCard from "./page-news-card.vue";

// Composables
import { fetchNews } from "@/composables/api";

const isLoading = ref(false);

const total = ref(0);
const current = ref(0);
const news = ref([]);

async function loadNews() {
  isLoading.value = true;

  try {
    if (total.value && current.value >= total.value) {
      return;
    }

    const page = current.value ? current.value + 1 : null;
    const res = await fetchNews(page);

    total.value = res.total;
    current.value = res.current;
    news.value = news.value.concat(res.news);
  } catch (err) {
    console.log(err);
  } finally {
    isLoading.value = false;
  }
}

loadNews();
</script>

<style>
.news {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: min-content;
  gap: 3em;
  padding-top: 4em;
  padding-bottom: 4.5em;
  min-height: 80vh;
}

.news__row {
  justify-self: center;
  grid-column: 1 / 4;
}

@media (max-width: 1300px) {
  .news {
    grid-template-columns: 1fr 1fr;
  }

  .news__row {
    grid-column: 1 / 3;
  }
}

@media (max-width: 900px) {
  .news {
    grid-template-columns: 1fr;
  }

  .news__row {
    grid-column: 1 / 2;
  }
}
</style>
