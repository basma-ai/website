<template>
    <section
            class="signin section"
            :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                    class="signin-inner section-inner"
                    :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header tag="h1" :data="sectionHeader" class="center-content"/>
                <div class="tiles-wrap">
                    <div class="tiles-item">
                        <div class="tiles-item-inner">

                            <div>
                                <table v-show="false" class="darkTable">
                                    <tr>
                                        <td>IP number:</td>
                                        <td>{{ results.ip }}</td>
                                    </tr>
                                    <tr>
                                        <td>Host address:</td>
                                        <td>{{ results.hostname }}</td>
                                    </tr>
                                    <tr>
                                        <td>City name:</td>
                                        <td>{{ results.city }}</td>
                                    </tr>
                                    <tr>
                                        <td>Region name:</td>
                                        <td>{{ results.region }}</td>
                                    </tr>
                                    <tr>
                                        <td>Country code:</td>
                                        <td>{{ results.country }}</td>
                                    </tr>
                                    <tr>
                                        <td>GPS:</td>
                                        <td>{{ results.loc }}</td>
                                    </tr>
                                    <tr>
                                        <td>Postal code:</td>
                                        <td>{{ results.postal }}</td>
                                    </tr>
                                    <tr>
                                        <td>Organization:</td>
                                        <td>{{ results.org }}</td>
                                    </tr>
                                </table>
                                <div v-show="step == 1">
                                    <div class="mb-12">
                                        <c-input
                                                type="email"
                                                label="Email"
                                                placeholder="Email"
                                                label-hidden
                                                required/>
                                    </div>
                                </div>
                                <div v-show="step == 2">
                                    <div class="mb-12">
                                        <c-input
                                                type="text"
                                                label="Company username"
                                                placeholder="Company username"
                                                label-hidden
                                                required/>
                                    </div>
                                    <div class="mb-12">
                                        <c-input
                                                type="text"
                                                label="Company name"
                                                placeholder="Company name"
                                                label-hidden
                                                required/>
                                    </div>
                                </div>
                                <div v-show="step == 3">
                                    <div class="mb-12">
                                        <c-input
                                                type="text"
                                                label="Full name"
                                                placeholder="Full name"
                                                label-hidden
                                                required/>
                                    </div>
                                    <div class="mb-12">
                                        <VuePhoneNumberInput :default-country-code="results.country"
                                                             :ignored-countries="['IL']"
                                                             v-model="mobile"
                                                             @update="mobile_e164 = $event.e164"/>
                                    </div>
                                    <div class="mb-12">
                                        <c-input
                                                type="password"
                                                label="Password"
                                                placeholder="Password"
                                                label-hidden
                                                required/>
                                    </div>
                                </div>
                                <div class="mt-24 mb-32">
                                    <c-button color="primary" wide @click="signup">{{ signup_button_label }}
                                    </c-button>
                                </div>
                            </div>

                            <div class="signin-bottom has-top-divider">
                                <div class="pt-32 text-xs center-content text-color-low">
                                    Already have an account?
                                    <router-link to="/login/" class="func-link">Login</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {SectionProps} from '@/utils/SectionProps.js'
    import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
    import CInput from '@/components/elements/Input.vue'
    import CButton from '@/components/elements/Button.vue'
    import VuePhoneNumberInput from 'vue-phone-number-input';

    export default {
        name: 'CSignupForm',
        components: {
            CSectionHeader,
            CInput,
            CButton,
            VuePhoneNumberInput
        },
        mixins: [SectionProps],
        data() {
            return {
                step: 1,
                signup_button_label: 'Continue',
                mobile: '',
                mobile_e164: '',
                sectionHeader: {
                    title: 'Signup and start serving customers right away.'
                },
                results: []
            }
        },
        methods: {
            signup() {
                this.step++;

                if (this.step == 1) {
                    this.sectionHeader.title = 'Signup and start serving customers right away.'
                }
                if (this.step == 2) {
                    this.sectionHeader.title = 'Signup and rs right away.'
                }
                if (this.step == 3) {
                    this.sectionHeader.title = 'Si custoright away.'
                    this.signup_button_label = 'Signup'
                }
            }
        },
        mounted() {
            this.axios.get('http://ipinfo.io/json?token=91e704e7e4e225').then(response => {
                this.results = response.data
            })
        }
    }
</script>

<style>
    .vue-phone-number-input input {
        height: 48px !important;
        min-height: 48px !important;
    }

    .country-selector {
        height: 48px !important;
        min-height: 48px !important;
    }

    .country-selector__label {
        top: -4px !important;
    }

    .country-selector__input {
        padding-top: 8px !important;
    }

    .country-selector__country-flag {
        top: 22px !important;
    }

    .input-tel__label {
        top: -4px !important;
    }
</style>
