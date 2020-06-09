<template>
    <fragment>
        <div id="covid" class="p-8">
            <router-link to="/covid19/">
                <span class="text-xs mr-8">Support your customers during COVID-19 </span>
                <c-button size="sm">Learn more</c-button>
            </router-link>
        </div>
        <c-header nav-position="right"/>
        <main class="site-content">
            <nuxt />
        </main>
        <c-footer class="illustration-section-06"/>
    </fragment>
</template>

<script>
    import CHeader from '@/components/layout/Header.vue'
    import CFooter from '@/components/layout/Footer.vue'
    import CButton from '@/components/elements/Button.vue'

    export default {
        components: {
            CHeader,
            CFooter,
            CButton
        }
    }
</script>

<style scoped>
    .site-header {
        top: 47px;
    }

    #covid {
        position: relative;
        width: 100%;
        background-color: #4783b0;
        text-align: center;
    }

    #covid span {
        color: #fff;
    }

    #covid a:hover {
        text-decoration: none;
    }

    @media (max-width: 629px) {
        #covid button {
            display: none;
        }

        #covid span {
            font-size: 14px;
        }
    }

    #covid button {
        padding: 4px 10px;
        height: 30px;
        background-color: transparent;
        color: white;
        border: 1px solid #fff;
    }

    #covid button:hover {
        background-color: rgba(255, 255, 255, 0.1);
    }
</style>
