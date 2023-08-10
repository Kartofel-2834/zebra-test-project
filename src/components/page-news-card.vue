<template>
  <app-card :src="preview" class="news__card">
    <template #content>
      <div class="news__card__date">
        <span class="news__card__date__day">{{ day }}</span>
        <span class="news__card__date__other">{{ month }} {{ year }}</span>
      </div>

      <h2 class="news__card__title">
        <slot name="title" />
      </h2>

      <p class="news__card__description">
        <slot name="description" />
      </p>
    </template>

    <template #static>
      <span class="news__card__tag">
        <slot name="tag">Новости</slot>
      </span>
    </template>
  </app-card>
</template>

<script setup>
import { defineProps, computed } from "vue";

// Components
import AppCard from "./ui/app-card.vue";

// Utils
import getMonthName from "@/utils/getMonthName";

const props = defineProps({
  preview: { type: String, default: "/news-preview.png" },
  date: { type: Date, default: new Date() },
});

const year = computed(() => props.date.getFullYear());
const month = computed(() => getMonthName(props.date.getMonth()));
const day = computed(() => {
  const currentDay = props.date.getDate();

  return (currentDay > 9 ? "" : "0") + currentDay;
});
</script>

<style>
.news__card .card__content {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.news__card__date {
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: 1fr;
  column-gap: 0.5em;
  align-items: center;
  color: var(--text-faded);
}

.news__card__date__day {
  font-size: 2.35em;
}

.news__card__date__other {
  font-weight: 700;
  font-size: 0.9em;
  display: flex;
}

.news__card__tag {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25em 1em;
  background-color: var(--secondary);
  border-radius: 360px;
}
</style>
