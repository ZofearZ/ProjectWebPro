<script>
import TestAnything from '../components/TestAnything.vue'

export default {
    components: { TestAnything },
    data() {
        return {
            Username: ''
        }
    },
    methods: {
        // changeusername(event) {
        //     console.log(event)
        //     this.Username = event.target.value
        // }
        // @sentvalue="changeusername" ใส่ตอนสร้าง component
    }
}
</script>

<template>
    <div>
        <!-- <InputFormat type="Test" /> -->
        <TestAnything
            @sentvalue="
                (value) => {
                    this.Username = value
                }
            "
            type="Username"
        />
        {{ this.Username }}
        <!-- <InputFormat type="Pasword" />
            <InputFormat type="FirstName" />
            <InputFormat type="LastName" />
            <InputFormat type="Email" /> -->
    </div>
</template>
