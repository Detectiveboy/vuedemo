<template>
  <div>
    <div id="drag" v-drag="{}">drag</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xy: {}
    };
  }
};
</script>
<style lang="scss" scoped>
#drag {
  width: 100px;
  height: 100px;
  border: 1px solid black;
  position: absolute;
}
</style>