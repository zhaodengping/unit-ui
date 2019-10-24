<template>
    <button type="button" :class="[type?'u-button-'+type:'',size?'u-button-size-'+size:'','u-button',{'is-plain':plain,'is-cirlce':circle,'is-disabled':disabled}]" :disabled='[disabled||loading?true:false]'>
        <div v-if='loading' class="circle">
            <div class="loading"></div>
            <div class="loading"></div>
            <div class="loading"></div>
            <div class="loading"></div>
            <div class="loading"></div>
        </div>
        <i :class="[icon?icon:'']" v-if='icon'></i>
        <slot></slot>
    </button>
</template>
<script>
export default {
    name:"uButton",
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
            type:Boolean,
        },
        loading:{
            type:Boolean
        },
        loadingType:{
            type:String,
        },
        size:{
            type:String,
            default:'default'
        }
    },
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

//default
.u-button-default{
    @include button(#dcdfe6,var(--default-color),#fff,var(--default-focus),var(--theme-focus),var(--theme-color));
}
.u-button-default.is-plain{
    @include buttonPlain(#dcdfe6,var(--default-color),#fff,#fff,var(--theme-color),var(--theme-color)); 
}
.u-button-default.is-cirlce{
    border-radius: 20px;
}
.u-button-default.is-disabled{
    @include buttonDisabled(#c0c4cc,#fff,#ebeef5);
    cursor:not-allowed;
}
@keyframes loadingCircle {
    0%{
        transform: scale(0.8);
        opacity: 0.8;
    }
    50%{
        transform: scale(0.4);
        opacity: 0.4;
    }
}
.circle{
    position: relative;
    width: 40px;
    height: 16px;
    .loading{
        position: absolute;
        right: 0;
        width: 6px;
        height: 6px;
        background-color: var(--theme-color);
        border-radius: 10px; 
        animation: loadingCircle 1s ease infinite;
        &:first-child{
            top: -5px;
            right: 17px;
            animation-delay: .1s
        }
        &:nth-child(2){
            right: 5px;
            top: 5px;
            animation-delay: .2s
        }
        &:nth-child(3){
            right: 10px;
            top: 17px;
            animation-delay: .3s
        }
        &:nth-child(4){
            right: 25px;
            top: 17px;
            animation-delay: .4s
        }
        &:nth-child(5){
            right: 30px;
            top: 5px;
            animation-delay: .5s
        }
    }
}



//primary
.u-button-primary{
    @include button(var(--theme-color),#fff,var(--theme-color),var(--theme-focus),var(--theme-focus),#fff);
}
.u-button-primary.is-plain{
    @include buttonPlain(var(--theme-focus),var(--theme-color),var(--default-focus),var(--theme-focus),var(--theme-focus),#fff);
}
.u-button-primary.is-cirlce{
    border-radius: 20px;
}
.u-button-primary.is-disabled{
    @include buttonDisabled(#fff,#a0cfff,#a0cfff);
    cursor:not-allowed;
}

//success
.u-button-success{
    @include button(var(--success-color),#fff,var(--success-color),var(--success-focus),var(--success-focus),#fff);
}
.u-button-success.is-plain{
    @include buttonPlain(var(--success-color),var(--success-color),#f0f9eb,var(--success-color),var(--success-focus),#fff);
}
.u-button-success.is-cirlce{
    border-radius: 20px;
}
.u-button-success.is-disabled{
    @include buttonDisabled(#fff,#b3e19d,#b3e19d);
    cursor:not-allowed;
}

//info
.u-button-info{
    @include button(var(--info-color),#fff,var(--info-color),var(--info-focus),var(--info-focus),#fff); 
}
.u-button-info.is-plain{
    @include buttonPlain(#d3d4d6,var(--info-color),#f4f4f5,var(--info-color),var(--info-focus),#fff);
}
.u-button-info.is-cirlce{
    border-radius: 20px;
}
.u-button-info.is-disabled{
    @include buttonDisabled(#fff,#c8c9cc,#c8c9cc);
    cursor:not-allowed;
}

//warning
.u-button-warning{
    @include button(var(--warning-color),#fff,var(--warning-color),var(--warning-focus),var(--warning-focus),#fff); 
}
.u-button-warning.is-plain{
    @include buttonPlain(var(--warning-color),var(--warning-color),#fdf6ec,var(--warning-color),var(--warning-focus),#fff); 
}
.u-button-warning.is-cirlce{
    border-radius: 20px;
}
.u-button-warning.is-disabled{
    @include buttonDisabled(#fff,#f3d19e,#f3d19e);
    cursor:not-allowed;
}

//danger
.u-button-danger{
    @include button( var(--danger-color),#fff, var(--danger-color),var(--danger-focus),var(--danger-focus),#fff); 
}
.u-button-danger.is-plain{
    @include buttonPlain(var(--danger-color),var(--danger-color), #fef0f0,var(--danger-color),var(--danger-focus),#fff);  
}
.u-button-danger.is-cirlce{
    border-radius: 20px;
}
.u-button-danger.is-disabled{
    @include buttonDisabled(#fff,#fab6b6,#fab6b6);
    cursor:not-allowed;
}

//文字按钮
.u-button-text{
    padding: 12px 0;
    border-color: transparent;
    color: var(--theme-color);
}
.u-button-text.is-disabled{
    cursor:not-allowed;
    color: var(--default-color)
}

//不同尺寸
.u-button-size-medium{
    padding: 10px 20px;
    font-size: 14px;
}
.u-button-size-small{
    padding: 9px 15px;
    font-size: 12px;
}
.u-button-size-mini{
    padding: 7px 15px;
    font-size: 12px;
}



</style>