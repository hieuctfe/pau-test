<template>
    <div class="login-pgae">
        <div class="login-page__header p-t-30 p-l-30">
            <img src="../../../assets/images/default/Logo.png" height="57" width="386"/>
        </div>
        <div class="card login-form-container">
            <h2>Login</h2>
            <form @submit.stop.prevent="login()">
                <div class="form-group">
                    <input v-model="form.email"
                           :class="{ 'is-invalid' : $v.form.email.$invalid && formstate}"
                           type="text" class="form-control" placeholder="Your mail address">
                    <small class="form-text invalid-feedback">This email is invalid</small>
                    <!--</small>-->
                </div>
                <div class="form-group">
                    <input v-model="form.password"
                           :class="{ 'is-invalid' : $v.form.password.$invalid && formstate}"
                           type="password" class="form-control" placeholder="Your password">
                    <small class="form-text invalid-feedback">Password length is more than 6</small>
                </div>
                <div v-if="user_pass_error" class="text-center m-t-10 text-danger">
                    Email or Password is incorrect
                </div>
                <div class="text-center m-t-10">
                    <button class="btn login-btn">Login</button>
                </div>
                <div class="text-center register-link text-warning m-t-20">
                    <router-link :to="{name : 'Register'}">
                        Haven't account yet ?
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import {required, minLength, maxLength, email, sameAs} from 'vuelidate/lib/validators'
    import {mapActions} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                },
                user_pass_error: false,
                formstate: false,
            }
        },
        methods: {
            ...mapActions({
                account_login: "$_Account/LOGIN"
            }),
            login() {
                this.formstate = true
                if (!this.$v.form.$invalid) {
                    this.account_login(this.form).then(res => {
                        if (res.data.status) {
                            this.$router.push({name: "NeedAuth"})
                        } else if (res.data.errors || !res.data.status) {
                            this.user_pass_error = true
                        } else {
                            $notify({
                                type: "danger",
                                content: "Some thing wrong"
                            })
                        }
                    })
                }
            }
        },
        validations() {
            return {
                form: {
                    email: {
                        required, email,
                    },
                    password: {
                        required,
                        minLength: minLength(6),
                    }
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-pgae {
        height: calc(100vh - 50px);
        position: relative;
        .login-form-container {
            position: absolute;
            min-width: 500px;
            padding: 30px 30px 20px;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            .login-btn {
                width: 150px;
                height: 45px;
                color: white;
                background: #FF7800;
                margin: auto;
            }
            .register-link {
                a {
                    color: #FF7800 !important;
                }
            }
        }
    }
</style>
