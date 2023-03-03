<script>
export default {
    props: {
        type: String,
        help: String,
        help_color: String,
        value: String
    },
    data() {
        return {
            color: ''
        }
    },
    methods: {
        text_change(event) {
            this.$emit('sentvalue', event)
        }
    },
    conputed: {
        colorchange() {
            this.color = this.help_color
        }
    }
}
</script>

<template>
    <div class="field">
        <label class="label">{{ type }}</label>
        <div class="control">
            <input
                class="input"
                :value="value"
                type="text"
                :placeholder="type"
                :id="type"
                @input="text_change"
            />
        </div>
        <p class="help" :class="{ color }">{{ help }}{{ color }}</p>
    </div>
</template>

<style scope>
.label {
    color: rgba(255, 255, 255, 0.537);
    font-size: 1.3rem;
}
</style>
