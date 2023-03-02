<script>
import InputFormat from '../components/InputFormat.vue'
export default {
    components: { InputFormat },
    data() {
        return {
            Username: '',
            Password: '',
            Firstname: '',
            Lastname: '',
            Email: ''
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
        changefirstname(event) {
            console.log(event)
            this.Firstname = event.target.value
        },
        changelastname(event) {
            console.log(event)
            this.Lastname = event.target.value
        },
        changeemail(event) {
            console.log(event)
            this.Email = event.target.value
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Register</h1>
        <InputFormat @sentvalue="changeusername" type="Username" />
        {{ this.Username }}
        <InputFormat @sentvalue="changepassword" type="Pasword" />
        {{ this.Password }}
        <InputFormat @sentvalue="changefirstname" type="FirstName" />
        {{ this.Firstname }}
        <InputFormat @sentvalue="changelastname" type="LastName" />
        {{ this.Lastname }}
        <InputFormat @sentvalue="changeemail" type="Email" />
        {{ this.Email }}
        <div class="buttons">
            <button class="button is-primary is-rounded">Sign UP</button>
        </div>
    </div>
</template>

<style scoped>
* {
    margin: auto;
    margin-top: 0.5rem;
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
</style>
