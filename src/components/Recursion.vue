<template>
  <div>
    <recursiion :num="num+1" v-if="num<5" />
  </div>
</template>
<script>
export default {
  name: "recursiion",
  props: {
    num: {
      type: Number,
      default: 1
    }
  }
};
</script>