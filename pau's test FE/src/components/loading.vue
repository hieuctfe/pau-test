<template>
    <div class="load-container">
        <div class="type" v-if="type == 0">
            <div class="animated-background">
                <div class="background-masker single-line"></div>
                <div class="background-masker single-line"></div>
                <div class="background-masker single-line"></div>
                <div class="background-masker single-line"></div>
            </div>
        </div>
        <div class="type1"  v-else-if="type == 1">
            <div class="sk-fading-circle">
                <div class="sk-circle1 sk-circle"></div>
                <div class="sk-circle2 sk-circle"></div>
                <div class="sk-circle3 sk-circle"></div>
                <div class="sk-circle4 sk-circle"></div>
                <div class="sk-circle5 sk-circle"></div>
                <div class="sk-circle6 sk-circle"></div>
                <div class="sk-circle7 sk-circle"></div>
                <div class="sk-circle8 sk-circle"></div>
                <div class="sk-circle9 sk-circle"></div>
                <div class="sk-circle10 sk-circle"></div>
                <div class="sk-circle11 sk-circle"></div>
                <div class="sk-circle12 sk-circle"></div>
            </div>
        </div>
        <div class="type2" v-else-if="type == 2">
            <div class="timeline-wrapper">
                <div class="timeline-item">
                    <div class="animated-background">
                        <div class="background-masker header-top"></div>
                        <div class="background-masker header-left"></div>
                        <div class="background-masker header-right"></div>
                        <div class="background-masker header-bottom"></div>
                        <div class="background-masker subheader-left"></div>
                        <div class="background-masker subheader-right"></div>
                        <div class="background-masker subheader-bottom"></div>
                        <div class="background-masker content-top"></div>
                        <div class="background-masker content-first-end"></div>
                        <div class="background-masker content-second-line"></div>
                        <div class="background-masker content-second-end"></div>
                        <div class="background-masker content-third-line"></div>
                        <div class="background-masker content-third-end"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="type3" v-else-if="type == 3">
            <content-loader
                    :height="20"
                    :width="150"
                    :speed="1"
                    primaryColor="#f3f3f3"
                    secondaryColor="#ecebeb">
                <rect x="0" y="0" rx="5" ry="5" width="150" height="8" />
            </content-loader>
        </div>
        <md-progress-spinner v-else md-mode="indeterminate"></md-progress-spinner>
    </div>
</template>

