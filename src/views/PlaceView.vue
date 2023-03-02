<script>
import { places } from '../assets/places.js'
export default {
    props: {
        place_id: String
    },
    data() {
        return {
            place: places,
            route_id: -1
        }
    }
}
</script>

<template>
    <div>
        <label class="label head">{{ this.place[place_id].place_name }}</label>
        <!-- <InputFormat type="Comment" /> -->
        <img :src="this.place[place_id].describe_image" />
        <div class="field">
            <label class="label">Describe</label>
            <div class="contol">
                <textarea
                    class="textarea has-fixed-size is-info"
                    placeholder="Describe ..."
                    :value="this.place[place_id].describe_text"
                    rows="5"
                    readonly
                ></textarea
                ><br />
            </div>
        </div>
        <div class="select is-primary">
            <select v-model="route_id">
                <option hidden value="-1">Route From ...</option>
                <option
                    v-for="(place_from, index) in place[place_id].route.route_from"
                    :key="index"
                    :value="index"
                >
                    {{ place_from }}
                </option>
            </select>
        </div>
        <div class="field">
            <div class="control">
                <textarea
                    class="textarea has-fixed-size is-info"
                    placeholder="Rout ..."
                    :value="place[place_id].route.route_[route_id]"
                    readonly
                    rows="5"
                ></textarea>
            </div>
        </div>
        <div class="field">
            <label class="label">Comment</label>
            <div class="control">
                <textarea
                    class="textarea has-fixed-size"
                    placeholder="Whire Comment"
                    disabled
                    rows="2"
                ></textarea
                ><br />
                <textarea
                    class="textarea has-fixed-size is-info"
                    placeholder="Comment ..."
                    readonly
                    rows="2"
                ></textarea>
            </div>
        </div>
    </div>
</template>

<style scoped>
.label {
    font-size: 1.3rem;
    color: rgba(255, 255, 255, 0.537);
    margin-top: 1rem;
}
.head {
    font-size: 3rem;
    text-align: center;
}
img {
    width: 100vw;
}
.field {
    margin-top: 1.5rem;
}
</style>
