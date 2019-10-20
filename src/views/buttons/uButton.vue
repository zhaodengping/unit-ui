<template>
    <div class="btn">
        <h2>基础按钮</h2>
        <u-button>默认按钮</u-button>
        <u-button type='primary'>主要按钮</u-button>
        <u-button type='success'>成功按钮</u-button>
        <u-button type='info'>信息按钮</u-button>
        <u-button type='warning'>警告按钮</u-button>
        <u-button type='danger'>危险按钮</u-button>
        <h2>朴素按钮</h2>
        <u-button plain>朴素按钮</u-button>
        <u-button type='primary' plain>主要按钮</u-button>
        <u-button type='success' plain>成功按钮</u-button>
        <u-button type='info' plain>信息按钮</u-button>
        <u-button type='warning' plain>警告按钮</u-button>
        <u-button type='danger' plain>危险按钮</u-button>
        <h2>圆角按钮</h2>
        <u-button circle>圆角按钮</u-button>
        <u-button type='primary' circle>主要按钮</u-button>
        <u-button type='success' circle>成功按钮</u-button>
        <u-button type='info' circle>信息按钮</u-button>
        <u-button type='warning' circle>警告按钮</u-button>
        <u-button type='danger' circle>危险按钮</u-button>
    </div>
</template>
<script>
import uButton from './buttons.vue'
export default {
    data(){
        return{}
    },
    components:{
        uButton
    }
}
</script>
<style lang="scss" scoped>
.btn{
    margin: 20px;
}
</style>