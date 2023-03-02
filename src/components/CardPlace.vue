<script>
import { RouterLink } from 'vue-router'
export default {
    components: { RouterLink },
    props: {
        place: Object
    },
    data() {
        return {
            star_check: false
        }
    },
    methods: {
        check_star(event) {
            this.star_check = !this.star_check
            event.preventDefault()
        }
    }
}
</script>

<template>
    <RouterLink :to="'/place/' + place.place_id" class="card">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="place.describe_image" alt="Placeholder image" />
            </figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-6">{{ place.place_name }}</p>
                </div>
            </div>
        </div>
        <div @click="check_star" class="icon is-size-3">
            <!-- star ทึบ -->
            <span v-if="star_check" class="icon" key="true">
                <i class="fas fa-star has-text-warning"></i>
            </span>
            <!-- star ใส -->
            <span v-else class="icon" key="false">
                <i class="far fa-star has-text-warning"></i>
            </span>
        </div>
    </RouterLink>
</template>

<style scoped>
.card {
    display: grid;
    width: 300px;
    margin-top: 3px;
}
.icon {
    position: absolute;
    padding: 1.5rem;
    right: 0;
}
</style>
