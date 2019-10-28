<template>
    <div>
        <h1>单选框</h1>
        <h2>基础按钮</h2>
        <u-radio v-model="value" label='1'>选项1</u-radio>
        <u-radio v-model="value" label='2'>选项2</u-radio>
    </div>
</template>
<script>
export default {
    data(){
        return{
            value:'1',
        }
    }
}
</script>