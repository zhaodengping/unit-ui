<template>
    <div class="grid" :style="{gridTemplateColumns:columnWidth}">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        span:{
            type:Number,
        }
    },
    computed:{
        columnWidth:function(){
            return 100/24 * this.span
        }
    }
}
</script>
<style lang="scss" scoped>
.grid{
    display: grid;
    
    width: 100%;
}
</style>