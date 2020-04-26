<template>
    <section
        class="clients section reveal-fade"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="clients-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <div class="center-content text-xs">
                    <p style="text-transform: uppercase">Trusted by</p>
                </div>
                <ul class="list-reset">
                    <li class="reveal-scale-up" data-reveal-delay="400">
                        <a target="_blank" href="https://www.moh.gov.bh">
                            <c-image
                                    :src="require('@/assets/images/clients-01.png')"
                                    alt="Ministry of Health in Bahrain"
                                    :width="250"
                                    :height="50" />
                        </a>
                    </li>
                    <li class="reveal-scale-up" data-reveal-delay="200">
                        <a target="_blank" href="https://www.instagram.com/bahraindeaf">
                            <c-image
                                    :src="require('@/assets/images/clients-04.png')"
                                    alt="Bahrain Deaf Society"
                                    :width="140"
                                    :height="20" />
                        </a>
                    </li>
                    <li class="reveal-scale-up">
                        <a target="_blank" href="https://feehla.com">
                            <c-image
                                    :src="require('@/assets/images/clients-03.png')"
                                    alt="Feehla"
                                    :width="75"
                                    :height="39" />
                        </a>
                    </li>
                    <li class="reveal-scale-up" data-reveal-delay="200">
                        <a target="_blank" href="https://www.instagram.com/physiocarebh">
                            <c-image
                                    :src="require('@/assets/images/clients-02.jpg')"
                                    alt="Physiocare"
                                    :width="200"
                                    :height="50" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/utils/SectionProps.js'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CClients',
  components: {
    CImage
  },
  mixins: [SectionProps]
}
</script>
