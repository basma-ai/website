<template>
    <fragment>
        <Loading v-if="null == page"></Loading>
        <c-generic-section  v-else  top-divider>
            <div class="container-xs">
                <h2 class="mt-0">{{ page.title }}</h2>
                <div v-html="page.html">
                </div>
            </div>
        </c-generic-section>

    </fragment>
</template>

<script>
    // import layout
    import CLayout from '@/layouts/LayoutDefault.vue'
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

    import { getPage } from "../utils/api";
    import Loading from '@/components/elements/Loading.vue'

    export default {
        props: ['tag','id'],
        name: 'Secondary',
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
            Loading
        },
        data() {
            return {
                page: null
            }
        },
        created() {
            this.$emit('update:layout', CLayout)
            this.getPoge();
        },
        methods:{
            async getPoge() {
                const page = await getPage(this.id, [this.tag]);
                this.page = page;
            }
        }
    }
</script>
