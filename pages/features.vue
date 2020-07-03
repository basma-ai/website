<template>
    <fragment>
        <!--        <c-features-split invert-mobile image-fill class="illustration-section-03"/>-->
        <c-features-tiles class="gradient-section"/>
    </fragment>
</template>

<script>
    // import sections
    import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
    import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'

    export default {
        name: 'Features',
        layout: 'default',
        components: {
            CFeaturesSplit,
            CFeaturesTiles,
        },
        created() {
        },
        head () {
            return {
                title: "Features",
                titleTemplate: '%s | basma.ai',
                meta: [
                    {
                        hid: "og:title",
                        name: "og:title",
                        content: "Features | basma.ai"
                    },
                    {
                        hid: "description",
                        name: "description",
                        content: "All what you need to simulate all your physical branch transactions are doable with basma.ai features. Setup your virtual branch in 5 minutes."
                    },
                    {
                        hid: "og:description",
                        name: "og:description",
                        content: "All what you need to simulate all your physical branch transactions are doable with basma.ai features. Setup your virtual branch in 5 minutes."
                    }
                ]
            }
        }
    }
</script>
