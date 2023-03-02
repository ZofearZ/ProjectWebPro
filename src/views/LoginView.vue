<script>
import InputFormat from '../components/InputFormat.vue'
export default {
    components: { InputFormat },
    data() {
        return {
            Username: '',
            Password: ''
        }
    },
    methods: {
        changeusername(event) {
            console.log(event)
            this.Username = event.target.value
        },
        changepassword(event) {
            console.log(event)
            this.Password = event.target.value
        },
        check() {
            console.log('checking')
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Login</h1>
        <InputFormat
            @sentvalue="changeusername"
            type="Username"
            help="Username or Email"
            help_color="is-danger"
        />
        {{ this.Username }}
        <InputFormat @sentvalue="changepassword" type="Pasword" />
        {{ this.Password }}<br />
        <button @click="check" class="button is-primary is-rounded">Sign IN</button>
    </div>
</template>

<style scoped>
* {
    margin: auto;
    margin-top: 1rem;
    padding: 0.5rem;
}
.container {
    width: 512px;
}
h1 {
    font: 3.5em sans-serif;
    text-align: center;
    color: white;
}
button {
    font-size: 1.2rem;
    display: flex;
    margin-right: 0;
}
.buttons {
    display: flex;
    margin-right: 0;
}
</style>
