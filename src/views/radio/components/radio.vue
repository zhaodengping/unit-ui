<template>
    <span class="radio">
        <label class="u-radio" @click="change" v-if='!type'>
            <span class="u-radio_input">
                <span :class="['u-radio_inner',label==value?'is-checked':'no-checked',disabled?'radio-disabled':'']"></span>
                <input type="radio" class="u-radio_original">
            </span>
            <span :class="['u-radio-label',label==value?'text-checked':'',{'text-disabled':disabled}]">
                <slot></slot>
            </span>
        </label>
        <!-- 按钮选择样式 -->
        <label v-if='type=="button"'>
            <span :class="['u-button',label==value?'is-checked':'no-checked']" @click="changeButton">
                <slot></slot>
            </span>
        </label>
    </span>
</template>
<script>
export default {
    name:'uRadio',
    props:{
        label:{
            type:String,
            default:''
        },
        value:{
            type:String,
            default:''
        },
        disabled:{
            type:Boolean,
        },
        type:{
            type:String,
        }
    },
    model:{
        prop:'value',
        event:'change'
    },
    methods:{
        change(){
            if(!this.disabled){
                this.$emit('change',this.label)
            }
        },
        changeButton(){
            this.$emit('change',this.label)
        }
    }
}
</script>
<style lang="scss" scoped> 
    .u-radio{
        cursor: pointer;
        color: #606266;
        .u-radio_input{
            vertical-align: middle;
            line-height: 1;
            .u-radio_inner{
                position: relative;
                display: inline-block; 
                width: 14px;
                height: 14px;
                border: 1px solid #606266;
                border-radius: 100%;
                box-sizing: border-box;
                &::after{
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    border-radius: 100%;
                    width: 4px;
                    height: 4px;
                    content: ' ';
                    background-color: #fff;
                }
            };
            .u-radio_inner.radio-disabled{
                cursor:not-allowed;
                border-color: #e4e7ed;
                background-color: #f5f7fa;
            }
            .is-checked{
                border-color: var(--theme-color);
                background-color: var(--theme-color);
                border-radius: 100%;
            }
            .is-checked.radio-disabled.u-radio_inner{
                &::after{
                    background-color: #c0c4cc
                }
            }
            .no-checked.radio-disabled.u-radio_inner{
                &::after{
                    background-color: #f5f7fa
                }
            }
            .u-radio_original{
                position: absolute;
                opacity: 0;
                z-index: -1;
                outline: none
            }
        };
        .u-radio-label{
            margin-left: 5px;
            color: #606266
        }
        .u-radio-label.text-checked{
            color: var(--theme-color)   
        }
        .u-radio-label.text-disabled{
            cursor:not-allowed;
            color: #e4e7ed
        }
    }
    .u-button{
        border-radius: 4px;
        padding: 10px 14px;
        cursor: pointer;
        transition: all 0.3s ease-in
    }
    .u-button.is-checked{
        background-color: var(--theme-color);
        color: #fff;
        border: 1px solid var(--theme-color)
    }
    .u-button.no-checked{
        background-color: #fff;
        border: 1px solid #dcdfe6
    }
</style>