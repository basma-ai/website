<template>
    <section
            class="hero section center-content"
            :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                    class="hero-inner section-inner"
                    :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div class="hero-content">
                    <div class="container-xs ta-l">
                        <h2 class="mt-0 reveal-from-top h3-mobile">
                            <vue-typed-js :strings="homeStrings" :startDelay="1000" :backDelay="2000" :backSpeed="30"
                                          :typeSpeed="60" :shuffle="true" :loop="true" :showCursor="false">
                                <span class="typing"></span>
                            </vue-typed-js>
                        </h2>
                        <p class="h6-mobile">Setup your <b class="text-color-primary">Video Call Center</b> in less than <b
                                class="text-color-secondary">5 minutes</b></p>
                    </div>
                </div>
<!--                <div class="hero-figure illustration-element-05 reveal-from-top">-->
<!--                    <c-image-->
<!--                            class="has-shadow"-->
<!--                            :src="require('@/assets/images/carousel-item-01.png')"-->
<!--                            alt="Video"-->
<!--                            :width="712"-->
<!--                            :height="400"/>-->
<!--                </div>-->
                <div class="hero-figure illustration-element-05 reveal-from-top">
                    <a
                            data-video="https://www.youtube.com/embed/aI68ip9MFMY?rel=0&autoplay=1"
                            href="#"
                            aria-controls="video-modal"
                            @click.prevent="videoModalActive = true">
                        <div class="has-shadow has-shadow-hover play-btn">
                            <feather style="width: 33px" class="text-color-primary" type="play"></feather>
                        </div>
                        <c-image
                                class="has-shadow"
                                :src="require('@/assets/images/carousel-item-01.png')"
                                alt="Video"
                                :width="712"
                                :height="400" />
                    </a>
                </div>
                <c-modal
                        id="video-modal"
                        :active.sync="videoModalActive"
                        video="https://www.youtube.com/embed/aI68ip9MFMY?rel=0&autoplay=1"
                        video-tag="iframe" />
            </div>
        </div>
    </section>
</template>

<script>
    import {SectionProps} from '@/utils/SectionProps.js'
    import CImage from '@/components/elements/Image.vue'
    import CModal from '@/components/elements/Modal.vue'
    import CCarousel from '@/components/elements/Carousel.vue'
    import CCarouselItem from '@/components/elements/CarouselItem.vue'

    export default {
        name: 'CHeroFull',
        mixins: [SectionProps],
        components: {
            CImage,
            CModal,
            CCarousel,
            CCarouselItem
        },
        data() {
            return {
                videoModalActive: false,
                homeStrings: [
                    'Stay closer to your customers‎',
                    // 'Transform the way your customers reach you',
                    // 'Everyone can be a customer service agent',
                    'Redefining customer experience',
                    'Eliminate the physical interaction',
                    'Serve your customers from anywhere',
                    'Reduce operational branch costs',
                    'One call center for the world',
                ]
            }
        }
    }
</script>

<style>
    .hero-content .container-xs {
        max-width: 710px !important;
    }
    .hero-content h2 {
        min-height: 48px;
    }
    .play-btn {
        background-color: rgb(255, 255, 255);
        display: block;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -35px;
        padding: 18px 22px;
    }
    .has-shadow-hover:hover {
        -webkit-box-shadow: 0 32px 88px rgba(35, 46, 59, 0.6);
        box-shadow: 0 32px 88px rgba(35, 46, 59, 0.6);
    }
</style>
