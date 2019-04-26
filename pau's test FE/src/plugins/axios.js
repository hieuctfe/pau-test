import Vue from 'vue';
import axios from "axios";
import app from '@/main'
import i18n from '@/lang';

const currentLang = i18n.locale
const token = localStorage.getItem('token')
axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.common['Content-Language'] = currentLang
if( token ){
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}

let config = {
	baseURL: process.env.VUE_APP_ROOT_API || "",
	timeout: 60 * 1000,
	validateStatus: function (status) {
		return status >= 200 && status <= 500;
	},
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
	function (config) {
		app.$Progress.start();
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

_axios.interceptors.response.use(
	function (response) {
		app.$Progress.finish();
		let res = response.data;
		if( response.status === 500 ){
			$notify({
				content : response.data.message ? response.data.message : '500',
				type : 'danger'
			})
		}
		// if( res.status == false){
		// 	if(res.data.hasOwnProperty('code') && res.data['code'] === 201 ){
				// app.$store.dispatch('$_Auth/SHOW_AUTH_ERROR' , res.data);
			// }
		// }
		return response;
	},
	function (error) {
		// Do something with response error
		app.$Progress.finish();
		return Promise.reject(error);
	}
);

Plugin.install = function (Vue, options) {
	Vue.axios = _axios;
	window.axios = _axios;
	Object.defineProperties(Vue.prototype, {
		axios: {
			get() {
				return _axios;
			}
		},
		$axios: {
			get() {
				return _axios;
			}
		},
	});
};

Vue.use(Plugin)

export default Plugin;
