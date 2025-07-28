<template>
  <div class="koma-doroga-v-nebo w-100">
    <div class="row mb-5 fill d-flex">
      <div class="col-12 col-md-6 align-self-center">
        <img src="/static/doroga_v_nebo_kokokei_edit.jpg" width="80%" />
      </div>
      <div class="col-12 col-md-6 align-self-center">
        <div class="mt-5">
          <h5 class="text-white release-name">Ko+Ma</h5>
          <h5 class="text-white">
            <span class="text-nowrap">Дорога в небо</span>
            <span class="text-nowrap">(Kokokei Edit)</span>
          </h5>
          <div>
            <div
              v-for="link in links"
              :key="link.name"
              class="store-link col-12 col-lg-4 col-md-6 mt-5 text-nowrap"
            >
              <font-awesome-icon
                :icon="['fab', link.icon]"
                class="text-white"
              />
              <a :href="link.link" target="_blank" class="text-white social">
                {{ link.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-12">
        <iframe
          src="https://vk.com/video_ext.php?oid=-205699954&id=456239029&hd=2&autoplay=1"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameborder="0"
          :height="iframeHeight"
          :width="iframeWidth"
          allowfullscreen
        >
        </iframe>
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-md-12">
        <div class="description text-white mb-5">
          <p>
            Клип Ko+Ma и новая интерпретация трека от Kokokei.
            Следующий альбом выйдет на лейбле Местность в 2025 году.
            Режиссер клипа — Марго Кобозева.
          </p>
          <p>
            Клип снимали:
          </p>
          <ul>
            <li>Марго Кобозева</li>
            <li>Юля Горбунова</li>
            <li>Таня Кондратьева</li>
          </ul>
          <p class="mt-5">
            Video Ko+Ma and a new interpretation of the track from Kokokei.
            The next album will be released on the label Mestnost in 2025.
            Video director - Margo Kobozeva.
          </p>
          <p>
            The video was filmed by:
          </p>
          <ul>
            <li>Margo Kobozeva</li>
            <li>Yulia Gorbunova</li>
            <li>Tanya Kondratieva</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DorogaVNeboKokokeiEdit',
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/kokokei-edit',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/us/album/%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B0-%D0%B2-%D0%BD%D0%B5%D0%B1%D0%BE-kokokei-edit-single/1774766821'
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/2s0TBzjshLplgjV4Qzley1'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/33722550'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000255722_22255722_e6548114ce187136b8'
        },
      ],
    }
  },
  data() {
    return {
      links: [
        {
          name: 'Bandcamp',
          icon: 'bandcamp',
          link: 'https://mestnost.bandcamp.com/album/kokokei-edit',
        },
        {
          name: 'Apple Music',
          icon: 'apple',
          link: 'https://music.apple.com/us/album/%D0%B4%D0%BE%D1%80%D0%BE%D0%B3%D0%B0-%D0%B2-%D0%BD%D0%B5%D0%B1%D0%BE-kokokei-edit-single/1774766821'
        },
        {
          name: 'Spotify',
          icon: 'spotify',
          link: 'https://open.spotify.com/album/2s0TBzjshLplgjV4Qzley1'
        },
        {
          name: 'Yandex',
          icon: 'yandex',
          link: 'https://music.yandex.ru/album/33722550'
        },
        {
          name: 'Vk',
          icon: 'vk',
          link: 'https://vk.com/music/album/-2000255722_22255722_e6548114ce187136b8'
        },
      ],
      iframeHeight: '400px',
      iframeWidth: '100%',
    }
  },
  mounted() {
    this.updateIframeSize();
    window.addEventListener('resize', this.updateIframeSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateIframeSize);
  },
  methods: {
    updateIframeSize() {
      this.iframeHeight = (window.innerHeight / 2) + 'px';
      this.iframeWidth = (window.innerWidth / 2) + 'px';
    },
  },
}
</script>

<style scoped>
.koma-doroga-v-nebo {
  background-color: black;
  background-image: none;
}

h1 {
  color: white;
}

.description {
  margin: 0 15%;
  letter-spacing: 0.1em;
  line-height: 1.5em;
  font-family: Acrom, sans-serif;
  text-align: justify;
  @media only screen and (max-width: 768px) {
    letter-spacing: 0.08em;
  }
}

.social {
  font-size: 1em;
  text-decoration: none;
  margin-left: 0.1em;
}

.store-link {
  display: inline-block;
  margin-left: 0.1em;
  letter-spacing: 0.2em;
  @media only screen and (max-width: 768px) {
    margin-left: 0;
  }
}

.release-name {
  font-weight: bold;
}

.fill {
  min-height: 90vh;
  height: 100%;
}

.video-wrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}

.video-wrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
