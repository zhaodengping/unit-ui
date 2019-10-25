<template>
    <label class="u-radio">
        <span class="u-radio_input">
            <div class="u-radio_inner"></div>
            <input type="radio" class="u-radio_original">
        </span>
        <span class="u-radio-label">
            <slot></slot>
        </span>
    </label>
</template>
<script>
export default {
    name:'uRadio'
}
</script>
<style lang="scss" scoped>
    .u-radio{
        display: flex;;
        cursor: pointer;
        color: #606266;
        .u-radio_input{
            display: inline-block;
            .u-radio_inner{
                position: relative;
                width: 14px;
                height: 14px;
                border: 1px solid #606266;
                border-radius: 100%;
                &::after{
                    width: 4px;
                    height: 4px;
                    content: ''
                }
            };
            .u-radio_original{
                position: absolute;
                opacity: 0;
                z-index: -1;
                outline: none
            }
        }
        
    }
</style>