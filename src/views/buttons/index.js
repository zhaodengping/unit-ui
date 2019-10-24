import uButton from './components/buttons.vue';

uButton.install=function(Vue){
    Vue.components(uButton.name,uButton)
}
export default uButton