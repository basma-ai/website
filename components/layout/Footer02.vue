<template>
    <footer class="site-footer invert-color" :class="topOuterDivider && 'has-top-divider'">
        <div class="container">
            <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
                <div class="footer-top text-xxs">
                    <div class="footer-blocks">
                        <div class="footer-block">
                            <div class="footer-block-title">Platform</div>
                            <ul class="list-reset">
                                <li>
                                    <router-link to="/features/">Features</router-link>
                                </li>
                                <li>
                                    <router-link to="/pricing/">Pricing</router-link>
                                </li>
                                <li>
                                    <a target="_blank" href="https://docs.basma.ai">API</a>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Top Features</div>
                            <ul class="list-reset">
                                <li>
                                    <router-link to="/agent-phone/">Agent Phone</router-link>
                                </li>
                                <li>
                                    <router-link to="/smart-call-routing/">Smart Call Routing</router-link>
                                </li>
                                <li>
                                    <router-link to="/custom-fields/">Custom Fields</router-link>
                                </li>
                                <li>
                                    <router-link to="/request-signature/">Request Signature</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Solutions By Industry</div>
                            <ul class="list-reset">
                                <li>
                                    <router-link to="/government/">Government</router-link>
                                </li>
                                <li>
                                    <router-link to="/telehealth/">Healthcare</router-link>
                                </li>
                                <li>
                                    <router-link to="/banking/">Banking</router-link>
                                </li>
                                <li>
                                    <router-link to="/insurance/">Insurance</router-link>
                                </li>
                                <li>
                                    <router-link to="/virtual-call-center/">Call Center</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Security</div>
                            <ul class="list-reset">
                                <li>
                                    <router-link to="/privacy/">Privacy Policy</router-link>
                                </li>
                                <li>
                                    <router-link to="/terms/">Terms and Conditions</router-link>
                                </li>
                                <li>
                                    <router-link to="/cookie-policy/">Cookie Policy</router-link>
                                </li>
                                <li>
                                    <router-link to="/security/">Security</router-link>
                                </li>
                                <li>
                                    <router-link to="/gdpr-communication/">GDPR & HIPAA Compliance</router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Resources</div>
                            <ul class="list-reset mb-0">
                                <li>
                                    <router-link to="/blog/">Blog</router-link>
                                </li>
                                <li>
                                    <router-link to="/faq/">FAQ</router-link>
                                </li>
                                <li>
                                    <a target="_blank" href="https://docs.basma.ai">Documentation</a>
                                </li>
                                <li>
                                    <a target="_blank" href="https://status.basma.ai/sp/pv/OEXza2ZKaSVOXGjeai0UoNLWF5ugxke7O1j6qcnV2j4=">Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom space-between center-content-mobile text-xxs">
                    <c-logo />
                    <c-footer-social />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import CLogo from '@/components/layout/partials/Logo.vue'
import CFooterNav from '@/components/layout/partials/FooterNav.vue'
import CFooterSocial from '@/components/layout/partials/FooterSocial.vue'

export default {
  name: 'CFooter',
  components: {
    CLogo,
    CFooterNav,
    CFooterSocial
  },
  props: {
    topOuterDivider: {
      type: Boolean,
      default: false
    },      
    topDivider: {
      type: Boolean,
      default: false
    }
  }
}
</script>
