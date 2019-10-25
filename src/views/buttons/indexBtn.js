import uButton from './components/buttons.vue';

uButton.install=function(Vue){
    Vue.component(uButton.name,uButton)
}
export default uButton