<template>
  <transition name="slide-up">
    <div v-if="cassetteCount > 0" class="cart-bar" :class="{ expanded }">
      <div class="cart-bar-main" @click="expanded = !expanded">
        <div class="cart-bar-info">
          <span class="cart-count">{{ cassetteCount }} {{ cassetteLabel }}</span>
        </div>
        <div class="cart-bar-right">
          <span class="cart-total">{{ total }} ₽</span>
          <button class="btn-checkout" @click.stop="$emit('checkout')">Оформить заказ</button>
          <span class="expand-arrow">{{ expanded ? '▼' : '▲' }}</span>
        </div>
      </div>

      <div v-if="expanded" class="cart-items-list">
        <div v-for="item in items" :key="item.cassetteId" class="cart-item-row">
          <span class="cart-item-title">{{ item.artist }} — {{ item.title }}</span>
          <span class="cart-item-price">{{ item.price }} ₽</span>
          <button class="cart-item-remove" @click="removeItem(item.cassetteId)">&times;</button>
        </div>
        <div class="cart-actions-row">
          <button class="btn-clear" @click="clearCart">Очистить корзину</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { useCart } from '~/composables/useCart'

export default {
  name: 'CartBar',
  emits: ['checkout'],
  setup() {
    const { items, removeItem, clearCart, cassetteCount, total, discount } = useCart()
    return { items, removeItem, clearCart, cassetteCount, total, discount }
  },
  data() {
    return {
      expanded: false
    }
  },
  computed: {
    cassetteLabel() {
      const n = this.cassetteCount
      if (n === 1) return 'кассета'
      if (n >= 2 && n <= 4) return 'кассеты'
      return 'кассет'
    }
  }
}
</script>

<style scoped>
.cart-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #1a1a1a;
  border-top: 1px solid #333;
  z-index: 900;
  font-family: NotoSans, sans-serif;
  letter-spacing: normal;
}

.cart-bar-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  cursor: pointer;
  user-select: none;
}

.cart-bar-info {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cart-count {
  color: white;
  font-weight: bold;
  font-size: 14px;
}

.cart-hint {
  color: rgba(255, 255, 255, 0.6);
  font-size: 13px;
}

.cart-bar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cart-total {
  color: white;
  font-weight: bold;
  font-size: 16px;
}

.btn-checkout {
  background-color: white;
  color: black;
  border: none;
  padding: 8px 20px;
  border-radius: 4px;
  font-family: NotoSans, sans-serif;
  font-weight: bold;
  font-size: 13px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-checkout:hover {
  background-color: rgba(255, 255, 255, 0.85);
}

.expand-arrow {
  color: #999;
  font-size: 12px;
  margin-left: 4px;
}

.cart-items-list {
  padding: 0 24px 16px;
  border-top: 1px solid #333;
}

.cart-item-row {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px solid #2a2a2a;
}

.cart-item-title {
  color: white;
  font-size: 13px;
  flex: 1;
}

.cart-item-price {
  color: #999;
  font-size: 13px;
  margin-right: 12px;
}

.cart-item-remove {
  background: none;
  border: none;
  color: #666;
  font-size: 20px;
  cursor: pointer;
  padding: 0 4px;
  line-height: 1;
}

.cart-item-remove:hover {
  color: #ff6b6b;
}

.cart-actions-row {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0 0;
}

.btn-clear {
  background: none;
  border: none;
  color: #666;
  font-family: NotoSans, sans-serif;
  font-size: 12px;
  cursor: pointer;
  padding: 4px 0;
  transition: color 0.2s ease;
}

.btn-clear:hover {
  color: #ff6b6b;
}

/* slide-up transition */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media only screen and (max-width: 768px) {
  .cart-bar-main {
    padding: 10px 16px;
    flex-wrap: wrap;
    gap: 8px;
  }

  .cart-bar-info {
    flex: 1 1 100%;
    justify-content: space-between;
  }

  .cart-bar-right {
    flex: 1 1 100%;
    justify-content: space-between;
  }

  .cart-items-list {
    padding: 0 16px 12px;
  }
}
</style>
