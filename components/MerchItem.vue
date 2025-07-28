<template>
  <div class="merch-item col-md-4 col-sm-6 col-12 align-items-center mb-4">
    <div class="merch-card">
      <div class="merch-image-container">
        <img 
          :src="getImageUrl()" 
          :alt="title" 
          class="merch-image"
          @error="handleImageError"
          @click="goToAlbum"
          style="cursor: pointer;"
        />
      </div>
      <div class="merch-info">
        <h5 class="merch-title text-white">{{ title }}</h5>
        <p class="merch-artist text-white">{{ artist }}</p>
        <p class="merch-price text-white">{{ price }}</p>
        <button 
          @click="openOrderModal" 
          class="btn btn-outline-light order-btn"
        >
          Заказать
        </button>
      </div>
    </div>
    
    <OrderModal
      :show="showModal"
      :item-title="title"
      :artist-name="artist"
      @close="closeModal"
    />
  </div>
</template>

<script>
import OrderModal from './OrderModal.vue'

export default {
  name: 'MerchItem',
  components: {
    OrderModal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
    cassetteId: {
      type: String,
      required: true
    },
    price: {
      type: String,
      default: '1500 ₽'
    },
    orderLink: {
      type: String,
      required: true
    },
    albumLink: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      imageError: false,
      showModal: false
    }
  },
  methods: {
    getImageUrl() {
      // Try jpg first, then jpeg if jpg doesn't exist
      return `/static/${this.cassetteId}_cassette_2.jpg`
    },
    handleImageError(event) {
      // If jpg fails, try jpeg
      if (!this.imageError) {
        this.imageError = true;
        event.target.src = `/static/${this.cassetteId}_cassette_1.jpeg`;
      } else {
        // If both fail, show a placeholder or hide the image
        event.target.style.display = 'none';
      }
    },
    goToAlbum() {
      this.$router.push(this.albumLink)
    },
    openOrderModal() {
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.merch-item {
  padding: 16px;
}

.merch-card {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.merch-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.merch-image-container {
  margin-bottom: 15px;
}

.merch-image {
  width: 100%;
  max-width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.merch-image:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.merch-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.merch-title {
  font-family: Acrom, sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 5px;
}

.merch-artist {
  font-family: Acrom, sans-serif;
  font-size: 0.9em;
  margin-bottom: 10px;
  opacity: 0.8;
}

.merch-price {
  font-family: Acrom, sans-serif;
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 15px;
  color: #91a79d;
}

.order-btn {
  font-family: Acrom, sans-serif;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid #91a79d;
  color: #91a79d;
  background: transparent;
}

.order-btn:hover {
  background-color: #91a79d;
  color: black;
  border-color: #91a79d;
}

@media only screen and (max-width: 1000px) {
  .merch-image {
    width: 210px;
    height: 210px;
  }
  
  .merch-title {
    font-size: 1em;
  }
  
  .merch-artist {
    font-size: 0.8em;
  }
  
  .merch-price {
    font-size: 1.1em;
  }
}
</style> 
