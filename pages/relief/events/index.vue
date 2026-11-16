<template>
  <div class="events">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="event in reliefEvents"
          :key="event.slug"
          class="col-md-4 col-sm-6 col-12 align-items-center"
        >
          <NuxtLink class="btn" :to="reliefPath(`/events/${event.slug}`)">
            <img :src="event.image" :alt="event.title" class="event-image" loading="lazy" />
            <div>
              <p class="description">{{ event.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { reliefEvents, reliefPath } = useRelief()

useSeoMeta({
  title: 'События — Relief',
  ogTitle: 'События — Relief',
})
</script>

<style scoped>
.description {
  color: #111;
  font-family: var(--relief-font) !important;
  font-size: 1em;
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.3;
  cursor: pointer;
}

.description:hover {
  color: #7d8f87;
}

.event-image {
  width: 100%;
  height: auto;
  max-width: 300px;
  display: block;
  margin: 0 auto;
}
</style>
