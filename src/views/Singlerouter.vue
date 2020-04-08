<template lang="pug">
    div
        h1 单页面多路由
        hr/
        div.view
            router-view(:to={name:'viewA'})
        div.view
            router-view(:to={name:'viewB'})
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.view {
  width: 400px;
  height: 400px;
  border: 1px solid red;
  float: left;
}
</style>