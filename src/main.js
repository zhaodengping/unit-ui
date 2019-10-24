import Vue from 'vue'
import App from './App.vue'
import router from './routers/index.js'
import bus from './assets/js/bus.js'

Vue.prototype.$bus=bus
new Vue({
    el:'#app',
    router,
    components:{App},
    template:'<App/>'
})