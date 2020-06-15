<template>
    <footer class="site-footer invert-color" :class="topOuterDivider && 'has-top-divider'">
        <div class="container">
            <div class="site-footer-inner" :class="topDivider && 'has-top-divider'">
                <div class="footer-top text-xxs">
                    <div class="footer-blocks">
                        <div class="footer-block">
                            <c-logo class="mb-16" />
                            <div class="footer-copyright">&copy; 2020 Basma AI, Inc.</div>
                        </div>
                        <div class="footer-block">
                            <div class="footer-block-title">Top Features</div>
                            <ul class="list-reset">
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
                                    <router-link to="/telehealth/">Healthcare</router-link>
                                </li>
                                <li>
                                    <router-link to="/banking/">Banking</router-link>
                                </li>
                                <li>
                                    <router-link to="/insurance/">Insurance</router-link>
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
                                    <router-link to="/security/">Security</router-link>
                                </li>
                                <li>
                                    <router-link to="/faq/">FAQ</router-link>
                                </li>
                                <li>
                                    <a target="_blank" href="http://status.basma.ai">Status</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom space-between center-content-mobile text-xxs">
                    <c-footer-nav />
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
