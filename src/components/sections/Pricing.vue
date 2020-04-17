<template>
    <section
            class="pricing section"
            :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                    class="pricing-inner section-inner"
                    :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content"/>
                <div
                        v-if="pricingSwitcher"
                        class="pricing-switcher center-content"
                >
                    <c-switch
                            v-model="priceChangerValue"
                            true-value="1"
                            false-value="0"
                            right-label="Billed Annually">
                        Billed Monthly
                    </c-switch><br>
                    <b class="text-color-secondary" :class="[
                        priceChangerValue == '1' && 'text-color-primary',
                    ]" style="font-size:15px"> (2 months free with annual billing)</b>
                </div>
                <div
                        v-if="pricingSlider"
                        class="pricing-slider center-content"
                >
                    <label class="form-slider">
                        <span class="mb-16">How many users do you have?</span>
                        <input
                                type="range"
                                ref="slider"
                                v-model="priceChangerValue"
                                @input="handlePricingSlide"
                        />
                    </label>
                    <div ref="sliderValue" class="pricing-slider-value">
                        {{ getPricingData(priceInput) }}
                    </div>
                </div>
                <div
                        class="tiles-wrap illustration-section-02"
                        :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item reveal-from-top basic" data-reveal-delay="200">
                        <div class="tiles-item-inner has-shadow ">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan1, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan1, 1) }}</span>
                                        <span class="text-sm">{{ getPricingData(this.priceOutput.plan1, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs">Basic plan for starting small</div>
                                </div>
                                <div class="pricing-item-features mb-40">
<!--                                    <div class="pricing-item-features-title text-xs text-color-high mb-24">-->
<!--                                        What's included-->
<!--                                    </div>-->
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">5,000min/month</li>
                                        <li class="is-checked">0.1/min per extra min</li>
                                        <li class="is-checked">1 User</li>
                                        <li class="is-checked">1 Group</li>
                                        <li class="is-checked">2 Services</li>
                                        <li>Custom Fields</li>
                                        <li>Chat box</li>
                                        <li>Exchange Files</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="primary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-top silver">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan2, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan2, 1) }}</span>
                                        <span class="text-sm">{{ getPricingData(this.priceOutput.plan2, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs">Silver plan for mid-size businesses</div>
                                </div>
                                <div class="pricing-item-features mb-40">
<!--                                    <div class="pricing-item-features-title text-xs text-color-high mb-24">-->
<!--                                        What's included-->
<!--                                    </div>-->
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">10,000min/month</li>
                                        <li class="is-checked">0.1/min per extra min</li>
                                        <li class="is-checked">5 Users</li>
                                        <li class="is-checked">3 Groups</li>
                                        <li class="is-checked">6 Services</li>
                                        <li class="is-checked">Custom Fields</li>
                                        <li>Chat box</li>
                                        <li>Exchange Files</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="primary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item reveal-from-top platinum" data-reveal-delay="400">
                        <div class="tiles-item-inner has-shadow">
                            <div class="pricing-item-content">
                                <div class="pricing-item-header pb-16 mb-24">
                                    <div class="pricing-item-price">
                                        <span class="pricing-item-price-currency h3 text-color-mid">{{ getPricingData(this.priceOutput.plan3, 0) }}</span>
                                        <span class="pricing-item-price-amount h1">{{ getPricingData(this.priceOutput.plan3, 1) }}</span>
                                        <span class="text-sm">{{ getPricingData(this.priceOutput.plan3, 2) }}</span>
                                    </div>
                                    <div class="text-color-low text-xs">Platinum plan for large businesses</div>
                                </div>
                                <div class="pricing-item-features mb-40">
<!--                                    <div class="pricing-item-features-title text-xs text-color-high mb-24">-->
<!--                                        What's included-->
<!--                                    </div>-->
                                    <ul class="pricing-item-features-list list-reset text-xs mb-32">
                                        <li class="is-checked">15,000min/month</li>
                                        <li class="is-checked">0.1/min per extra min</li>
                                        <li class="is-checked">10 Users</li>
                                        <li class="is-checked">10 Groups</li>
                                        <li class="is-checked">10 Services</li>
                                        <li class="is-checked">Custom Fields</li>
                                        <li class="is-checked">Chat box</li>
                                        <li class="is-checked">Exchange Files</li>
                                    </ul>
                                </div>
                            </div>
                            <div class="pricing-item-cta mb-8">
                                <c-button tag="a" color="primary" wide href="#">Start free trial</c-button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div class="center-content"><b class="text-color-primary">*Addon:</b> <span style="color: white"> Recordings +($0.19 per min)</span></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {SectionTilesProps} from '@/utils/SectionProps.js'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import CSwitch from '@/components/elements/Switch.vue'
    import CButton from '@/components/elements/Button.vue'

    export default {
        name: 'CPricing',
        components: {
            CSectionHeader,
            CSwitch,
            CButton
        },
        mixins: [SectionTilesProps],
        props: {
            pricingSwitcher: {
                type: Boolean,
                default: false
            },
            pricingSlider: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                sectionHeader: {
                    title: 'Plans & Pricing',
                    paragraph:
                        'Get started for free, or select a flexible plan based on your needs.',
                },
                priceChangerValue: "0",
                priceInput: {
                    // 0: "1,000",
                    // 1: "1,250"
                },
                priceOutput: {
                    plan1: {
                        0: ["$", "29", "/month"],
                        1: ["$", "299", "/year"]
                    },
                    plan2: {
                        0: ["$", "99", "/month"],
                        1: ["$", "999", "/year"]
                    },
                    plan3: {
                        0: ["$", "199", "/month"],
                        1: ["$", "1999", "/year"]
                    }
                }
            }
        },
        methods: {
            handlePricingSlide(e) {
                this.handleSliderValuePosition(e.target)
            },
            handleSliderValuePosition(input) {
                const multiplier = input.value / input.max
                const thumbOffset = this.thumbSize * multiplier
                const priceInputOffset = (this.thumbSize - this.$refs.sliderValue.clientWidth) / 2
                this.$refs.sliderValue.style.left = input.clientWidth * multiplier - thumbOffset + priceInputOffset + 'px'
            },
            getPricingData(values, set) {
                return set !== undefined ? values[this.priceChangerValue][set] : values[this.priceChangerValue]
            }
        },
        mounted() {
            if (this.pricingSlider) {
                this.$refs.slider.setAttribute('min', 0)
                this.$refs.slider.setAttribute('max', Object.keys(this.priceInput).length - 1)
                this.thumbSize = parseInt(window.getComputedStyle(this.$refs.sliderValue).getPropertyValue('--thumb-size'), 10)
                this.handleSliderValuePosition(this.$refs.slider)
            }
        }
    }
</script>

<style>
    .text-color-secondary.text-color-primary {
        color: #FFB600 !important;
    }

    .pricing.section .tiles-item-inner {
        border-top: 3px solid;
    }

    .pricing.section .basic .tiles-item-inner {
        border-color: #777777;
    }

    .pricing.section .silver .tiles-item-inner {
        border-color: #1089F8;
    }

    .pricing.section .platinum .tiles-item-inner {
        border-color: #feba1d;
    }
</style>

