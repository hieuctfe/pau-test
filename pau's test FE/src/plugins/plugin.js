import 'bootstrap'
import Vue from 'vue'
import '@/assets/fonts/proxima_nova.css';
import '@/assets/vendor/fontawesome-pro/css/all.css';
import '@/assets/style.scss';
import '@/assets/vendor/toast/toast.js';

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

global.EventBus  =  new Vue()
global.$notify = function({
    icon = null ,
    content = '' ,
    type = 'purple' ,
    placement = { from : 'top' , align : 'right' },
    timer  = 10 ,
    showProgressbar = false,
    offset =  20,
    spacing =  10,
    z_index =  1031,
    timeout =  5000,
    onShow =  null,
    onShown =  null,
    onClose =  null,
    onClosed =  null,
    animate =  {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutUp'
    },
    allow_dismiss = true,
	allow_duplicates = true,
}){
    global.$.notify(
    {
        icon   : icon,
        message: content,
    },
    {
        type            : type,
        timer           : timer,
        placement       : placement,
        showProgressbar : showProgressbar,
        offset          : offset,
        spacing         : spacing,
        z_index         : z_index,
        delay           : timeout,
        onShow          : onShow,
        onShown         : onShown,
        onClose         : onClose,
        onClosed        : onClosed,
        animate         : animate,
        allow_dismiss   : allow_dismiss,
        allow_duplicates: allow_duplicates,
        template : '<div data-notify="container" class="col-12 col-sm-6 col-md-3 col-lg-2 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="material-icons">close</i></button><i data-notify="icon" class="material-icons"></i><span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    })
}
