<template>
    <div class="grid" :style="'gridTemplateColumns:repeat('+columnCount+',+'+columnWidth+'%'+');gridColumnGap:'+gutter/10+'%'">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        span:{
            type:Number,
        },
        gutter:{
            type:Number,
            default:0
        }
    },
    computed:{
        width:function(){
            return 1/24 * this.span
        },
        columnCount:function(){
            return 1/this.width
        },
        columnWidth:function(){
            return (100-this.gutter/10*(this.columnCount-1))/24*this.span
        }
    }
}
</script>
<style lang="scss" scoped>
.grid{
    display: grid;
}
</style>