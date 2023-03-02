<script setup>
import CardPlace from '../components/CardPlace.vue'
import { places } from '../assets/places.js'
</script>

<template>
    <div class="container">
        <CardPlace v-for="place in places" :key="place" :place="place" />
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
    place-items: center;
}
</style>
