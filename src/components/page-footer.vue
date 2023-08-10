<template>
  <footer class="footer">
    <section class="footer__content">
      <img
        src="@/assets/icons/logo.svg"
        alt="logo"
        class="footer__content__logo"
      />
      <span class="footer__content__mark">© alpha, 2023</span>
    </section>
  </footer>
</template>

<style>
.footer {
  padding: 1.5em 0;
  background-color: var(--secondary);
}

.footer__content {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

.footer__content > * {
  max-width: 7.125em;
}

.footer__content__mark {
  color: var(--text-grey);
  line-height: 140%;
}
</style>
