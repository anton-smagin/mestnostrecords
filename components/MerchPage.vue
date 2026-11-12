<template>
  <div class="merch-page">
    <div class="container-fluid">
      <div class="row p-5">
        <div class="col-12">
          <h1 class="merch-heading text-center mb-5">Мерч</h1>
        </div>
      </div>
      <div class="row p-5">
        <template v-for="item in merchItems" :key="item.id">
          <MerchItem
            v-if="item.type === 'cassette'"
            :title="item.title"
            :artist="item.artist"
            :cassette-id="item.cassetteId"
            :image-url="item.imageUrl"
            :price="item.price"
            :numeric-price="item.numericPrice || 1500"
            :order-link="item.orderLink"
            :album-link="releaseHref(item)"
            :out-of-stock="item.outOfStock"
          />
          <TShirtItem
            v-if="item.type === 'tshirt'"
            :title="item.title"
            :description="item.description"
            :image-url="item.imageUrl"
            :price="item.price"
            :out-of-stock="item.outOfStock"
          />
        </template>
      </div>
    </div>

    <CartBar @checkout="showCheckout = true" />
    <CartCheckoutModal :show="showCheckout" @close="showCheckout = false" />
  </div>
</template>

<script setup>
// The merch page of both sites: the same items (composables/useMerch.js),
// in the colours of whichever site shows it.
const { merchItems, releaseHref } = useMerch()
const showCheckout = ref(false)
</script>

<style scoped>
.merch-page {
  background-color: black;
  min-height: 100vh;
  padding-bottom: 80px;
}

.merch-heading {
  color: white;
  font-family: NotoSans, sans-serif;
  font-weight: bold;
  letter-spacing: 0.1em;
}

.p-5 {
  justify-content: space-around;
}

/* Relief: paper background, dark type, no black cards */
.relief-theme .merch-page {
  background-color: transparent;
}

.relief-theme .merch-heading {
  color: #111;
  font-weight: normal;
}
</style>
