<template>
  <div v-if="event" class="relief-event w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img :src="event.image" :alt="event.title" class="poster" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="event-name">{{ event.title }}</h5>
        </div>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description mb-5" lang="ru">
          <p v-for="(paragraph, i) in event.description" :key="i">
            <template v-for="(line, j) in paragraph" :key="j"><br v-if="j" />{{ line }}</template>
          </p>
          <p v-if="event.place?.length">
            <ClientOnly><font-awesome-icon :icon="['fas', 'location-dot']" /></ClientOnly>
            <template v-for="(line, j) in event.place" :key="j"><br v-if="j" />{{ line }}</template>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { reliefEvents } = useRelief()
const event = reliefEvents.find(e => e.slug === route.params.slug)

if (!event) {
  throw createError({ statusCode: 404, statusMessage: 'Event not found' })
}

const title = `${event.title} — Relief`
useSeoMeta({
  title,
  ogTitle: title,
  description: event.description[0]?.[0],
  ogImage: `https://mestnostrecords.com${event.image}`,
})
</script>

<style scoped>
.relief-event {
  color: #111;
}

.poster {
  max-width: 80%;
  height: auto;
}

.event-name {
  font-weight: 400;
  letter-spacing: 0.06em;
  line-height: 1.3;
}

.description {
  margin: 0 15%;
  font-family: var(--relief-font);
  text-align: justify;
}

.fill {
  min-height: 90vh;
  height: 100%;
}
</style>
