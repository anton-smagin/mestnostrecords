<template>
  <div class="not-found text-white text-center">
    <h2>Release not found</h2>
    <NuxtLink to="/releases" class="text-white">Back to releases</NuxtLink>
  </div>
</template>

<script setup>
function toKebabCase(str) {
  return str
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/([a-zA-Z])(\d)/g, '$1-$2')
    .replace(/(\d)([a-zA-Z])/g, '$1-$2')
    .toLowerCase()
}

const route = useRoute()
const slug = route.params.slug
const kebab = toKebabCase(slug)

if (kebab !== slug) {
  await navigateTo(`/releases/${kebab}`, { redirectCode: 301, replace: true })
}
</script>

<style scoped>
.not-found {
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
