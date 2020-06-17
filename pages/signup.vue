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
        metaInfo() {
            return {
                title: "Signup",
                titleTemplate: '%s | basma.ai',
                meta: [
                    {
                        hid: "og:title",
                        name: "og:title",
                        content: "Signup | basma.ai"},
                    {
                        hid: "description",
                        name: "description",
                        content: "Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."
                    },
                    {
                        hid: "og:description",
                        name: "og:description",
                        content: "Setup your virtual branch and video call center in less than 5 minutes. No technical experience required."
                    }
                ]
            }
        }
    }
</script>
