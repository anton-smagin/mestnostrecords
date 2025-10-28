<template>
  <div class="tshirt-item col-md-4 col-sm-6 col-12 align-items-center mb-4">
    <div class="tshirt-card">
      <div class="tshirt-image-container">
        <NuxtImg
          :src="imageUrl"
          :alt="title"
          class="tshirt-image"
          format="webp"
          :quality="85"
          loading="lazy"
        />
      </div>
      <div class="tshirt-info">
        <h5 class="tshirt-title text-white">{{ title }}</h5>
        <div class="tshirt-description">
          <p v-for="(line, index) in descriptionLines" :key="index" class="description-line">
            {{ line }}
          </p>
        </div>
        <p class="tshirt-price text-white">{{ price }}</p>
        <button
          @click="openOrderModal"
          class="btn btn-outline-light order-btn"
          :class="{ 'out-of-stock': outOfStock }"
          :disabled="outOfStock"
        >
          {{ outOfStock ? 'Нет в наличии' : 'Заказать' }}
        </button>
      </div>
    </div>

    <OrderModal
      :show="showModal"
      :item-title="title"
      :item-name="'Футболка'"
      @close="closeModal"
    />
  </div>
</template>

<script>
import OrderModal from './OrderModal.vue'

export default {
  name: 'TShirtItem',
  components: {
    OrderModal
  },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: Array,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    },
    price: {
      type: String,
      default: '2500 ₽'
    },
    outOfStock: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  computed: {
    descriptionLines() {
      return this.description
    }
  },
  methods: {
    openOrderModal() {
      if (!this.outOfStock) {
        this.showModal = true
      }
    },
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.tshirt-item {
  padding: 16px;
}

.tshirt-card {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tshirt-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.tshirt-image-container {
  margin-bottom: 15px;
}

.tshirt-image {
  width: 100%;
  max-width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 4px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.tshirt-image:hover {
  transform: scale(1.05);
  opacity: 0.9;
}

.tshirt-info {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.tshirt-title {
  font-family: Acrom, sans-serif;
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 15px;
}

.tshirt-description {
  margin-bottom: 15px;
  text-align: center;
}

.description-line {
  font-family: Acrom, sans-serif;
  font-size: 0.85em;
  margin-bottom: 5px;
  color: #999;
  line-height: 1.4;
}

.tshirt-price {
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

.order-btn.out-of-stock {
  border-color: #666;
  color: #666;
  cursor: not-allowed;
}

.order-btn.out-of-stock:hover {
  background-color: transparent;
  color: #666;
  border-color: #666;
}

@media only screen and (max-width: 1000px) {
  .tshirt-image {
    width: 210px;
    height: 210px;
  }

  .tshirt-title {
    font-size: 1em;
  }

  .description-line {
    font-size: 0.75em;
  }

  .tshirt-price {
    font-size: 1.1em;
  }
}
</style>
