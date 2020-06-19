<template>
    <section
        class="cta section center-content-mobile"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="cta-inner section-inner reveal-from-top"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider',
                    split && 'cta-split'
                ]" style="background-color: white">
                <div class="cta-slogan">
                    <h3 class="m-0">
                        Want to learn more about <b class="text-color-primary">Basma</b>?
                    </h3>
                </div>
                <div class="cta-action">
                    <c-button tag="a" color="secondary" wide-mobile onclick="Calendly.initPopupWidget({url: 'https://calendly.com/basmadotai/15min?hide_event_type_details=1'});return false;">
                        Schedule time with us
                    </c-button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionProps } from '@/plugins/SectionProps.js'
import CButton from '@/components/elements/Button.vue'

export default {
  name: 'CCta',
  components: {
    CButton
  },
  mixins: [SectionProps],
  props: {
    split: {
      type: Boolean,
      default: false
    }
  }
}
</script>
