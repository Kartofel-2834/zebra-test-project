<template>
  <app-card :src="preview" class="news__card">
    <div class="news__card__info">
      <div class="news__card__info__date">
        <span class="news__card__info__date__day">{{ day }}</span>
        <span class="news__card__info__date__other">
          {{ month }} {{ year }}
        </span>
      </div>

      <h2 class="news__card__info__title">
        <slot name="title" />
      </h2>

      <p
        v-if="description"
        class="news__card__info__description"
        v-html="description"
      />
    </div>

    <span class="news__card__tag">
      <slot name="tag">Новости</slot>
    </span>
  </app-card>
</template>

<script setup>
import { defineProps, computed } from "vue";

// UI Components
import AppCard from "./ui/app-card.vue";

// Utils
import getMonthName from "@/utils/getMonthName";

const props = defineProps({
  preview: { type: String, default: "/news-preview.png" },
  date: { type: Date, default: new Date() },
  description: { type: String, required: false },
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
  justify-content: space-between;
}

.news__card__info {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.news__card__info__date {
  display: grid;
  grid-template-columns: min-content min-content;
  grid-template-rows: 1fr;
  column-gap: 0.5em;
  align-items: center;
  color: var(--text-faded);
}

.news__card__info__date__day {
  font-size: 2.35em;
}

.news__card__info__date__other {
  font-weight: 700;
  font-size: 0.9em;
  display: flex;
}

.news__card__tag {
  margin-top: 2.5em;
  width: fit-content;
  padding: 0.25em 1em;
  background-color: var(--secondary);
  border-radius: 360px;
}
</style>
