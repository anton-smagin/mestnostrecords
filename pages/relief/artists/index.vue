<template>
  <div class="artists">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="artist in reliefArtists"
          :key="artist.slug"
          class="col-md-4 col-sm-6 col-12 align-items-center"
        >
          <NuxtLink class="btn" :to="reliefPath(`/artists/${artist.slug}`)">
            <div class="mb-1 align-middle">
              <img :src="artist.photo" :alt="artist.name" class="crop" loading="lazy" />
            </div>
            <p class="description">{{ artist.name }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { reliefArtists, reliefPath } = useRelief()

useSeoMeta({
  title: 'Артисты — Relief',
  ogTitle: 'Артисты — Relief',
})
</script>

<style scoped>
.description {
  color: #111;
  font-family: NotoSans, sans-serif;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
}

.description:hover {
  color: #7d8f87;
}

.p-5 {
  justify-content: space-around;
}

.crop {
  object-fit: cover;
  width: 280px;
  height: 280px;
}

@media only screen and (max-width: 1000px) {
  .crop {
    width: 210px;
    height: 210px;
  }
}
</style>
