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
        metaInfo () {
            return {
                title: 'Signup',
                titleTemplate: '%s | basma.ai'
            }
        },
    }
</script>
