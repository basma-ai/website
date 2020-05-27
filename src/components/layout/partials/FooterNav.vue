<template>
    <nav class="footer-nav">
        <ul class="list-reset">
            <li>
                <router-link to="/security/">Security</router-link>
            </li>
            <li>
                <a target="_blank" href="http://status.basma.ai">Status</a>
            </li>
            <li>
                <router-link to="/blog/">Blog</router-link>
            </li>
            <li>
                <a href="mailto:hello@basma.ai">Contact</a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
  name: 'CFooterNav'
}
</script>
