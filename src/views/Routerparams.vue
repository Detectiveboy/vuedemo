<template lang='pug'>
    div
         h1 路由之间传参
         router-link(to='/routerparams/home') Home
         br/
         router-link(:to={name:'abo',params:{id:1,key:'about'}}) About
         br/
         button(@click='clickHandle') 跳转about
         br/
         button(@click='clickHandle1') 跳转aboutQuery
         hr/
         router-view/
</template>
<script>
export default {
  methods: {
    clickHandle() {
      this.$router.push({
        name: "abo",
        params: {
          id: 2,
          key: "params"
        }
      });
    },
    clickHandle1() {
      this.$router.push({
        path: "/routerparams/about",
        query: {
          id: 3,
          key: "query"
        }
      });
    }
  }
};
</script>
<style scoped>
</style>