<template>
    <section class="app-footer-container">
        <!--write general footer here-->
        <div class="container footer-wrap">
            <div class="copyright">
                <img src="../../assets/images/default/blue-logo.png" alt="">
                <span>©2019 Auto Post, Inc. All rights reserved.</span>
            </div>
            <div class="quick-link">
                <a href="#">Customer Services</a>
                <a href="#">Contact</a>
                <a href="#">Payment & Policy</a>
            </div>
        </div>
    </section>
</template>
<style lang="scss" scoped>
    @import 'src/assets/scss/static/variables';

    .app-footer {
        &-container {
            background: #F2F4F7;
            $footer-height: 50px;
            height: $footer-height;
            .footer-wrap {
                display: flex;
                justify-content: space-between;
            }
            span, a {
                line-height: $footer-height;
            }
            .copyright {
                img {
                    width: 30px;
                    margin-right: 10px;
                }
            }
            .quick-link {
                a {
                    font-weight: 600;
                    color: black;
                    margin-left: 50px;
                }
            }
        }
    }
</style>
