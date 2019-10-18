import Vue from 'vue'
import VueRouter from "vue-router";
import buttons from '../views/buttons/buttons.vue' 

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/buttons'
        },
        {
            path:'/buttons',
            name:'buttons',
            component:buttons
        }
    ]
})