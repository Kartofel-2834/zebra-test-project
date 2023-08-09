<template>
  <div class="intro">
    <img src="/intro.jpg" alt="intro" class="intro__background" />

    <section class="intro__content">
      <slot />
    </section>
  </div>
</template>

<style>
.intro {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: end;

  max-width: 100%;
  overflow: hidden;
}

.intro > * {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.intro__background,
.intro__content {
  width: 100%;
}
</style>
