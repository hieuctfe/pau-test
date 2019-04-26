<template>
    <div class="no-need-auth-wrap">
        <h1 class="text-center">This page no need authentication</h1>
        <h1 class="text-center text-white">
            <router-link class="text-white" :to="{name: 'NeedAuth'}">
                >>>> Come to page need authentication <<<<
            </router-link>
        </h1>
    </div>
</template>

<script>
    export default {
        name: "page-no-need-auth"
    }
</script>

<style scoped lang="scss">
    .no-need-auth-wrap {
        padding-top: 50px;
        height: calc(100vh - 50px);
    }
</style>
