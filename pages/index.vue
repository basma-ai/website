<template>
    <fragment>
        <c-hero-full class="illustration-section-01"/>
        <c-clients top-divider bottom-divider/>
        <!--        <c-features-split invert-mobile image-fill class="illustration-section-03"/>-->
        <c-features-tiles class="gradient-section"/>
        <c-pricing has-bg-color top-divider pricing-switcher/>
        <c-cta has-bg-color split class="illustration-element-08"/>
    </fragment>
</template>

<script>
    // import sections
    import CHeroSplit from '@/components/sections/HeroSplit.vue'
    import CHeroFull from '@/components/sections/HeroFull.vue'
    import CClients from '@/components/sections/Clients.vue'
    import CFeaturesSplit from '@/components/sections/FeaturesSplit.vue'
    import CFeaturesTiles from '@/components/sections/FeaturesTiles.vue'
    import CPricing from '@/components/sections/Pricing.vue'
    import CCta from '@/components/sections/Cta.vue'

    export default {
        name: 'Home',
        layout: 'with_banner',
        metaInfo: {
            // Children can override the title.
            title: 'basma.ai',
            // Result: My Page Title ← My Site
            // If a child changes the title to "My Other Page Title",
            // it will become: My Other Page Title ← My Site
            titleTemplate: 'Launch your virtual branch now | %s',
        },
        components: {
            // CHeroSplit,
            CHeroFull,
            CClients,
            // CFeaturesSplit,
            CFeaturesTiles,
            CPricing,
            CCta
        },
        created() {
        },
        metaInfo() {
            return {
                title: "Launch your virtual branch now",
                titleTemplate: '%s | basma.ai',
                meta: [
                    {
                        hid: "og:title",
                        name: "og:title",
                        content: "Launch your virtual branch now | basma.ai"},
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
