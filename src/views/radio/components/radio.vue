<template>
    <label class="u-radio">
        <span class="u-radio_input">
            <span :class="['u-radio_inner',label==value?'is-checked':'']"></span>
            <input type="radio" class="u-radio_original" @change='change'>
        </span>
        <span class="u-radio-label">
            <slot></slot>
        </span>
    </label>
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
        }
    },
    data(){
        return{

        }
    },
    model:{
        prop:'value',
        event:'change'
    },
    methods:{
        change(e){
            console.log(e)
            this.$nextTick(()=>{
                console.log(this.label)
                this.$emit('change',this.label)
            })
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
            .u-radio_inner.is-checked{
                border-color: var(--theme-color);
                background-color: var(--theme-color);
                border-radius: 100%;
            }
            .u-radio_original{
                position: absolute;
                opacity: 0;
                z-index: -1;
                outline: none
            }
        }
        
    }
</style>