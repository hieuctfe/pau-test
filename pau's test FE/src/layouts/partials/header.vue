<template>
    <section class="app-header-container">
        <!--<div class="app-header-container-main">-->
            <!--<div class="container">-->
                <!--<div class="row">-->
                    <!--<div class="col col-3"></div>-->
                    <!--<div class="col col-6"></div>-->
                    <!--<div class="col col-3">-->
                        <!--<div class="app-header-seller">-->
                            <!--<ul>-->
                                <!--<li >-->
                                    <!--<div class="user-profile" v-if="isLogged" key="is-logged">-->
                                        <!--<div class="dropdown" v-if="seller">-->
                                            <!--<button class="user-info" type="button" data-toggle="dropdown">-->
                                                <!--<span class="user-media">-->
                                                    <!--<img src="@/assets/images/default/avatar.png" alt="">-->
                                                <!--</span>-->
                                                <!--<span class="user-name">-->
                                                    <!--{{seller.email}}-->
                                                <!--</span>-->
                                            <!--</button>-->
                                            <!--<div class="dropdown-menu dropdown-menu-right user-dropdown" >-->
                                                <!--<ul>-->
                                                    <!--<li>-->
                                                        <!--<router-link :to="{name : 'Seller'}">-->
                                                            <!--Account Info-->
                                                        <!--</router-link>-->
                                                    <!--</li>-->
                                                    <!--<li>-->
                                                        <!--<a @click="logout()">Logout</a>-->
                                                    <!--</li>-->
                                                <!--</ul>-->
                                            <!--</div>-->
                                        <!--</div>-->
                                    <!--</div>-->
                                    <!--<router-link :to="{name : 'Login' }"  v-else key="not-login">-->
                                        <!--Login/Register-->
                                    <!--</router-link>-->
                                <!--</li>-->
                            <!--</ul>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->
        <!--</div>-->
    </section>
</template>
<script>
import { mapGetters , mapActions } from 'vuex';
export default {
    name : 'Header',
    components:{
    },
    computed :{
        ...mapGetters({
            isLogged : '$_Account/isLoggedIn',
            user : '$_Account/getUser',
            router : 'getRouter'
        })
    },
    methods:{
        ...mapActions({
            getUserInfo : '$_Account/GET_USER_INFO'
        }),
        logout(){
            this.$store.dispatch('$_Account/LOGOUT')
            $notify({
                content : 'Logout successfully',
                type : 'success'
            })
            if( this.router.matched.some(record => record.meta.requiresAuth) ){
                this.redirect({name : 'Login'})
            }
        }
    },
    watch :{
        'isLogged' : function(value){
            if( value == true){
                this.getUserInfo()
            }
        }
    },
    mounted(){
        if( this.isLogged  && this.user == null ){
            this.getUserInfo()
        }
    }
}
</script>

<style lang="scss" scoped>
    @import 'src/assets/style';
    .app-header{
        &-container{

        }
    }
</style>
