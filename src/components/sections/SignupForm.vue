<template>
    <section
            class="signin section"
            :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <fireworks v-if="step == 5"></fireworks>
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
                                <table v-if="false" class="darkTable">
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
                                    <p class="text-xxs">
                                        By signing up, I agree to basma.ai <a href="/terms#privacy-policy">Privacy
                                        Policy</a> and <a href="/terms#terms-of-service">Terms of Service</a>.
                                    </p>
                                    <div class="mb-12">
                                        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                                            <c-input
                                                    v-model="signup_params.email"
                                                    type="email"
                                                    label="Email"
                                                    placeholder="name@company.com"
                                                    label-hidden
                                                    @onEnter="signup"
                                                    required/>
                                            <div class="form-hint text-color-error">{{ errors[0] }}</div>

                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div v-show="step == 2">
                                    <div class="mb-12">
                                        <ValidationProvider name="name" rules="required|min:5|max:100"
                                                            v-slot="{ errors }">
                                            <c-input
                                                    v-model="signup_params.org_name"
                                                    type="text"
                                                    label="Company name"
                                                    placeholder="Company, Inc."
                                                    @onEnter="signup"
                                                    required/>
                                            <div class="form-hint text-color-error">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="mb-12 input-username">
                                        <c-label label="Company username"></c-label>

                                        <ValidationProvider name="username" rules="required|min:4|max:20"
                                                            v-slot="{ errors }">
                                            <c-input type="text" disabled placeholder="dashboard.basma.ai/"
                                                     form-group="mobile">
                                                <c-input
                                                        v-model="signup_params.org_username"
                                                        type="text"
                                                        label="Company username"
                                                        placeholder="username"
                                                        label-hidden
                                                        required/>
                                            </c-input>
                                            <div class="form-hint text-color-error">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div v-show="step == 3">
                                    <div class="mb-12">
                                        <ValidationProvider name="name" rules="required|min:3|max:100"
                                                            v-slot="{ errors }">
                                            <c-input
                                                    v-model="signup_params.name"
                                                    type="text"
                                                    label="Full name"
                                                    placeholder="John Smith"
                                                    required/>
                                            <div class="form-hint text-color-error">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                    <div class="mb-12">
                                        <c-label label="Mobile number"></c-label>
                                        <VuePhoneNumberInput :default-country-code="results.country"
                                                             :ignored-countries="['IL']"
                                                             v-model="mobile"
                                                             @update="signup_params.phone_number = $event.e164"
                                                             required/>
                                        <div class="form-hint text-color-error">{{ errors[0] }}</div>
                                    </div>
                                    <div class="mb-12">
                                        <ValidationProvider name="password" rules="required|min:6|max:50"
                                                            v-slot="{ errors }">
                                            <c-input
                                                    v-model="signup_params.password"
                                                    type="password"
                                                    label="Password"
                                                    placeholder="Password"
                                                    @onEnter="signup"
                                                    required/>
                                            <password v-model="signup_params.password" :strength-meter-only="true"/>
                                            <div class="form-hint text-color-error">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div v-show="step <= 3" class="mt-24 mb-32">
                                    <div class="tiles-wrap">
                                        <div v-if="step > 1" class="tiles-item p-10" style="max-width: 30%;">
                                            <div class="tiles-item-inner">
                                                <c-button color="light" class="text-color-low" @click="back">
                                                    <feather class="" type="arrow-left"></feather>
                                                </c-button>
                                            </div>
                                        </div>
                                        <div class="tiles-item"
                                             v-bind:class="{ 'p-0': step == 1, 'p-10 max-70': step > 1 }">
                                            <div class="tiles-item-inner">
                                                <c-button :loading="loading" color="primary" @click="signup">
                                                    <feather class="" type="arrow-right"></feather>
                                                </c-button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div v-show="step == 4">
                                    <v-otp-input
                                            ref="otpInput"
                                            input-classes="otp-input"
                                            separator="-"
                                            :num-inputs="4"
                                            :should-auto-focus="true"
                                            :is-input-num="true"
                                            @on-change="handleOnChange"
                                            @on-complete="handleOnComplete"
                                    />
                                    <p class="center-content text-xs mt-24">Didn't receive it? <span
                                            style="cursor: pointer; " class="text-color-primary" @click="resentOTP">click here</span>.
                                    </p>
                                </div>
                                <div v-if="step == 5">
                                    <p class="text-sm center-content">Your virtual branch is ready. <br>We'll redirect
                                        you to your
                                        dashboard in <span class="h4 text-color-primary">{{countdown}}</span>..</p>
                                </div>
                            </div>

                            <div v-show="step == 1" class="signin-bottom has-top-divider">
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
    import Fireworks from '@/components/elements/Fireworks.vue'
    import CButtonGroup from '@/components/elements/ButtonGroup.vue'
    import CLabel from '@/components/elements/FormLabel.vue'
    import VuePhoneNumberInput from 'vue-phone-number-input';
    import Password from 'vue-password-strength-meter'

    export default {
        name: 'CSignupForm',
        components: {
            CSectionHeader,
            CInput,
            CButton,
            CButtonGroup,
            CLabel,
            VuePhoneNumberInput,
            Fireworks,
            Password
        },
        mixins: [SectionProps],
        data() {
            return {
                loading: false,
                step: 1,
                mobile: '',
                mobile_e164: '',
                sectionHeader: {
                    title: "You are 5 minutes away from launching your virtual branch.",
                    paragraph: "<p>start your <b class='text-color-primary'>14 days</b> free trial</p>"
                },
                results: {
                    country: "BH"
                },
                join: [],
                signup_params: {
                    org_name: "",
                    org_username: "", //"some" + Math.random().toString().substr(3, 4),
                    email: "",
                    username: '',
                    phone_number: "",
                    name: "",
                    password: ""
                },
                errors: [],
                countdown: 3,
                vendor: null,
                pin: null,
                captcha_token: null
            }
        },
        computed: {

        },
        watch: {
            step(val) {
                switch (val) {
                    case 1:
                        this.sectionHeader.title = 'You are 5 minutes away from launching your virtual branch.';
                        this.sectionHeader.paragraph = "<p>start your <b class='text-color-primary'>14 days</b> free trial</p>";

                        break;
                    case 2:
                        this.sectionHeader.title = 'A little bit about your organization.';
                        this.sectionHeader.paragraph = "";

                        break;
                    case 3:
                        this.sectionHeader.title = "Finally! one last step.";
                        this.sectionHeader.paragraph = "";

                        break;
                    case 4:
                        this.sectionHeader.title = "Enter verification code.";
                        this.sectionHeader.paragraph = "We have sent you an SMS with a code to verify your identity.";

                        break;
                    case 5:
                        this.sectionHeader.title = "Congratulations!";
                        this.sectionHeader.paragraph = "";

                        this.reduceCountdown();

                        break;
                    default:
                        break;

                }

            }
        },
        methods: {
            reduceCountdown() {
                let this_app = this;

                if (this_app.countdown == 1) {
                    window.location = process.env.VUE_APP_DASHBOARD_URL + '/' + this.vendor.username
                    return;
                }

                setTimeout(function () {
                    this_app.countdown--;
                    this_app.reduceCountdown()
                }, 2000)
            },
            back() {
                this.step--;
            },
            signup() {
                let this_app = this;

                if (this.step == 3) {
                    this_app.loading = true

                    this_app.recaptcha().then((res) => {
                        this_app.signup_params.username = this_app.signup_params.email;
                        this_app.signup_params['g-recaptcha-response'] = this_app.captcha_token;

                        this_app.axios.post(process.env.VUE_APP_API_URL + '/onboarding/join', this_app.signup_params).then(response => {
                            this_app.loading = false

                            if (response.data.success) {
                                this_app.step++;
                                this_app.join = response.data.data.join
                                this_app.vendor = response.data.data.join.vendor
                            } else {
                                // console.log(response.data.data.errors)
                                this_app.handleErrors(response.data.data.errors)
                            }
                        })
                    })

                } else {
                    this.step++;
                }
            },
            async recaptcha(view) {
                // (optional) Wait until recaptcha has been loaded.
                await this.$recaptchaLoaded()

                // Execute reCAPTCHA with action "login".
                const token = await this.$recaptcha(view);

                this.captcha_token = token;

                return this.captcha_token;
            },
            resentOTP() {
                let this_app = this;

                this_app.recaptcha().then((res) => {
                    let params = {
                        vendor_id: this_app.vendor.id,
                        'g-recaptcha-response': this_app.captcha_token
                    }

                    this_app.axios.post(process.env.VUE_APP_API_URL + '/onboarding/resend_otp', params).then(response => {
                        this_app.loading = false

                        if (response.data.success) {
                            this_app.showDialog({
                                title: 'Success',
                                message: 'New OTP is sent to your mobile',
                                type: 'success',
                                timeout: 2000
                            })
                        } else {
                            this_app.handleErrors(response.data.data.errors)
                        }
                    })
                })
            },
            handleOnComplete(value) {
                // console.log('OTP completed: ', value);
                let this_app = this;
                this_app.pin = value;

                this_app.recaptcha().then((res) => {
                    let params = {
                        vendor_id: this_app.vendor.id,
                        pin: this_app.pin,
                        'g-recaptcha-response': this_app.captcha_token
                    }

                    this_app.axios.post(process.env.VUE_APP_API_URL + '/onboarding/verify_otp', params).then(response => {
                        if (response.data.success) {
                            this_app.step++;
                        } else {
                            if (null != response.data.data.errors){
                                this_app.handleErrors(response.data.data.errors)
                            }else{
                                this.showDialog({title: 'Error', message: "Invalid OTP", type: 'error', timeout: 3000})
                            }
                        }

                    })
                });
            },
            handleOnChange(value) {
                // console.log('OTP changed: ', value);
            },
            handleClearInput() {
                this.$refs.otpInput.clearInput();
            },
            handleErrors(errors) {
                for (let error of errors) {
                    if (null != error.msg) {
                        error.msg = this.showRealError(error.msg);
                        this.showDialog({title: error.param, message: error.msg, type: 'error', timeout: 3000})
                    } else {
                        error = this.showRealError(error);
                        this.showDialog({title: 'Error', message: error, type: 'error', timeout: 3000})
                    }
                }
            },
            showRealError(error) {
                switch (error) {
                    case "org_username_taken":
                        return "Company name is taken";
                    default:
                        return error
                }
            }
        },
        mounted() {
            this.axios.get('http://ipinfo.io/json?token=91e704e7e4e225').then(response => {
                this.results = response.data
            })
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

    .otp-input {
        width: 55px;
        height: 55px;
        padding: 5px;
        margin: 0 10px;
        font-size: 20px;
        border-radius: 4px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        text-align: center;
    }

    .max-70 {
        max-width: 70% !important;
    }

    .input-username .form-group > input {
        font-size: 14px;
        cursor: default;
    }

    .input-username .form-group > div > input {
        width: 160px;
        border-right: 1px solid #dddd;
    }

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }

</style>


