<template>
  <div class="intro">
    <div class="intro__background">
      <img
        src="@/assets/img/intro.jpg"
        alt="intro"
        class="intro__background__img"
      />
    </div>

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

.intro__background {
  max-width: 100%;
  overflow: hidden;
}

.intro__content {
  z-index: 10;
  width: calc(100% - 4em);
}

.intro__background__img {
  width: 100%;
}

@media (max-width: 1500px) {
  .intro__background__img {
    transform: translateX(-20%);
    height: 20em;
    width: auto;
  }
}

@media (max-width: 700px) {
  .intro__background__img {
    transform: translateX(-30%);
  }
}
</style>
