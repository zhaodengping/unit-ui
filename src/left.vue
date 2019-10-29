<template>
    <div class="left">
        <h2>组件</h2>
        <div @click='linkTo("layout")'>Layout布局(grid)</div>
        <div @click='linkTo("row")'>Layout布局(row)</div>
        <div @click='linkTo("button")'>button按钮</div>
        <h2>Form</h2>
        <div @click='linkTo("radio")'>radio单选框</div>
        <div @click='linkTo("calendar")'>日期选择器</div>
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
                };
                case 'layout':{
                    this.$router.push('/layout');
                    break;
                };
                case 'row':{
                    this.$router.push('/row')
                };
                case 'radio':{
                    this.$router.push('/radio')
                };
                case 'calendar':{
                    this.$router.push('/calendar')
                };
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
            margin-bottom: 10px;
            cursor: pointer;
            &:hover{
                color: var(--theme-color)
            }
        }
    }
</style>