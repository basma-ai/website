<template>
    <fragment>
        <c-generic-section top-divider>
            <Loading v-if="null == page"></Loading>
            <div v-else class="container-xs">
                <h2 class="mt-0">{{ page.title }}</h2>
                <div v-html="page.html">
                </div>
                <div class='comments'>
                    <Disqus />
                </div>
            </div>
        </c-generic-section>
    </fragment>
</template>

<script>
    // import section header
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    // import sections
    import CHeroFull from '@/components/sections/HeroFull.vue'
    import CTeam from '@/components/sections/Team.vue'
    import CRoadmap from '@/components/sections/Roadmap.vue'
    import CTestimonial from '@/components/sections/Testimonial.vue'
    import CGenericSection from '@/components/sections/GenericSection.vue'
    import CCta from '@/components/sections/Cta.vue'
    // import some required elements
    import CImage from '@/components/elements/Image.vue'
    import CInput from '@/components/elements/Input.vue'
    import CButtonGroup from '@/components/elements/ButtonGroup.vue'
    import CButton from '@/components/elements/Button.vue'
    import CModal from '@/components/elements/Modal.vue'
    import CAccordion from '@/components/elements/Accordion.vue'
    import CAccordionItem from '@/components/elements/AccordionItem.vue'

    import {getPost} from "../../plugins/api";
    import Loading from '@/components/elements/Loading.vue'
    import { Disqus } from 'vue-disqus'

    export default {
        props: ['id'],
        name: 'Post',
        layout: 'default',
        components: {
            CSectionHeader,
            CHeroFull,
            CTeam,
            CRoadmap,
            CTestimonial,
            CGenericSection,
            CImage,
            CCta,
            CInput,
            CButtonGroup,
            CButton,
            CModal,
            CAccordion,
            CAccordionItem,
            Loading,
            Disqus
        },
        data() {
            return {
                page: {},
            }
        },
        async asyncData({ params }) {
            try {
                const page = await getPost(params.id);
                return {
                    page
                }
            } catch (error) {
            }
        },
        head() {
            return {
                title: this.page.title,
                titleTemplate: '%s | basma.ai',
                meta: [
                    {
                        hid: "og:title",
                        name: "og:title",
                        content: this.page.title + " | basma.ai'"
                    },
                    {
                        hid: "description",
                        name: "description",
                        content: this.page.meta_description
                    },
                    {
                        hid: "og:description",
                        name: "og:description",
                        content: this.page.meta_description
                    },
                ]
            }
        }
    }
</script>
