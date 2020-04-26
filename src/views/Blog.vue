<template>
    <fragment>
        <Loading v-if="posts.length == 0"></Loading>
        <c-generic-section v-for="post in posts" top-divider>
            <div class="container-xs">
                <h2 class="mt-0">{{ post.title }}</h2>
                <p>
                    {{ post.custom_excerpt }}
                </p>
                <figure>
                    <c-image
                            class="image-larger"
                            :src="post.feature_image"
                            alt="Image placeholder"
                            :width="712"
                            :height="400"/>
                    <figcaption class="text-color-low"></figcaption>
                </figure>
                <div v-html="post.html">
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

    import { getPosts } from "../utils/api";
    import Loading from '@/components/elements/Loading.vue'

    export default {
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
                genericSection01Header: {
                    title: 'Buttons - Lorem ipsum is placeholder text commonly used.'
                },
                genericSection02Header: {
                    title: 'Input forms - Lorem ipsum is placeholder text commonly used.'
                },
                genericSection03Header: {
                    title: 'Modal - Lorem ipsum is placeholder text commonly used.'
                },
                genericSection04Header: {
                    title: 'FAQ - Lorem ipsum is placeholder text commonly used.'
                },
                demoModalActive: false,
                posts: []
            }
        },
        created() {
            this.$emit('update:layout', CLayout)
            this.getPosts();
        },
        methods:{
            async getPosts() {
                const posts = await getPosts();
                this.posts = posts;
            }
        }
    }
</script>
