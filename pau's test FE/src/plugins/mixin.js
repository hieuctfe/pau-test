import Vue from 'vue'
Vue.mixin({
    created () {

    },
    data(){
        return {
            prevRouterHeight: 0,
        }
    },
    methods: {
        beforeLeave(element) {
            this.prevRouterHeight = getComputedStyle(element).height;
        },
        enter(element) {
            const { height } = getComputedStyle(element);

            element.style.height = this.prevRouterHeight;

            setTimeout(() => {
                element.style.height = height;
            });
        },
        afterEnter(element) {
            element.style.height = 'auto';
        },
        fadeBeforeEnter(el){
            el.style.display = 'none';
        },
        fadeEnter(el, done){
            $(el).fadeIn(300 ,function(){
                done();
            });
        },
        fadeLeave(el, done){
            $(el).fadeOut(300 ,function(){
                done();
            });
        },
        slideDownEnter(el, done){
            $(el).slideDown(300 ,function(){
                done();
            });
        },
        slideUpLeave(el, done){
            $(el).slideUp(300 ,function(){
                done();
            });
        },
        slideRightEnter(el, done){
            $(el).effect( "slide", 500 ,  'right' , function(){
                done();
            });
        },
        slideLeftLeave(el, done){
            $(el).effect( "slide", 500 ,  'left' , function(){
                done();
            });
        },
        redirect(option){
            this.$router.push(option)
        },
        getSlugId(text){
            var id = ''
            if( text ){
                var arr  = text.split('-')
                id = arr[arr.length - 1]
            }
            return id
        },
        setRouterLinkDefault( { name  , params , query } ){
            let current = {
                name : this.$route.name,
                params : this.$route.params,
                query : this.$route.query
            }
            if( name ){
                current.name = name
            }
            if( params ){
                current.params = params
            }
            if( query ){
                current.query = query
            }
            return current
        },
        pushRouterLinkDefault( { name  , params , query } ){
            let current = {
                name : this.$route.name,
                params : this.$route.params,
                query : this.$route.query
            }
            if( name ){
                current.name = name
            }
            if( params ){
                current.params = params
            }
            if( query ){
                current.query = query
            }
            this.$router.push(current)
        },
        getImage(size = 'medium' , src){
            if( size == 'medium'){
                return src
            }else{
                var arr = String(src).split('/')
                var index = arr.length - 1
                var image = arr[index]
                if( size == 'small'){
                    arr[index] = `500x500_${image}`
                    src = arr.join('/')
                }
                return src
            }
        },
        getLocalStore(name){
            var item = window.localStorage.getItem(name)
            if( item ){
                return JSON.parse(item)
            }
            return item
        },
        setLocalStore( name , value){
            if( name && value ){
                window.localStorage.setItem("lr", JSON.stringify(value))
            }
        },
    },
    mounted(){

    },

})
