<script>
import { isBuiltInType } from '@vue/compiler-core'
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
export default {
    // eslint-disable-next-line vue/no-unused-components
    components: { isBuiltInType, RouterLink, RouterView, NavBar }
}
</script>

<template>
    <div>
        <NavBar />
        <div id="app">
            <!-- <TestView /> -->
            <!-- <register-view /> -->
            <!-- <LoginView /> -->
            <!-- <OldAppVueView /> -->
            <RouterView />
            <!-- <PlaceView /> -->
        </div>
    </div>
</template>

<style scoped></style>

<!-- google map
search
like
sort -->
