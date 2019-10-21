<template>
    <div class="left">
        <h2>组件</h2>
        <div @click='linkTo("button")'>button按钮</div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        linkTo(data){
            switch (data) {
                case 'button':{
                    this.$router.push('/button')
                    break;
                }
                default:
                    break;
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .left{
        div{
            cursor: pointer;
            &:hover{
                color: var(--theme-color)
            }
        }
    }
</style>