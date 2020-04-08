<template>
  <div>
    <div>
      计算：
      <input type="text" v-model.number="num1" />+
      <input type="text" v-model.number="num2" />=
      <span>{{jisuan}}</span>
    </div>
    <div>
      监听：
      <input type="text" v-model="text" />
      newVal:{{newVal}}oldVal:{{oldVal}}
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: '',
      num2: '',
      text: "",
      newVal: "",
      oldVal: ""
    };
  },
  methods: {},
  computed: {
    jisuan() {
      return this.num1 + this.num2;
    }
  },
  watch: {
    text(newVal, oldVal) {
      this.newVal = newVal;
      this.oldVal = oldVal;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>