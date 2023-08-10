<template>
  <page-header />

  <page-intro>
    <h1>Новости</h1>
  </page-intro>

  <page-news-list />

  <page-footer />
</template>

<script setup>
// Components
import PageHeader from "@/components/page-header.vue";
import PageIntro from "./components/page-intro.vue";
import PageNewsList from "./components/page-news-list.vue";
import PageFooter from "./components/page-footer.vue";
</script>

<style src="@/assets/css/index.css" />
