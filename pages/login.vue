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
        head () {
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
                        content: "Login to your account at basma.ai, the virtual branch that makes it easy to serve your customers from anywhere. Let's go virtual!"
                    },
                    {
                        hid: "og:description",
                        name: "og:description",
                        content: "Login to your account at basma.ai, the virtual branch that makes it easy to serve your customers from anywhere. Let's go virtual!"
                    }
                ]
            }
        }
    }
</script>
