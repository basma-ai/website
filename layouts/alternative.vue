<template>
    <fragment>
        <div class="body-wrap">
            <c-header nav-position="right"/>
            <main class="site-content">
                <nuxt/>
            </main>
            <c-footer class="illustration-section-06"/>
        </div>
    </fragment>
</template>

<script>
    import CHeader from '@/components/layout/Header.vue'
    import CFooter from '@/components/layout/Footer02.vue'

    export default {
        components: {
            CHeader,
            CFooter
        }
    }
</script>
