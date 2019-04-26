<template>
    <section class="app-login">
        <div class="app-login-page">
            <!--// general layout here-->
            <transition name="fade" mode="out-in">
                <router-view/>
            </transition>
            <!--// general layout here-->
        </div>
    </section>
</template>
<script>
    export default {
        name: 'SellerLayout',
        components: {},
        data() {
            return {
                isLoading: true,
                title: ""
            }
        },
        computed: {},
        methods: {},

        created: async function () {
            this.isLoading = false
        }
    }
</script>

<style lang="scss">
    .app-login-page {
        background-size: 2563px auto;
        background: url("../../../assets/images/login/login-background.png") 50% 0;
    }
</style>
