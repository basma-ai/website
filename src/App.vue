<template>
    <component :is="layout">
        <router-view :layout.sync="layout"/>
    </component>
</template>

<script>
    import {ScrollReveal} from '@/utils/ScrollReveal.js'

    export default {
        name: 'App',
        mixins: [ScrollReveal],
        data() {
            return {
                layout: 'div'
            }
        },
        mounted() {
            document.body.classList.add('is-loaded')

            // let recaptchaScript = document.createElement('script')
            // recaptchaScript.setAttribute('src', 'https://code.tidio.co/77fscjhhflm0kexipxspnyfeyulm4pz9.js')
            // document.head.appendChild(recaptchaScript)


        }
    }
</script>

