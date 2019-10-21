<template>
    <button type="button" :class="[type?'u-button-'+type:'','u-button',{'is-plain':plain,'is-cirlce':circle,'is-disabled':disabled}]" disabled>
        <i :class="[icon?icon:'','icon']" v-if='icon'></i>
        <slot></slot>
    </button>
</template>
<script>
export default {
    props:{
        type:{
            type:String,
            default:'default'
        },
        plain:{
            type:Boolean,
        },
        circle:{
            type:Boolean
        },
        icon:{
            type:String,
        },
        disabled:{
            type:String,
        }
    },
    created(){
        console.log(this.disabled)
    }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/button.scss';
.u-button{
    border-width:0;
    padding: 12px 20px;
    border-radius: var(--border-radius);
    outline: none;
    cursor: pointer;
    font-weight: 500;
    line-height: 1;
}
.u-button-default{
    @include button(#dcdfe6,var(--default-color),#fff,var(--default-focus),var(--theme-focus),var(--theme-color));
}
.u-button-default.is-plain{
    @include buttonPlain(var(--default-color),var(--default-color),#fff,#fff,var(--theme-color),var(--theme-color)); 
}
.u-button-default.is-cirlce{
    border-radius: 20px;
}
.u-button-primary{
    @include button(var(--theme-color),#fff,var(--theme-color),var(--theme-focus),var(--theme-focus),#fff);
}
.u-button-primary.is-plain{
    @include buttonPlain(var(--theme-focus),var(--theme-color),var(--default-focus),var(--theme-focus),var(--theme-focus),#fff);
}
.u-button-primary.is-cirlce{
    border-radius: 20px;
}
.u-button-success{
    @include button(var(--success-color),#fff,var(--success-color),var(--success-focus),var(--success-focus),#fff);
}
.u-button-success.is-plain{
    @include buttonPlain(var(--success-color),var(--success-color),#f0f9eb,var(--success-color),var(--success-focus),#fff);
}
.u-button-success.is-cirlce{
    border-radius: 20px;
}
.u-button-info{
    @include button(var(--info-color),#fff,var(--info-color),var(--info-focus),var(--info-focus),#fff); 
}
.u-button-info.is-plain{
    @include buttonPlain(#d3d4d6,var(--info-color),#f4f4f5,var(--info-color),var(--info-focus),#fff);
}
.u-button-info.is-cirlce{
    border-radius: 20px;
}
.u-button-warning{
    @include button(var(--warning-color),#fff,var(--warning-color),var(--warning-focus),var(--warning-focus),#fff); 
}
.u-button-warning.is-plain{
    @include buttonPlain(var(--warning-color),var(--warning-color),#fdf6ec,var(--warning-color),var(--warning-focus),#fff); 
}
.u-button-warning.is-cirlce{
    border-radius: 20px;
}
.u-button-danger{
    @include button( var(--danger-color),#fff, var(--danger-color),var(--danger-focus),var(--danger-focus),#fff); 
}
.u-button-danger.is-plain{
    @include buttonPlain(var(--danger-color),var(--danger-color), #fef0f0,var(--danger-color),var(--danger-focus),#fff);  
}
.u-button-danger.is-cirlce{
    border-radius: 20px;
}
</style>