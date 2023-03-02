<script setup>
import { isBuiltInType } from '@vue/compiler-core'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import TestView from './views/TestView.vue'
import RegisterView from './views/RegisterView.vue'
import OldAppVueView from './views/OldAppVueView.vue'
import LoginView from './views/LoginView.vue'
import NavBar from './components/NavBar.vue'
import CardPlace from './components/CardPlace.vue'
</script>

<template>
    <NavBar />
    <div id="app">
        <!-- <TestView /> -->
        <!-- <register-view /> -->
        <!-- <LoginView /> -->
        <!-- <OldAppVueView /> -->
        <RouterView />
    </div>
</template>

<style scoped></style>
