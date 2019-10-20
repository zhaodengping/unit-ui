<template>
    <button :type="activeType" :class="[type?'u-button-'+type:'','u-button',{'is-plain':plain,'is-cirlce':circle}]">
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
        activeType:{
            type:String,
            default:'button'
        },
        plain:{
            type:Boolean,
        },
        circle:{
            type:Boolean
        },      
        icon:{
            type:String,
        }  
    },
}
</script>
<style lang="scss" scoped>
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
    border:1px solid #dcdfe6;
    color: var(--default-color);
    &:hover,&:focus{
        background-color: var(--default-focus);
        border-color: var(--theme-focus);
        color: var(--theme-color)
    };
}
.u-button-default.is-plain{
    &:hover,&:focus{
        color: var(--theme-color);
        border-color: var(--theme-color);
        background-color: #fff;
    }
}
.u-button-default.is-cirlce{
    border-radius: 20px;
}

.u-button-primary{
    background-color: var(--theme-color);
    color: #ffffff;
    &:hover,&:focus{
        background-color: var(--theme-focus);
        border-color: var(--theme-focus);
    }
}
.u-button-primary.is-plain{
    border:1px solid var(--theme-focus);
    background-color: var(--default-focus);
    color: var(--theme-color);
    &:hover,&:focus{
        border-color: var(--theme-focus);
        background-color: var(--theme-focus);
        color: #fff;
    }
}
.u-button-primary.is-cirlce{
    border-radius: 20px;
}
.u-button-success{
    background-color: var(--success-color);
    color: #fff;
    &:hover,&:focus{
        background-color: var(--success-focus);
        border-color: var(--success-focus);
    }
}
.u-button-success.is-plain{
    background-color: #f0f9eb;
    color: var(--success-color);
    border:1px solid var(--success-color);
    &:hover,&:focus{
        background-color: var(--success-color);
        border-color: var(--success-focus);
        color: #fff;
    }
}
.u-button-success.is-cirlce{
    border-radius: 20px;
}
.u-button-info{
    background-color: var(--info-color);
    color: #fff;
    &:hover,&:focus{
        background-color: var(--info-focus);
        border-color: var(--info-focus);
    }
}
.u-button-info.is-plain{
    background-color: #f0f9eb;
    color: var(--success-color);
    border:1px solid var(--success-color);
    &:hover,&:focus{
        background-color: var(--success-color);
        border-color: var(--success-focus);
        color: #fff;
    }
}
.u-button-info.is-cirlce{
    border-radius: 20px;
}
.u-button-warning{
    background-color: var(--warning-color);
    color: #fff;
    &:hover,&:focus{
        background-color: var(--warning-focus);
        border-color: var(--warning-focus);
    }
}
.u-button-warning.is-plain{
    background-color: #fdf6ec;
    color: var(--warning-color);
    border:1px solid var(--warning-color);
    &:hover,&:focus{
        background-color: var(--warning-color);
        border-color: var(--warning-focus);
        color: #fff;
    }
}
.u-button-warning.is-cirlce{
    border-radius: 20px;
}
.u-button-danger{
    background-color: var(--danger-color);
    color: #fff;
    &:hover,&:focus{
        background-color: var(--danger-focus);
        border-color: var(--danger-focus);
    }
}
.u-button-danger.is-plain{
    background-color: #fef0f0;
    color: var(--danger-color);
    border:1px solid var(--danger-color);
    &:hover,&:focus{
        background-color: var(--danger-color);
        border-color: var(--danger-focus);
        color: #fff;
    }
}
.u-button-danger.is-cirlce{
    border-radius: 20px;
}
</style>