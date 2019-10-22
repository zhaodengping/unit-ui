<template>
    <div>
        <h2>基础布局</h2>
        <u-grid :span='24'>
            <div class="number">1</div>
        </u-grid>
        <u-grid :span='12'>
            <div class="number">1</div>
            <div class="number">2</div>
        </u-grid>
    </div>
</template>
<script>
import uGrid from '../views/layout/layout.vue'
export default {
    components:{
        uGrid
    }
}
</script>
<style lang="scss" scoped>
.number{
    background-color: var(--theme-color)
}
</style>