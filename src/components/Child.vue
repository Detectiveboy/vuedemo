<template>
  <div>
    <h2>子组件</h2>
    <p>{{msg}}</p>
    <button @click="clickHandle">传递</button>
    <input type="text" v-model="val" @change="changeHandle" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      val: 0,
      send: "子组件传递给父组件"
    };
  },
  name: "child",
  props: ["msg"],
  methods: {
    clickHandle() {
      this.$emit("fn", this.send);
    },
    changeHandle() {
      this.$emit("input", this.val);
    }
  }
};
</script>