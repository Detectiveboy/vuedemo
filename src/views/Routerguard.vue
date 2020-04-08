<template lang="pug">
    div
        h1 路由守卫
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(`你即将进入路由页面`);
    });
  },
  beforeRouteUpdate(to, from, next) {
    console.log(`路由地址更新`);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(`离开路由页面`);
    next();
  }
};
</script>