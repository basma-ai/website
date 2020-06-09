<template>
    <c-signup-form class="illustration-section-01"/>
</template>

<script>
    // import sections
    import CSignupForm from '@/components/sections/SignupForm.vue'

    export default {
        name: 'Signup',
        layout: 'signin',
        components: {
            CSignupForm
        },
        created() {
        },
        head () {
            return {
                title: "Setup your virtual branch in 5 minutes",
                titleTemplate: '%s | basma.ai',
                meta: [
                    // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                    { hid: 'description', name: 'description', content: 'You are 5 minutes away from launching your virtual branch.' }
                ]
            }
        }
    }
</script>
