<template>
    <fragment>
        <c-pricing has-bg-color top-divider pricing-switcher/>
    </fragment>
</template>

<script>
    // import sections
    import CPricing from '@/components/sections/Pricing.vue'

    export default {
        name: 'Pricing',
        layout: 'default',
        components: {
            CPricing,
        },
        created() {
        },
        head () {
            return {
                title: "Pricing",
                titleTemplate: '%s | basma.ai',
                meta: [
                    {
                        hid: "og:title",
                        name: "og:title",
                        content: "Pricing | basma.ai"},
                    {
                        hid: "description",
                        name: "description",
                        content: "Get started for free, or select a flexible plan based on your needs with basma.ai you can go virtual in less than 5 minutes"
                    },
                    {
                        hid: "og:description",
                        name: "og:description",
                        content: "Get started for free, or select a flexible plan based on your needs with basma.ai you can go virtual in less than 5 minutes"
                    }
                ]
            }
        }
    }
</script>
