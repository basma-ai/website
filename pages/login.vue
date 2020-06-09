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
        }
    }
</script>
