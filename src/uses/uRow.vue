<template>
    <div>
        <h1>row-col版布局</h1>
        <h2>基础布局</h2>
        <u-row>
            <u-col :span='24'>
                <div class="number1">1</div>
            </u-col>
        </u-row>
        <u-row>
            <u-col :span='8'>
                <div class="number2">1</div>
            </u-col>
            <u-col :span='8'>
                <div class="number3">1</div>
            </u-col>
            <u-col :span='8'>
                <div class="number4">1</div>
            </u-col>
        </u-row>
        <h2>分栏间隔</h2>
        <u-row :gutter='20'>
            <u-col :span='8'>
                <div class="number5">1</div>
            </u-col>
            <u-col :span='8'>
                <div class="number6">1</div>
            </u-col>
            <u-col :span='8'>
                <div class="number7">1</div>
            </u-col>
        </u-row>
        <h2>混合布局</h2>
        <u-row :gutter="20">
            <u-col :span='2'>
                <div class="number5">1</div>
            </u-col>
            <u-col :span='6'>
                <div class="number6">1</div>
            </u-col>
            <u-col :span='10'>
                <div class="number7">1</div>
            </u-col>
        </u-row>
    </div>
</template>
<script>
import uRow from '../views/rows/rows.vue'
import uCol from '../views/cols/cols.vue'
export default {
    components:{
        uRow,
        uCol
    }
}
</script>
<style lang="scss" scoped> 
    h2{
        margin: 20px 0;
    }
    .number1{
        background-color: var(--theme-color);
        border-radius: 4px;
    }
    .number2,.number3,.number4{
        margin-top: 20px;
        background-color:aqua;
        border-radius: 4px;
    }
    .number5,.number6,.number7{
        background-color:aqua;
        border-radius: 4px;
    }
</style>