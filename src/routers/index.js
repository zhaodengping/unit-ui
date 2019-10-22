import Vue from 'vue'
import VueRouter from "vue-router";
import uButton from '../uses/uButton.vue' 
import uLayout from '../uses/uLayout.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/button'
        },
        {
            path:'/layout',
            name:'layout',
            component:uLayout
        },
        {
            path:'/button',
            name:'button',
            component:uButton
        }
    ]
})