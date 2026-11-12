import { reactive, computed } from 'vue'

const state = reactive({
  items: []
})

// Load from localStorage on client
if (process.client) {
  try {
    const saved = localStorage.getItem('mestnost-cart')
    if (saved) {
      const parsed = JSON.parse(saved)
      if (Array.isArray(parsed)) {
        state.items = parsed
      }
    }
  } catch (e) {
    // ignore malformed data
  }
}

function persist() {
  if (process.client) {
    localStorage.setItem('mestnost-cart', JSON.stringify(state.items))
  }
}

export function useCart() {
  const cassetteCount = computed(() => state.items.length)

  const priceOf = item => item.price || 1500

  const subtotal = computed(() => state.items.reduce((sum, item) => sum + priceOf(item), 0))

  // 3 cassettes for 3000 ₽: only items at the regular 1500 ₽ count toward it
  const total = computed(() => {
    const regular = state.items.filter(item => priceOf(item) === 1500).length
    const bundlesOf3 = Math.floor(regular / 3)
    return subtotal.value - bundlesOf3 * (3 * 1500 - 3000)
  })

  const discount = computed(() => subtotal.value - total.value)

  function addItem({ id, title, artist, cassetteId, price = 1500 }) {
    if (state.items.some(item => item.cassetteId === cassetteId)) return
    state.items.push({ id, title, artist, cassetteId, price })
    persist()
  }

  function removeItem(cassetteId) {
    const idx = state.items.findIndex(item => item.cassetteId === cassetteId)
    if (idx !== -1) {
      state.items.splice(idx, 1)
      persist()
    }
  }

  function clearCart() {
    state.items.splice(0, state.items.length)
    persist()
  }

  function isInCart(cassetteId) {
    return state.items.some(item => item.cassetteId === cassetteId)
  }

  return {
    items: state.items,
    addItem,
    removeItem,
    clearCart,
    isInCart,
    cassetteCount,
    total,
    discount,
    subtotal
  }
}
