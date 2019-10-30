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
                    <tr class="week">
                        <th v-for='(item,index) in week' :key="index">{{item}}</th>
                    </tr>
                    <tr class="day">
                        <th v-for='(item,index) in day' :key="index" :class="[item==today.day?'is-today':'']">{{item}}</th>
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
            dialogShow:false,
            day:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
            today:{
                year:0,
                month:0,
                day:0
            },
            isWeek:-1,//每月第一天是周几
        }
    },
    created(){
        this.getDays()
    },
    methods: {
        //是否是闰年,年份能被4整除，但是不能是整数，或者能被400整除
        isDouble(data){
            const cond1=data%4==0;
            const cond2=data%100!==0;
            const cond3=data%400==0
            if(cond1&&cond2||cond3){
                return true
            }
            return false
        },
        //每个月的天数
        getDays(){
            let date=new Date();
            let year=date.getFullYear();
            let month=date.getMonth()+1;
            let isDouble=this.isDouble(year)
            let day=date.getDate();
            this.whichIsFirstDay(year,month)
            this.today={
                year,
                month,
                day:day
            }
            switch(month){
                case 2:{
                    if(isDouble){
                        this.day.pop()
                    }else{
                        this.day.splice(-2,2)
                    }
                    break;
                };
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:{
                    this.day.push(31);
                    break;
                };
            }
        },
        //判断传入的年份的月份第一天是周几
        whichIsFirstDay(year,month){
            let number=new Date()
            console.log(number)
        },
        focus(){
            this.dialogShow=true;
        },
        blur(){
            this.dialogShow=false
        },
    },
}
</script>
<style lang="scss" scoped>
    .calendar{
        position: relative;
        .input-pre{
            position: absolute;
            left: 5px;
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
            width: 220px;
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
        animation: with .2s linear forwards;
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
            animation: tableShow .2s linear forwards;
            box-sizing: border-box;
            font-size: 14px;
            color: #606266;
            tbody{
                .week{
                    display: flex;
                    width: 100%;
                    border-bottom: 1px solid #f2f2f2;
                    padding-bottom: 5px;
                    margin-bottom: 10px;
                    th{
                        padding: 0;
                        width: 14.28%
                    }
                }
                .day{
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    th{
                        cursor: pointer;
                        padding: 5px 0;
                        width: 14.28%;
                        &:hover{
                            color: var(--theme-color)
                        }
                    }
                    .is-today{
                        background-color: var(--theme-color);
                        color: #fff;
                        border-radius: 4px;
                    }
                }
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
        50%{
            height: 50%;
        }
        100%{
            height: 100%;
        }
    }
    @keyframes tableShow {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 0.3;
        }
        100%{
            opacity: 1;
        }
    }
</style>