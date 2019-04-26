import Vue from 'vue'
import { directive as onClickaway } from 'vue-clickaway';
Vue.directive('onClickaway' , onClickaway);

Vue.directive('tooltip' , {
    bind: function (el, binding, vnode) {
        var placement = $(el).data('placement') == undefined ? 'top' :  $(el).data('placement')
        var trigger = $(el).data('trigger') == undefined ? 'hover' :  $(el).data('trigger')
        var delay = $(el).data('delay') == undefined ? 0 :  $(el).data('delay')
        $(el).tooltip({
            placement: placement,
            trigger : trigger,
            delay : delay,
            title : binding.value
        })
    },
    update : function(el, binding, vnode){
        $(el).attr('data-original-title', binding.value)
    }
})

