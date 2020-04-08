<template>
  <div>
    <div class="imgBox" v-bufImg>
      <img src alt />
    </div>
    <div class="imgBox" v-bufImg>
      <img src alt />
    </div>
    <div class="imgBox" v-bufImg>
      <img src alt />
    </div>
  </div>
</template>
<script>
import Vue from "vue";
Vue.directive("bufImg", {
  inserted(el, binding, vnode, oldVnode) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "#" + r.toString(16) + g.toString(16) + b.toString(16);
    el.style = `background:${color}`;
  }
});
export default {};
</script>
<style lang="scss" scoped>
.imgBox {
  width: 200px;
  height: 100px;
  margin-top: 20px;
  border: 1px solid black;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>