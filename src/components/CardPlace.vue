<script>
export default {
    props: {
        place: String
    },
    computed: {
        placeholder_text() {
            return this.place
        },
        id_text() {
            return this.place
        }
    }
    // methods: {
    //     text_change(event) {
    //         this.$emit('sentvalue', event)
    //     }
    // }
}
</script>

<template>
    <div class="container">
        <div class="card" v-for="n in 10" :key="n">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img
                        src="https://bulma.io/images/placeholders/1280x960.png"
                        alt="Placeholder image"
                    />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-content">
                        <p class="title is-4">John Smith</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 15px;
    place-items: center;
}
.card {
    width: 256px;
    margin-top: 3px;
}
</style>
