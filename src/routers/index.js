import Vue from 'vue'
import VueRouter from "vue-router";
import uButton from '../uses/uButton.vue' 
import uLayout from '../uses/uLayout.vue'
import uRow from '../uses/uRow.vue'
import uRadio from '../uses/uRadio.vue'
import uCalendar from '../uses/uCalendar.vue'
Vue.use(VueRouter)

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/button'
        },
        {
            path:'/button',
            name:'button',
            component:uButton
        },
        {
            path:'/layout',
            name:'layout',
            component:uLayout
        },
        {
            path:'/row',
            name:'row',
            component:uRow
        },
        {
            path:'/radio',
            name:'radio',
            component:uRadio
        },
        {
            path:'/calendar',
            name:'calendar',
            component:uCalendar
        }
    ]
})