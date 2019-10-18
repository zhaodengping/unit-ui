import VueRouter from "vue-router";
import buttons from '@/views/buttons/buttons.vue' 

export const routes=new VueRouter({
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