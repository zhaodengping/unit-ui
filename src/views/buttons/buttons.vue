<template>
    <button :type="activeType" :class="[type?'u-button-'+type:'','u-button']">
        <slot></slot>
    </button>
</template>
<script>
export default {
    props:{
        type:{
            type:String,
            default:'default'
        }
    }
}
</script>
<style lang="scss" scoped>
.u-button{
    border-width:0;
    padding: 12px 20px;
    border-radius: var(--border-radius);
}
.u-button-primary{
    background-color: var(--theme-color);
    color: #ffffff;
}

</style>