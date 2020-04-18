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
                            <div class="mb-1">
                                <c-input
                                        v-model="username"
                                        type="text"
                                        label="Company username"
                                        placeholder="Company username"
                                        label-hidden
                                        @onEnter="login"
                                        required/>
                            </div>
                            <div class="mt-16 mb-32">
                                <c-button :loading="loading" color="primary" wide @click="login">Login</c-button>
                            </div>
                            <div class="signin-bottom has-top-divider">
                                <div class="pt-32 text-xs center-content text-color-low">
                                    Don't you have an account?
                                    <router-link to="/signup/" class="func-link">Sign up</router-link>
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
    import CCheckbox from '@/components/elements/Checkbox.vue'

    export default {
        name: 'CSignupForm',
        components: {
            CSectionHeader,
            CInput,
            CButton,
            CCheckbox
        },
        mixins: [SectionProps],
        data() {
            return {
                sectionHeader: {
                    title: 'Welcome back.'
                },
                username: null,
                loading: false,
                captcha_token: null
            }
        },
        methods: {
            login() {
                let this_app = this;
                this_app.loading = true

                this_app.recaptcha().then((res) => {
                    let params = {
                        org_username: this_app.username,
                        'g-recaptcha-response': this_app.captcha_token
                    }

                    this_app.axios.post(process.env.VUE_APP_API_URL + '/onboarding/check_org_username', params).then(response => {
                        this_app.loading = false

                        if (response.data.data.username_exists) {
                            window.location = process.env.VUE_APP_DASHBOARD_URL + '/' + this_app.username
                        } else {
                            this_app.handleErrors(["User does not exist"])
                        }
                    })
                })

            },
            handleErrors(errors) {
                for (let error of errors) {
                    if (null != error.msg) {
                        this.showDialog({title: error.param, message: error.msg, type: 'error', timeout: 3000})
                    } else {
                        this.showDialog({title: 'Error', message: error, type: 'error', timeout: 3000})
                    }
                }
            },
            async recaptcha() {
                // (optional) Wait until recaptcha has been loaded.
                await this.$recaptchaLoaded()

                // Execute reCAPTCHA with action "login".
                const token = await this.$recaptcha('login')

                this.captcha_token = token;

                return this.captcha_token
            }
        },
        template: '<button @click="recaptcha">Execute recaptcha</button>',
        notifications: {
            showDialog: { // You can have any name you want instead of 'showLoginError'
                title: '',
                message: '',
                type: 'error',
                timeout: 5000
            }
        }
    }
</script>
