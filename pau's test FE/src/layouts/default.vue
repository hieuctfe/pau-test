<template>
    <transition name="fade">
        <section class="app-container" v-if="!isLoading">
            <header class="app-header">
                <app-header></app-header>
            </header>
            <main class="app-body">
                <transition name="fade" mode="out-in">
                    <router-view/>
                </transition>
            </main>
            <footer class="app-footer">
                <app-footer></app-footer>
            </footer>
        </section>
    </transition>
</template>


<script>
    import AppHeader from './partials/header'
    import AppFooter from './partials/footer'

    export default {
        name: 'defaultLayout',
        components: {
            AppHeader, AppFooter
        },
        metaInfo: {
            title: 'Auto Post',
            titleTemplate: '%s - Multi channel manage and selling tool',
            meta: [
                {
                    'http-equiv': 'Content-Type',
                    'content': 'text/html; charset=utf-8'
                },
                {
                    'http-equiv': 'content-language',
                    'content': 'en'
                },
                {
                    'name': 'viewport',
                    'content': 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
                },
                {
                    'name': 'robots',
                    'content': 'follow,noindex'
                },
                {
                    'name': 'description',
                    'vmid': 'description',
                    'content': 'Multi channel manage and selling tool'
                },
                {
                    'name': 'og:type',
                    'vmid': 'og:type',
                    'property': 'og:type',
                    'content': 'website'
                },
                {
                    'name': 'og:url',
                    'vmid': 'og:url',
                    'property': 'og:url',
                    'content': 'https://autopost.com'
                },
                {
                    'name': 'og:title',
                    'vmid': 'og:title',
                    'property': 'og:title',
                    'content': 'Multi channel manage and selling tool'
                },
                {
                    'name': 'og:description',
                    'vmid': 'og:description',
                    'property': 'og:description',
                    'content': 'Multi channel manage and selling tool'
                },
                {
                    'name': 'og:image',
                    'vmid': 'og:image',
                    'property': 'og:image',
                    'content': 'https://'
                },
                {
                    'name': 'og:site_name',
                    'property': 'og:site_name',
                    'content': 'Multi channel manage and selling tool'
                },
            ]
        },
        data() {
            return {
                isLoading: true,
            }
        },
        created: async function () {
            this.isLoading = true
            var isLogin = this.$store.getters['$_Account/isLoggedIn']
            this.isLoading = false
        },
        mounted() {

        }

    }
</script>

<style lang="scss">
    @import 'src/assets/scss/static/variables';

    .app-container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        min-width: 1140px;
        .app-header {
            width: 100%;
        }
        .app-footer {
            width: 100%;
        }
        .app-body {
            flex: auto;
            width: 100%;
        }
    }
</style>
