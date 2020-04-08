<template>
  <div>
    <p>Vuex</p>
    <p>{{msg}}</p>
    <button @click="clickHandle">修改</button>
  </div>
</template>
<script>
export default {
  computed: {
    msg() {
      return this.$store.state.name;
    }
  },
  methods: {
    clickHandle() {
      this.$store.commit("modify", "data");
    }
  }
};
</script>