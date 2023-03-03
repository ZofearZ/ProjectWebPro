<script>
import { RouterLink } from 'vue-router'
export default {
    componnet: { RouterLink },
    methods: {
        alert_check() {
            alert('logput')
            localStorage.removeItem('user')
            this.$router.go()
        }
    }
}
</script>

<template>
    <nav class="navbar is-white" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <RouterLink to="/">
                    <img src="./icons/Bangkok.jpg" alt="bangkokicon" />
                </RouterLink>
                <RouterLink to="/">
                    <a class="home_name navbar-item"> <strong>Bangkok Place</strong></a>
                </RouterLink>
                <a class="favorite navbar-item">Favorite</a>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <p class="navbar-link">Account</p>
                        <div class="navbar-dropdown is-boxed">
                            <RouterLink to="/profile" class="navbar-item"> Profile </RouterLink>
                            <RouterLink to="/register" class="navbar-item"> Register </RouterLink>
                            <RouterLink to="/login" class="navbar-item"> Login </RouterLink>
                            <hr class="navbar-divider" />
                            <a @click="alert_check" class="navbar-item"> Logout </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.home_name {
    margin-top: 0.5rem;
    font-size: 2rem;
}
.favorite {
    font-size: 1.3rem;
    /* margin-top: 0.5rem; */
}
p {
    font-size: 1.5rem;
}
img {
    width: 80px;
    height: 80px;
}
.button {
    margin-top: 0.5rem;
    padding: auto;
    margin-left: 1rem;
}
</style>
