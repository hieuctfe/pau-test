<template>
    <div class="otp-container">
        <div class="otp-header">
            <span class="otp-back" @click="back_to_regis">
                <i class="fas fa-chevron-left m-r-10"></i>
                <span>Back</span>
            </span>
            <p class="otp-title">Verify OTP</p>
        </div>
        <form @submit.stop.prevent="verify_otp">
            <div class="otp-body">

                <img src="../../../assets/images/login/otp.png" alt="" class="m-b-25">
                <p class="m-b-20">Verify OTP Code to continue</p>
                <div class="form-group">
                    <input type="text" v-model="client_otp"
                           :class="{ 'is-invalid' : !is_otp_valid}"
                           class="form-control text-center otp-input m-b-20" name="type-group">
                    <small class="form-text invalid-feedback">OTP length must be 4</small>
                </div>
                <small class="text-danger" v-if="otp_incorrect">Your OTP is incorrect</small>
                <button class="btn otp-submit-button" type="submit">Continue</button>
            </div>
        </form>
        <div class="otp-footer text-center">
            <p class="m-b-10">Resend OTP code</p>
            <button class="btn btn-resend" @click="resend_otp">Resend</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "otp_verify",
        props: ['email'],
        methods: {
            ...mapActions({
                verifyAccount: "$_Account/VERIFY_ACCOUNT",
                generateOTP: "$_Account/GENERATE_OTP"
            }),
            back_to_regis() {
                this.$emit('back_to_regis')
            },
            verify_otp() {
                this.is_otp_valid = this.client_otp.length == 4
                if (this.is_otp_valid) {
                    this.verifyAccount({email: this.email, otp: this.client_otp}).then(res => {
                        let {status, message} = res.data
                        console.log(res);
                        if (status) {
                            this.$emit('verified');
                        } else {
                            $notify({
                                type: "danger",
                                message: message
                            })
                            this.otp_incorrect = true
                        }
                    })
                }
            },
            resend_otp() {
                this.generateOTP(this.email).then(res => {
                    let {status, message} = res.data
                    if (status) {
                        $notify({
                            type: "success",
                            content: "Your OTP have been reset"
                        })
                    } else {
                        $notify({
                            type: "danger",
                            content: "Try later"
                        })
                    }
                })
            }
        },
        data() {
            return {
                client_otp: '',
                is_otp_valid: true,
                otp_incorrect: false,
            }
        },
    }
</script>

<style lang="scss" scoped>
    .otp-container {
        .otp-header {
            padding: 28px 0;
            position: relative;
            border-bottom: solid 1px #D1DFE6;
            .otp-title {
                font-size: 18px;
                text-align: center;
                margin: 0;
            }
            .otp-back {
                position: absolute;
                margin-left: 25px;
                font-size: 16px;
                &:hover {
                    cursor: pointer;
                }
            }
        }
        .otp-body {
            padding: 33px;
            text-align: center;
            font-size: 18px;
            .otp-input {
                width: 345px;
                height: 40px;
                margin: auto;
            }
            .otp-submit-button {
                width: 150px;
                height: 45px;
                color: white;
                background: #FF7800;
                display: block;
                margin: auto;
            }
        }
        .otp-footer {
            padding: 22px;
            border-top: solid 1px #D1DFE6;
            p {
                font-weight: 600;
            }
            .btn-resend {
                background: #E8E8F5;
                padding-left: 25px;
                padding-right: 25px;
            }
        }
    }
</style>
