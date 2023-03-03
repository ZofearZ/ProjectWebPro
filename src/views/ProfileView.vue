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
        },
        register() {
            if (
                this.Username !== '' &&
                this.Password !== '' &&
                this.Firstname !== '' &&
                this.Lastname !== '' &&
                this.Email !== ''
            ) {
                console.log(this.Username, this.Password, this.Firstname, this.Lastname, this.Email)
            } else {
                alert('กรุณากรอกข้อมูล')
            }
            console.log('editing')
        },
        deleteact() {
            this.Username = ''
            this.Password = ''
            this.Firstname = ''
            this.Lastname = ''
            this.Email = ''
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Profile</h1>
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
            <button @click="deleteact" class="button is-primary is-rounded">Delete Account</button>
            <button @click="register" class="button is-primary is-rounded">Save Change</button>
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
    font-size: 1.1rem;
    display: flex;
    /* margin-right: 0; */
}
</style>
