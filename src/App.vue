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

            // let tidio = document.createElement('script')
            // tidio.setAttribute('src', 'https://code.tidio.co/77fscjhhflm0kexipxspnyfeyulm4pz9.js')
            // document.head.appendChild(tidio)

            // let bot = document.createElement('script')
            // bot.setAttribute('src', 'https://bot.basma.ai/assets/modules/channel-web/inject.js')
            // document.head.appendChild(bot)
            //
            // setTimeout(function () {
            //     window.botpressWebChat.init({
            //         host: 'https://bot.basma.ai',
            //         botId: 'landing-page-bot',
            //         botName: 'BasmaBot',
            //         botAvatarUrl: "https://basma-cdn.s3.me-south-1.amazonaws.com/assets/logo-big-smile.png",
            //         showConversationsButton: false,
            //         enableTranscriptDownload: false,
            //         enableReset: false,
            //         // extraStylesheet: '/assets/modules/channel-web/examples/custom-theme.css'
            //     })
            // },1000)

        }
    }
</script>

