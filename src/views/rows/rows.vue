<template>
    <div class="row">
        <slot></slot>
        <div class="clear"></div>
    </div>
</template>
<script>
export default {
    props:{
        gutter:{
            type:Number,
            default:0
        }
    },
}
</script>
<style lang="scss" scoped>
    .row{
        width: 100%;
        .col{
            &:first-child{
                margin-left: 0 !important
            }
        }
    }
    .clear{
        clear: both;
    }
</style>