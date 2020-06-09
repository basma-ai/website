<template>
    <section
        class="features-tiles section center-content"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-tiles-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="tiles-wrap"
                    :class="[
                        pushLeft && 'push-left',
                    ]">
                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item">
                                    <feather class="text-color-primary" type="activity"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    Smart Call Routing
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Redirect your calls to the right agents based on services and groups.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-secondary" type="phone-outgoing"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Call Requests
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Schedule video calls with your customers or call them right away.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-primary" type="upload"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Exchanging Files
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Send and receive documents between you and your customers.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-secondary" type="square"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    Custom Fields
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Create different fields and collect information about your customers prior to the call.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-primary" type="pen-tool"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="200">
                                    Request Signature
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Obtain your customer's signature on the documents that matter.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-secondary" type="aperture"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Snapshots
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Capture a snapshot for customer identity verification and for other purposes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-primary" type="phone-call"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Agent Phone
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Receive customers calls with a nice ringtone of your choice.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-secondary" type="users"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Groups & Branches
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Virtualize your business by segregating agents based on groups or branches.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-primary" type="message-circle"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Chat box
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Use the chat box to send and receive important text messages.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-secondary" type="eye"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Realtime Dashboard
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    A 360° degree view of your call center in one place.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-primary" type="feather"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Modern UI/UX
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Easy to use interface with state-of-the-art user experience.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="tiles-item">
                        <div class="tiles-item-inner">
                            <div class="features-tiles-item-header">
                                <div class="features-tiles-item-image mb-16 p-24 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="100">
                                    <feather class="text-color-secondary" type="video"></feather>
                                </div>
                            </div>
                            <div class="features-tiles-item-content">
                                <h4 class="h5 mt-0 mb-8 reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="300">
                                    Recording
                                </h4>
                                <p class="m-0 text-sm reveal-from-top" data-reveal-container=".tiles-item" data-reveal-delay="400">
                                    Record your calls and watch them later for quality improvement.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionTilesProps } from '@/plugins/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesTiles',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: 'Features',
        paragraph: 'We\'ve got you covered with going virtual! Get to know all our features in one place and in depth.'
      }
    }
  }
}
</script>
