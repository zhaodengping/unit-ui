import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import '../src/assets/js/components.js'

new Vue({
    el:'#app',
    router,
    components:{App},
    template:'<App/>'
})