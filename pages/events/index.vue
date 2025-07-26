<template>
  <div class="artists">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="event in events"
          :key="`${event.name}`"
          class="col-md-4 col-sm-6 col-xs-12 align-items-center"
        >
          <NuxtLink class="btn" :to="`/${event.link}`">
            <div class="mb-1 align-middle ">
              <img :src="getImageUrl(event.photo)" class="crop" />
            </div>
            <div class="text-white">
              <p class="description">{{ event.name }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventsPage',
  components: {},
  data() {
    return {
      events: [
      {
          name: 'Munk 24-08-24',
          photo: '24-08-24-munk',
          link: 'events/24-08-24-Munk'
        },
        {
          name: 'Munk 21-06-24',
          photo: '21-06-24-munk',
          link: 'events/21-06-24-Munk'
        }
      ]
    }
  },
  methods: {
    getImageUrl(photo) {
      return `/static/${photo}.jpg`
    }
  },
}
</script>

<style scoped>
.description {
  font-family: Acrom, sans-serif;
  font-size: 0.8em;
  font-weight: bold;
  cursor: pointer;
}

.description:hover {
  color: #91a79d;
}

.p-5 {
  justify-content: space-around;
}

.artist {
  padding: 16px;
}

.crop {
  object-fit: contain;
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
