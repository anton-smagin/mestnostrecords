<template>
  <div class="not-found text-white text-center">
    <h2>Release not found</h2>
    <NuxtLink to="/releases" class="text-white">Back to releases</NuxtLink>
  </div>
</template>

<script setup>
const RELEASE_PAGES = [
  'AmbidextrousErrorism', 'AnderdogAndreyLeto', 'AnderdogKelgoma',
  'AnderdogSleepParalysis', 'BosporusAcident', 'ChertaNova',
  'DogEatDog', 'DogRemixDog', 'DorogaVNebo', 'Dryoma', 'Evkalipt',
  'FieldsOfDomodevskaya', 'GroundedRectangle', 'Helix', 'HimeriProraba',
  'Imagine', 'ImaginedAwakenings', 'KokokeiMandarin', 'KokokeiMimoza',
  'KoMaKokokeiDorogaVNebo', 'KoMaRealFace', 'LovelyGrinch',
  'MicrodogEastSide', 'MorakhLimes', 'NewLife', 'Poludryoma', 'Quietud',
  'RatioEtCaritas', 'Relikt0', 'Relikt1', 'ShinraBanshou', 'SlowCrunch',
  'SlowCrunchRemixes', 'SunInsteadOfHead', 'TheWayOfTheDog',
  'TheWayOfTheDogSingle', 'UndisclosedCircuit', 'Veter',
  'VvvedenskayaAttempts', 'Xazy', 'YaBilSputnicomSolnca'
]

const route = useRoute()
const slug = route.params.slug
const camel = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('')
const match = RELEASE_PAGES.find(p => p.toLowerCase() === camel.toLowerCase())

if (match) {
  await navigateTo(`/releases/${match}`, { redirectCode: 301, replace: true })
}
</script>

<style scoped>
.not-found {
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>
