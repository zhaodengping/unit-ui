<template>
    <div>
        <h1>row-col版</h1>
        <h2>基础布局</h2>
        <u-row>
            <u-col>1</u-col>
            <u-col>1</u-col>
            <u-col>1</u-col>
        </u-row>
    </div>
</template>
<script>
import uRow from '../views/rows/rows.vue'
import uCol from '../views/cols/cols.vue'
export default {
    components:{
        uRow,
        uCol
    }
}
</script>