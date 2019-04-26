import Vue from 'vue'
import _ from 'lodash'
import moment from 'moment'
import app from '@/main'
import helper from '@/plugins/helper'
Vue.filter('number_format' , (value)=>{
    if( helper.isNumeric(value)){
        var number = parseInt(value)
        return number.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }else{
        var number = parseFloat(value)
        return number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    }
})
Vue.filter('currency' , (value)=>{
    return value.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + ' $' 
})

Vue.filter('date_format' , (value)=>{
    if( moment.locale() != app.$i18n.locale){
        moment.locale(app.$i18n.locale);
    }
    return moment(value).format('LL');

})
Vue.filter('format_datepicker' , (value)=>{
    if( moment.locale() != app.$i18n.locale){
        moment.locale(app.$i18n.locale);
    }
    return moment(value).format('L');

})
Vue.filter('date_notify' , (value)=>{
    if( moment.locale() != app.$i18n.locale){
        moment.locale(app.$i18n.locale);
    }
    return moment(value).format('LLL');

})
Array.prototype.move = function(from,to){
    this.splice(to,0,this.splice(from,1)[0]);
    return this;
};