<template>
  <div>
    <div v-test v-change="size">directive</div>
    <button @click="changeHandle">改变大小</button><br>
    <input type="text" v-focus>
  </div>
</template>
<script>
import Vue from "vue";
Vue.directive("change", {
  inserted(el, binding) {
    el.style = `font-size:${binding.value}px`;
  },
  update(el, binding) {
    el.style = `font-size:${binding.value}px`;
  }
});
export default {
  data() {
    return {
      size: 12
    };
  },
  methods: {
    changeHandle() {
      ++this.size;
    }
  }
};
</script>