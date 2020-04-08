<template>
  <div>
    <h2>父组件</h2>
    <hr />
    <childslot>
      <p>我是匿名插槽</p>
      <p slot="slota">我是具名插槽</p>
      <template v-slot="slotProps">
        <p>{{slotProps.msg}}</p>
      </template>
    </childslot>
  </div>
</template>
<script>
import childslot from "@/components/Childslot.vue";
export default {
  components: {
    childslot
  },
  mounted(){
      console.log(this.$slots)
  }
};
</script>