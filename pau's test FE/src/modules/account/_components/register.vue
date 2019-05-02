<template>
    <div class="login-register-account-wrap login-page container">
        <div class="login-page__header p-t-30">
            <img src="../../../assets/images/default/Logo.png" height="57" width="386"/>
        </div>
        <div class="row login-page__body m-t-40">
            <div class="col col-6 login-promote">
                <div class="login-promote__image">
                    <img src="../../../assets/images/login/login-image-1.png" height="301" width="449"/>
                </div>
                <div class="login-promote__description">
                    <p class="login-promote__description__title m-t-30">
                        Sell and manage everywhere
                    </p>
                    <p>
                        The easiest way for brands & retailers to list and sell their products on the world’s largest
                        online marketplaces.
                    </p>
                </div>
            </div>
            <div class="col col-6">
                <div class="form-container card" v-if="!verify_step">
                    <div class="login-form-header">
                        <div class="create-account-logo">
                            <div class="logo">
                                <img src="../../../assets/images/default/avatar.png" alt="">
                            </div>
                            <div class="create-account-title">
                                <p class="big-title">Create account</p>
                                <p class="small-title">For free experience</p>
                            </div>
                        </div>
                        <div class="already-have-account">
                            <p class="font-weight-bold">Already have account?</p>
                            <router-link class="btn btn-outline-signin" :to="{name:'Login'}">
                                Sign in
                            </router-link>
                            <!--<router-link :to="{name : 'Subscription'}">Subscription</router-link>-->
                        </div>
                    </div>
                    <form @submit.stop.prevent="regis_account()">
                        <div class="login-form-body">
                            <div class="login-form-body-account-type">
                                <span>You’re using this app for</span>
                                <ul class="list-account-type">
                                    <li class="m-r-10" :class="form.type=='personal'?'checked':''">
                                        <input type="radio" v-model="form.type" value="personal" id="personal"
                                               name="type-group" checked>
                                        <label for="personal">Personal use</label>
                                    </li>
                                    <li :class="form.type=='company'?'checked':''">
                                        <input type="radio" v-model="form.type" value="company" id="company"
                                               name="type-group">
                                        <label for="company">Company</label>
                                    </li>
                                </ul>
                            </div>
                            <div v-if="form.type=='personal'" class="login-form-body-form-info">
                                <p>Give us some info</p>
                                <div class="row">
                                    <div class="form-group col col-6">
                                        <label>Your name</label>
                                        <input type="text" v-model="form.name"
                                               :class="{ 'is-invalid' : $v.form.name.$invalid && formstate}"
                                               class="form-control" placeholder="Name">
                                        <small v-if="$v.form.name.$invalid && formstate"
                                               class="form-text invalid-feedback">Your name is require
                                        </small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Phone number</label>
                                        <input type="text" v-model="form.phone_number"
                                               :class="{ 'is-invalid' : $v.form.phone_number.$invalid && formstate}"
                                               class="form-control" placeholder="Personal phone number">
                                        <small class="form-text invalid-feedback">Phone number is require</small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Email</label>
                                        <input type="email" v-model="form.email"
                                               :class="{ 'is-invalid' : $v.form.email.$invalid && formstate}"
                                               class="form-control" placeholder="Your mail address">
                                        <small class="form-text invalid-feedback">This email is invalid</small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Address (Optional)</label>
                                        <input type="text" v-model="form.address" class="form-control"
                                               placeholder="Your address">
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Password</label>
                                        <input type="password" v-model="form.password"
                                               :class="{ 'is-invalid' : $v.form.password.$invalid && formstate}"
                                               class="form-control" placeholder="Your password">
                                        <small class="form-text invalid-feedback">Password length is more than 6</small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Re-enter Password</label>
                                        <input type="password" v-model="form.repassword"
                                               :class="{ 'is-invalid' : $v.form.repassword.$invalid && formstate}"
                                               class="form-control" placeholder="re-enter password again">
                                        <small v-if="$v.form.repassword.require" class="form-text invalid-feedback">
                                            Re-enter password length must more than 6
                                        </small>
                                        <small v-if="$v.form.repassword.sameAs && !$v.form.repassword.require"
                                               class="form-text invalid-feedback">Re-enter password length must same
                                            with password
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div v-else class="login-form-body-form-info">
                                <p>Give us some info</p>
                                <div class="row">
                                    <div class="form-group col col-6">
                                        <label>Company name</label>
                                        <input type="text" v-model="form.name"
                                               :class="{ 'is-invalid' : $v.form.name.$invalid && formstate}"
                                               class="form-control" placeholder="Company name">
                                        <small v-if="$v.form.name.$invalid && formstate"
                                               class="form-text invalid-feedback">Your company name is require
                                        </small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Phone number</label>
                                        <VueTelInput v-model="form.phone_number"
                                                     @onInput="onInput"
                                                     :type="'number'"
                                                     :placeholder="'Company number'"
                                                     :disabledFormatting="true"
                                                     :inputOptions="{showDialCode: true}"
                                                     :class="{ 'is-invalid' : $v.form.phone_number.$invalid && formstate}"
                                                     class="form-control"
                                                     :preferredCountries="['us', 'gb', 'ua']"></VueTelInput>
                                        <!--<input v-model="form.phone_number"-->
                                        <!--:class="{ 'is-invalid' : $v.form.phone_number.$invalid && formstate}"-->
                                        <!--type="text" class="form-control" placeholder="Personal phone number">-->
                                        <small v-if="!$v.form.phone_number.required" class="form-text invalid-feedback">
                                            Phone number is require
                                        </small>
                                        <small v-if="!$v.form.phone_number.isValid && $v.form.phone_number.required"
                                               class="form-text invalid-feedback">Phone number is not valid
                                        </small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Email</label>
                                        <input v-model="form.email"
                                               :class="{ 'is-invalid' : $v.form.email.$invalid && formstate}"
                                               type="email" class="form-control" placeholder="Your mail address">
                                        <small class="form-text invalid-feedback">This email is invalid</small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Company website (option)</label>
                                        <input v-model="form.address" type="text" class="form-control"
                                               placeholder="Website link">
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Password</label>
                                        <input v-model="form.password"
                                               :class="{ 'is-invalid' : $v.form.password.$invalid && formstate}"
                                               type="password" class="form-control" placeholder="Your password">
                                        <small class="form-text invalid-feedback">Password length is more than 6</small>
                                    </div>
                                    <div class="form-group col col-6">
                                        <label>Re-enter Password</label>
                                        <input v-model="form.repassword"
                                               :class="{ 'is-invalid' : $v.form.repassword.$invalid && formstate}"
                                               type="password" class="form-control"
                                               placeholder="re-enter password again">
                                        <small v-if="$v.form.repassword.require" class="form-text invalid-feedback">
                                            Re-enter password length must more than 6
                                        </small>
                                        <small v-if="$v.form.repassword.sameAs && !$v.form.repassword.require"
                                               class="form-text invalid-feedback">Re-enter password length must same
                                            with password
                                        </small>
                                    </div>
                                    <div class="difficults-report col col-12">
                                        <p>Difficults that your company are facing</p>
                                        <ul class="list-difficult">
                                            <li v-for="question in question_list">
                                                <input type="radio" v-model="form.question" :value="question.id"
                                                       :id="question.id"
                                                       name="difficult-group"/>
                                                <label :for="question.id">{{question.content}}</label>
                                            </li>
                                        </ul>
                                        <div class="form-group">
                                            <input v-model="form.content_option"
                                                   type="text" class="form-control"
                                                   placeholder="Else? Show us others problem that you are facing.">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul v-if="server_message" class="text-danger">
                                <li v-for="(value,key) in server_message">
                                    {{server_message[key][0]}}
                                </li>
                            </ul>
                            <div class="login-form-body-action m-t-15">
                                <span><span>By signing up, you agree to our <a href="#">Terms of Use</a>.</span></span>
                                <!--<button class="btn">Create account</button>-->
                                <button
                                        :class="{'btn-importing': isRegisting}" class="btn">
                                    <div class="circle-loader">
                                        <div class="checkmark draw"></div>
                                    </div>
                                    Create account
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="card" v-else>
                    <otp_verify :email="form.email"
                                @back_to_regis="verify_step = false"
                                @verified="verify_success()"></otp_verify>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {required, minLength, maxLength, email, sameAs} from 'vuelidate/lib/validators'
    import VueTelInput from 'vue-tel-input';
    import otp_verify from './otp_verify'
    import {mapActions} from 'vuex'

    export default {
        name: "login",
        data() {
            return {
                phone: '',
                form: {
                    email: '',
                    type: 'personal',
                    name: '',
                    password: '',
                    repassword: '',
                    phone_number: '',
                    address: '',
                    question: '',
                    content_option: '',
                },
                isRegisting: false,
                is_phone_number_valid: true,
                server_message: {},
                question_list: [],
                formstate: false,
                verify_step: false,
                otp: ''
            }
        },
        components: {
            VueTelInput, otp_verify
        },
        created: function () {
            this.getRegisterQuestion().then(res => {
                let {status, data} = res.data
                if (status) {
                    this.question_list = data
                }
            })
        },
        methods: {
            ...mapActions({
                getRegisterQuestion: "$_Account/GET_USER_QUESTION_REGISTER",
                registerAccount: "$_Account/REGISTER",
                generateOTP: "$_Account/GENERATE_OTP"
            }),
            regis_account() {
                this.formstate = true
                if (!this.$v.form.$invalid) {
                    this.isRegisting = true
                    this.registerAccount(this.form).then(res => {
                        let {status, message, errors} = res.data
                        if (status) {
                            // this.$router.push({name: "Login"})
                            this.generateOTP(this.form.email).then(generate_res => {
                                let {status, message} = generate_res.data
                                if (status) {
                                    this.verify_step = true
                                } else {
                                    $notify({
                                        type: "danger",
                                        content: "Have some trouble"
                                    })
                                }
                            })
                        } else {
                            this.server_message = errors
                            for (let key in errors) {
                                $notify({
                                    type: "danger",
                                    content: errors[key][0]
                                })
                            }
                        }
                        this.isRegisting = false
                    }, (err) => {
                        console.log(err);
                    })
                }
            },
            onInput({number, isValid, country}) {
                this.is_phone_number_valid = isValid
            },
            verify_success() {
                console.log('ahihi');
                this.$router.push({name: "Login"})
            },
            isNumber: function (evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                } else {
                    return true;
                }
            },
        },
        watch: {
            "form.type": function (value) {
                this.formstate = false
                this.server_message = {}
                this.form = {
                    type: this.form.type,
                    email: '',
                    name: '',
                    password: '',
                    repassword: '',
                    phone_number: '',
                    address: '',
                    question: '',
                    content_option: '',
                }
            },
        },
        validations() {
            return {
                form: {
                    email: {
                        required, email,
                        // exist: function (value) {
                        //     return this.emails.indexOf(value) == -1
                        // }
                    },
                    password: {
                        required,
                        minLength: minLength(6),
                    },
                    repassword: {
                        required,
                        sameAs: sameAs('password')
                    },
                    phone_number: {
                        required,
                        isValid: function () {
                            return this.is_phone_number_valid
                        }
                    },
                    name: {
                        required,
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $high-light-color: #FF7800;
    .middle-content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .login-page {
        margin: auto;
        padding-bottom: 30px;
        /*height: 100vh;*/
        &__header {

        }
        &__body {
            .login-promote {
                &__description {
                    font-size: 18px;
                    &__title {
                        font-size: 38px;
                    }
                }
            }
            .form-container {
                padding: 20px;
                .login-form-header {
                    display: flex;
                    justify-content: space-between;
                    .create-account-logo {
                        display: flex;
                        height: fit-content;
                        .logo {
                            @extend .middle-content;
                            img {
                                width: 40px;
                                height: 40px;
                                border-radius: 50%;
                            }
                        }
                        .create-account-title {
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            margin-left: 10px;
                            p {
                                margin-bottom: 0px;
                            }
                            .big-title {
                                font-size: 22px;
                            }
                            .small-title {
                                font-size: 16px;
                            }
                        }
                    }
                    .already-have-account {
                        text-align: right;
                        p {
                            margin-bottom: 6px;
                            font-size: 16px;
                        }
                        .btn-outline-signin {
                            border: 0.5px solid #299DFF;
                            width: 115px;
                        }
                    }

                }
                .login-form-body {
                    &-account-type {
                        .list-account-type {
                            list-style-type: none;
                            margin-top: 13px;
                            padding: 0px;
                            display: flex;
                            li {
                                background: #F1F5F7;
                                border-radius: 20px;
                                padding: 8px 25px 8px 8px;
                                border: solid 1px #F1F5F7;
                                transition: all .4s;
                                &.checked {
                                    border: solid 1px #FF7800;
                                    background: white;
                                    font-weight: 600;
                                }
                            }
                        }
                    }
                    &-form-info {
                        & > p {
                            font-size: 18px;
                            margin-bottom: 18px;
                        }
                        .form-group {
                            & > label {
                                font-weight: 600;
                            }
                        }
                        .difficults-report {
                            & > p {
                                font-size: 18px;
                                margin-bottom: 18px;
                            }
                            .list-difficult {
                                list-style-type: none;
                                padding: 0px;
                                li {
                                    margin-bottom: 19px;
                                }
                            }
                        }
                    }
                }
                .login-form-body-action {
                    display: flex;
                    & > span {
                        flex: 1;
                        @extend .middle-content;
                    }
                    button {
                        width: 150px;
                        height: 45px;
                        color: white;
                        background: $high-light-color;
                        display: flex;
                        transition: all .4s;
                        justify-content: center;
                        &.btn-importing {
                            width: auto;
                            line-height: 20px;
                            .circle-loader {
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
