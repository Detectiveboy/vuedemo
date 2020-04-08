<template>
  <div>
    <div
      v-for="(item,index) in list "
      :key="index"
      :class="change[index] ? dack : commen"
      @click="clickHandle(index)"
    >
      <p>姓名:{{item.name}}</p>
      <p>电话：{{item.tele}}</p>
      <p>职位：{{item.job}}</p>
      <p v-show="change[index]">{{`您选择了${item.job}`}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      commen: ["commen"],
      dack: ["commen", "color"],
      change: [false, false, false, false]
    };
  },
  name: "card",
  props: ["list"],
  methods: {
    clickHandle(index) {
      this.$set(this.change, index, !this.change[index]);
    }
  }
};
</script>
<style lang="scss" scoped>
.commen {
  width: 200px;
  height: 150px;
  text-align: center;
  border: 1px solid black;
}
.color {
  background: cornflowerblue;
}
</style>