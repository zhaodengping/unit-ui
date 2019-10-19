import Vue from 'vue'
import VueRouter from "vue-router";
import uButton from '../views/buttons/ubutton.vue' 

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/button'
        },
        {
            path:'/button',
            name:'button',
            component:uButton
        }
    ]
})