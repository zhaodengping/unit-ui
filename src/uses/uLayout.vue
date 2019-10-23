<template>
    <div>
        <h1>grid版</h1>
        <h2>基础布局</h2>
        <u-grid :span='24'>
            <div class="number1">1</div>
        </u-grid>
        <u-grid :span='12'>
            <div class="number2">1</div>
            <div class="number3">2</div>
        </u-grid>
        <u-grid :span='8'>
            <div class="number4">1</div>
            <div class="number5">2</div>
            <div class="number6">3</div>
        </u-grid>
        <h2>分栏间隔</h2>
        <u-grid :span='8' :gutter="20">
            <div class="number7">1</div>
            <div class="number8">2</div>
            <div class="number9">3</div>
        </u-grid>
    </div>
</template>
<script>
import uGrid from '../views/layout/layout.vue'
export default {
    components:{
        uGrid,
    }
}
</script>
<style lang="scss" scoped>
.number1{
    background-color: var(--theme-color);
    border-radius: 4px;
}
.number2,.number3{
    margin-top: 20px;
    border-radius: 4px;
}
.number2{
    background-color: aquamarine;
}
.number3{
    background-color: aqua
}
.number4,.number5,.number6{
    margin-top: 20px;
    border-radius: 4px;
}
.number4{
    background-color: beige
}
.number5{
    background-color: bisque;
}
.number6{
    background-color: blanchedalmond
}
.number7,.number8,.number9{
    border-radius: 4px;
}
.number7{
    background-color: beige
}
.number8{
    background-color: bisque;
}
.number9{
    background-color: blanchedalmond
}
</style>