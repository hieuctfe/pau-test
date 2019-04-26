import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import lineClamp from 'vue-line-clamp'
import Meta from 'vue-meta'
import Vuelidate from 'vuelidate'
Vue.use(VueProgressBar, {
    color: '#FFB011',
    failedColor: '#1a11e8',
    thickness: '2px',
    transition: {
        speed: '0.3s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
})
Vue.use(Meta)
Vue.use(lineClamp, {})
Vue.use(Vuelidate)
