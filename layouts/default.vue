<script setup lang="ts">
  const containerConfig = {
  base: 'mx-auto',
  padding: 'px-4 sm:px-6 lg:px-8',
  constrained: 'max-w-7xl',
}

</script>
<template>
  <UContainer :ui="containerConfig">
    <HeaderAppHeader />
    <main>
      <Placeholder class="h-32" />
      <slot></slot>
    </main>
    <FooterAppFooter />
  </UContainer>
</template>
