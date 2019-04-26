<template>
    <div class="need-auth-wrap">
        <h1 class="text-center"><span v-if="user">Hello {{user.name}}</span> This page need auth</h1>
        <h1 class="text-center text-white">
            <router-link class="text-white" :to="{name: 'NoNeedAuth'}">
                >>>> Come to page no need authentication <<<<
            </router-link>
        </h1>
        <ul class="list-attribute">
            <li v-for="(value,key) in user">
                {{key}}:   {{value}}
            </li>
        </ul>
        <button class="m-t-30 btn btn-danger" @click="logUserOut">Logout</button>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex'

    export default {
        name: "page-need-auth",
        methods: {
            ...mapActions({
                logout: '$_Account/LOGOUT',
            }),
            logUserOut() {
                this.logout()
                this.$router.push({name: "Login"})
            }
        },
        computed: {
            ...mapGetters({
                user: '$_Account/getUser',
            })
        },
    }
</script>

<style lang="scss" scoped>
    .need-auth-wrap {
        padding-top: 50px;
        height: calc(100vh - 50px);
        text-align: center;
        button {
            margin: auto;
        }
        .list-attribute {
            list-style-type: none;
        }
    }
</style>
