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

  const subtotal = computed(() => state.items.length * 1500)

  const total = computed(() => {
    const count = state.items.length
    const bundlesOf3 = Math.floor(count / 3)
    const remainder = count % 3
    return bundlesOf3 * 3000 + remainder * 1500
  })

  const discount = computed(() => subtotal.value - total.value)

  function addItem({ id, title, artist, cassetteId }) {
    if (state.items.some(item => item.cassetteId === cassetteId)) return
    state.items.push({ id, title, artist, cassetteId, price: 1500 })
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
