import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './en/index.js'
Vue.use(VueI18n)
const defaultLang = 'en';
let messages = {
	en : en
}
let currentLang = localStorage.getItem('lang');

if ( !messages.hasOwnProperty(currentLang)) {
	currentLang = defaultLang;
	localStorage.setItem('lang', defaultLang);
}

export default new VueI18n({
	locale: currentLang,
	fallbackLocale: defaultLang,
	messages: messages,
})