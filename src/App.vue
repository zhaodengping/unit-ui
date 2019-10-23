<template>
    <div class="home-flex">
        <div class="home-left">
            <left></left>
        </div>
        <div class="home-right">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import left from './left.vue'
export default {
    name:'App',
    components:{
        left
    }
}
</script>
<style lang="scss" scoped>
@import url(./assets/css/index.css);
.home-flex{
    display: flex;
    .home-left{
        margin-right: 60px;
        border-right: 1px solid #f2f2f2;
        width: 200px;
        min-height: calc(100vh - 60px);
        height: auto;
    };
    .home-right{
        width: 100%;
    }
}

</style>