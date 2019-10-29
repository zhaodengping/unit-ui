<template>
    <div>
        <h1>单选框</h1>
        <h2>基础单选框</h2>
        <u-radio v-model="value" label='1'>选项1</u-radio>
        <u-radio v-model="value" label='2'>选项2</u-radio>
        <div class="choose">选择的value值为{{value}}</div>
        <h2>禁用单选框</h2>
        <u-radio v-model='value' disabled>禁用1</u-radio>
        <u-radio v-model='value' label='1' disabled>禁用2</u-radio>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:'1',
        }
    },
}
</script>
<style lang="scss" scoped>
    .choose{
        margin: 10px 0;
    }
</style>