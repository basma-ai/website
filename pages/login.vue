<template>
    <c-login-form class="illustration-section-01"/>
</template>

<script>
    // import sections
    import CLoginForm from '@/components/sections/LoginForm.vue'

    export default {
        name: 'Login',
        layout: 'default',
        components: {
            CLoginForm
        },
        created() {
        },
        metaInfo() {
            return {
                title: "Login",
                titleTemplate: '%s | basma.ai',
                meta: [
                    {
                        hid: "og:title",
                        name: "og:title",
                        content: "Login | basma.ai"},
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
