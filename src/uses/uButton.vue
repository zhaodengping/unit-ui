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
        <h2>图标按钮</h2>
        <u-button icon='iconfont u-sousuo'></u-button>
        <u-button type='primary' icon='iconfont u-bianji'></u-button>
        <u-button type='success' icon='iconfont u-chenggong'></u-button>
        <u-button type='info' icon='iconfont u-youjian'></u-button>
        <u-button type='warning' icon='iconfont u-collection'></u-button>
        <u-button type='danger' icon='iconfont u-icon-test'></u-button>
        <h2>禁用按钮</h2>
        <u-button disabled>禁用按钮</u-button>
        <u-button type='primary' disabled>主要按钮</u-button>
        <u-button type='success' disabled>成功按钮</u-button>
        <u-button type='info' disabled>信息按钮</u-button>
        <u-button type='warning' disabled>警告按钮</u-button>
        <u-button type='danger' disabled>危险按钮</u-button>
        <h2>文字按钮</h2>
        <u-button type="text">文字按钮</u-button>
        <u-button type="text" disabled>文字按钮</u-button>
        <h2>图标按钮</h2>
        <u-button type="primary" icon='iconfont u-upload'>上传</u-button>
        <u-button type="primary" icon='iconfont u-xiazai'>下载</u-button>
        <h2>按钮组</h2>
        <u-button-group>
            <u-button>上一页</u-button>
            <u-button>下一页</u-button>
        </u-button-group>
        <h2>加载中</h2>
        <u-button :loading='true'></u-button>
        <h2>不同尺寸</h2>
        <u-button>默认按钮</u-button>
        <u-button size='medium'>中等按钮</u-button>
        <u-button size="small">小型按钮</u-button>
        <u-button size="mini">超小按钮</u-button>
    </div>
</template>
<script>
import uButton from '../views/buttons/components/buttons.vue'
import uButtonGroup from '../views/buttons/components/button-group.vue'
export default {
    data(){
        return{}
    },
    components:{
        uButton,
        uButtonGroup
    }
}
</script>
<style lang="scss" scoped>
.btn{
    margin: 20px;
}
</style>