<script>
    import  {ContentLoader} from "vue-content-loader"
    export default {
        name: 'ProgressSpinner',
        props: {
            type : {
                default : 0,
            }
        },
        components: {
            ContentLoader
        },
        mounted: function () {
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/static/variables';

    // type default
    .load-container {
        width: 100%;
        text-align: center;
        height: auto;
    }
    .md-progress-spinner {
        margin: 100px auto;
        /*margin: 24px;*/
    }
    /*type 1*/
    .type1 {
        .sk-fading-circle {
            margin: 100px auto;
            width: 100px;
            height: 100px;
            position: relative;
        }

        .sk-fading-circle .sk-circle {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
        }

        .sk-fading-circle .sk-circle:before {
            content: '';
            display: block;
            margin: 0 auto;
            width: 15%;
            height: 15%;
            background-color: $purple;
            border-radius: 100%;
            -webkit-animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
            animation: sk-circleFadeDelay 1.2s infinite ease-in-out both;
        }
        .sk-fading-circle .sk-circle2 {
            -webkit-transform: rotate(30deg);
            -ms-transform: rotate(30deg);
            transform: rotate(30deg);
        }
        .sk-fading-circle .sk-circle3 {
            -webkit-transform: rotate(60deg);
            -ms-transform: rotate(60deg);
            transform: rotate(60deg);
        }
        .sk-fading-circle .sk-circle4 {
            -webkit-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
        }
        .sk-fading-circle .sk-circle5 {
            -webkit-transform: rotate(120deg);
            -ms-transform: rotate(120deg);
            transform: rotate(120deg);
        }
        .sk-fading-circle .sk-circle6 {
            -webkit-transform: rotate(150deg);
            -ms-transform: rotate(150deg);
            transform: rotate(150deg);
        }
        .sk-fading-circle .sk-circle7 {
            -webkit-transform: rotate(180deg);
            -ms-transform: rotate(180deg);
            transform: rotate(180deg);
        }
        .sk-fading-circle .sk-circle8 {
            -webkit-transform: rotate(210deg);
            -ms-transform: rotate(210deg);
            transform: rotate(210deg);
        }
        .sk-fading-circle .sk-circle9 {
            -webkit-transform: rotate(240deg);
            -ms-transform: rotate(240deg);
            transform: rotate(240deg);
        }
        .sk-fading-circle .sk-circle10 {
            -webkit-transform: rotate(270deg);
            -ms-transform: rotate(270deg);
            transform: rotate(270deg);
        }
        .sk-fading-circle .sk-circle11 {
            -webkit-transform: rotate(300deg);
            -ms-transform: rotate(300deg);
            transform: rotate(300deg);
        }
        .sk-fading-circle .sk-circle12 {
            -webkit-transform: rotate(330deg);
            -ms-transform: rotate(330deg);
            transform: rotate(330deg);
        }
        .sk-fading-circle .sk-circle2:before {
            -webkit-animation-delay: -1.1s;
            animation-delay: -1.1s;
        }
        .sk-fading-circle .sk-circle3:before {
            -webkit-animation-delay: -1s;
            animation-delay: -1s;
        }
        .sk-fading-circle .sk-circle4:before {
            -webkit-animation-delay: -0.9s;
            animation-delay: -0.9s;
        }
        .sk-fading-circle .sk-circle5:before {
            -webkit-animation-delay: -0.8s;
            animation-delay: -0.8s;
        }
        .sk-fading-circle .sk-circle6:before {
            -webkit-animation-delay: -0.7s;
            animation-delay: -0.7s;
        }
        .sk-fading-circle .sk-circle7:before {
            -webkit-animation-delay: -0.6s;
            animation-delay: -0.6s;
        }
        .sk-fading-circle .sk-circle8:before {
            -webkit-animation-delay: -0.5s;
            animation-delay: -0.5s;
        }
        .sk-fading-circle .sk-circle9:before {
            -webkit-animation-delay: -0.4s;
            animation-delay: -0.4s;
        }
        .sk-fading-circle .sk-circle10:before {
            -webkit-animation-delay: -0.3s;
            animation-delay: -0.3s;
        }
        .sk-fading-circle .sk-circle11:before {
            -webkit-animation-delay: -0.2s;
            animation-delay: -0.2s;
        }
        .sk-fading-circle .sk-circle12:before {
            -webkit-animation-delay: -0.1s;
            animation-delay: -0.1s;
        }

        @-webkit-keyframes sk-circleFadeDelay {
            0%, 39%, 100% {
                opacity: 0;
            }
            40% {
                opacity: 1;
            }
        }

        @keyframes sk-circleFadeDelay {
            0%, 39%, 100% {
                opacity: 0;
            }
            40% {
                opacity: 1;
            }
        }
    }
    /// type 2
    .type2 ,.type{
        
        .timeline-item {
            background: #fff;
            /*border: 1px solid;*/
            /*border-color: #e5e6e9 #dfe0e4 #d0d1d5;*/
            border-radius: 3px;
            padding: 12px;

            margin: 0 auto;
            /*max-width: 472px;*/
            /*min-height: 200px;*/
            width: 100%;
            /*height: 200px;*/
        }

        @keyframes placeHolderShimmer{
            0%{
                background-position: -468px 0
            }
            100%{
                background-position: 468px 0
            }
        }

        .animated-background {
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: placeHolderShimmer;
            animation-timing-function: linear;
            background: #f6f7f8;
            background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
            background-size: 800px 104px;
            height: 96px;
            position: relative;
        }

        .background-masker {
            background: #fff;
            position: absolute;
        }

        /* Every thing below this is just positioning */

        .background-masker.header-top,
        .background-masker.header-bottom,
        .background-masker.subheader-bottom {
            top: 0;
            left: 40px;
            right: 0;
            height: 10px;
        }

        .background-masker.header-left,
        .background-masker.subheader-left,
        .background-masker.header-right,
        .background-masker.subheader-right {
            top: 10px;
            left: 40px;
            height: 8px;
            width: 10px;
        }

        .background-masker.header-bottom {
            top: 18px;
            height: 6px;
        }

        .background-masker.subheader-left,
        .background-masker.subheader-right {
            top: 24px;
            height: 6px;
        }

        .background-masker.header-right,
        .background-masker.subheader-right {
            width: auto;
            left: 300px;
            right: 0;
        }

        .background-masker.subheader-right {
            left: 230px;
        }

        .background-masker.subheader-bottom {
            top: 30px;
            height: 10px;
        }

        .background-masker.content-top,
        .background-masker.content-second-line,
        .background-masker.content-third-line,
        .background-masker.content-second-end,
        .background-masker.content-third-end,
        .background-masker.content-first-end {
            top: 40px;
            left: 0;
            right: 0;
            height: 6px;
        }

        .background-masker.content-top {
            height: 20px;
        }

        .background-masker.content-first-end,
        .background-masker.content-second-end,
        .background-masker.content-third-end {
            width: auto;
            left: 380px;
            right: 0;
            top: 60px;
            height: 8px;
        }

        .background-masker.content-second-line {
            top: 68px;
        }

        .background-masker.content-second-end {
            left: 420px;
            top: 74px;
        }

        .background-masker.content-third-line {
            top: 82px;
        }

        .background-masker.content-third-end {
            left: 300px;
            top: 88px;
        }
    }
    // type 3
    .type3 {
        svg {
            width: 100%
            /*height: 15px;*/
        }
    }
    .type{
        .animated-background{
            height: 50px;
            .background-masker{
                position: relative;
                width: 100%;
                height: 5px;
                margin-bottom: 10px;
            }
        }
    }
</style>
