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
                    <div class="buttons">
                        <RouterLink to="/register">
                            <a class="button is-black">
                                <strong>Sign up</strong>
                            </a>
                        </RouterLink>
                        <RouterLink to="/login">
                            <a class="button is-black"><strong>Log In</strong></a>
                        </RouterLink>
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
