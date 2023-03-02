<script>
export default {
    props: {
        type: String
    },
    computed: {
        placeholder_text() {
            return this.type
        },
        id_text() {
            return this.type
        }
    },
    methods: {
        text_change(event) {
            const value = event.target.value
            console.log(value)
            this.$emit('sentvalue', event.target.value)
        }
    }
}
</script>

<template>
    <div class="field">
        <label class="label">{{ type }}</label>
        <div class="control">
            <input class="input" type="text" :placeholder="type" :id="type" @input="text_change" />
        </div>
    </div>
</template>

<style scope>
.label {
    color: rgba(255, 255, 255, 0.537);
}
</style>
