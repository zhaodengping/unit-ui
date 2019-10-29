<template>
    <div>
        <span class="calendar">
            <i class="iconfont u-rili input-pre"></i>
            <input type="text" class="day-picker" @focus="focus">
        </span>
        <div class="dialog" v-if='dialogShow'>
            <div class="title">
                <span>
                    <i class="iconfont u-icon_paging_left"></i>
                    <i class="iconfont u-xiangzuo1"></i>
                </span>
                <span>日期</span>
                <span>
                    <i class="iconfont u-xiangyou"></i>
                    <i class="iconfont u-xiangyou1"></i>
                </span>
            </div>
            <table>
                <tbody>
                    <tr class="tr">
                        <th v-for='(item,index) in week' :key="index">{{item}}</th>
                    </tr>
                </tbody>
            </table>
            <div class="arrow"></div>
        </div>
    </div>
</template>
<script>
const week=['日','一','二','三','四','五','六']
export default {
    name:'uCalendar',
    data(){
        return{
            week:week,
            dialogShow:false
        }
    },
    methods: {
        focus(){
            this.dialogShow=true;
        },
    },
}
</script>
<style lang="scss" scoped>
    .calendar{
        position: relative;
        .input-pre{
            position: absolute;
            left: 2px;
            top: 2px;
            color: #c0c4cc
        }
        .day-picker{
            padding:5px 2px 5px 20px;
            outline: none;
            border-radius: var(--border-radius);
            border-width:1px;
            border-style: solid;
            border-color:#dcdfe6;
            color: transparent;
        }
    }
    .dialog{
        position: relative;
        margin-top: 10px;
        padding: 10px;
        width: 332px;
        border: 1px solid #dcdfe6;
        border-radius: var(--border-radius);
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        animation: with .2s ease forwards;
        z-index: 999;
        background-color: #fff;
        .title{
            display: flex;
            justify-content: space-between;
            span{
                .iconfont{
                    margin-right: 5px;
                    font-size: 10px;
                }
            }
        }
        table{
            margin-top: 20px;
            width: 100%;
            tr{
                display: flex;
                justify-content: space-around;
                border-bottom: 1px solid #f2f2f2;
            }
        }
        .arrow{
            position: absolute;
            top: -6px;
            left: 35px;
            border-top: 1px solid #dcdfe6;
            border-left: 1px solid #dcdfe6;
            transform: rotate(45deg);
            width: 10px;
            height: 10px;
            background-color: #fff;
        }
    }
    @keyframes with {
        0%{
            height: 0;
        }
        100%{
            height: 200px;
        }
    }
</style>