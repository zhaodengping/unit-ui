### u-radio

```
<u-radio v-model="value" label='1'>选项1</u-radio>
```
选择的`value`值为`label`，如果平常项目中使用`{id:'1',value:项目1}`,可以这样写
```
<u-radio v-model="value" v-for='(item,index) in tabData' :key='index' :label='item.id'>{{item.value}}</u-radio>
```
这样的话，正常展示选择的是`value`的值，但是选择的是`id`值