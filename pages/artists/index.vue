<template>
  <div class="artists">
    <div class="container-fluid">
      <div class="row p-5">
        <div
          v-for="artist in artists"
          :key="`${artist.name}`"
          class="col-md-4 col-sm-6 col-xs-12"
        >
          <div class="mb-1 align-middle ">
            <img :src="require(`~/static/${artist.photo}_face.jpg`)" class="crop" />
          </div>
          <div class="text-white">
            <p class="description">{{ artist.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtistsPage',
  components: {},
  data() {
    return {
      artists: [
        {
          name: 'Kisser',
          photo: 'kisser',
        },
        {
          name: 'Max Ananyev',
          photo: 'max_ananyev',
        },
        {
          name: 'Ambidextrous',
          photo: 'ambidextrous',
        },
        {
          name: 'Ne Tvoy Drug',
          photo: 'ne_tvoy_drug',
        },
        {
          name: 'Ko+Ma',
          photo: 'koma',
        },
        {
          name: 'Andrey Rasputin',
          photo: 'rasputin',
        },
        {
          name: 'Kokokei',
          photo: 'kokokei',
        },
        {
          name: 'Anderdog and Andrey Leto',
          photo: 'anderdogandreyleto',
        },
        {
          name: 'Morakh',
          photo: 'morakh',
        },
        {
          name: 'Vvvedenskaya',
          photo: 'vvvedenskaya',
        },
        {
          name: 'Microdog',
          photo: 'microdog',
        },
        {
          name: 'Ambidextrous',
          photo: 'ambidextrous',
        },
        {
          name: 'Ko+Ma',
          photo: 'koma',
        },
        {
          name: 'Anderdog',
          photo: 'anderdog',
        },
      ],
    }
  },
  methods: {},
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
</style>
