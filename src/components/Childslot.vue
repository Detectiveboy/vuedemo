<template>
  <div>
    <h2>子组件</h2>
    <slot>预设插槽内容</slot>
    <slot name="slota"></slot>
    <slot msg='我是区域插槽'></slot>
  </div>
</template>
<script>
export default {
  name: "childslot"
};
</script>