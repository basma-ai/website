<template>
    <fragment>
        <div class="body-wrap">
            <c-header nav-position="right" hide-nav/>
            <main class="site-content">
                <nuxt/>
            </main>
        </div>
    </fragment>
</template>

<script>
    import CHeader from '@/components/layout/Header.vue'

    export default {
        components: {
            CHeader
        }
    }
</script>
