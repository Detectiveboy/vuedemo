<template>
  <div id="warp">
    <h3>我喜欢吃的水果</h3>
    <ol>
      <li v-for="(item,index) in list" :key="index">{{item}}</li>
    </ol>
  </div>
</template>
<script>
export default {
  data() {
      return {
        list: ["苹果", "香蕉", "草莓", "葡萄", "橘子", "哈密瓜"],
      }
  }
};
</script>
<style lang="scss" scoped>
li{
  list-style: none;
}
</style>