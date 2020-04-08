<template lang="pug">
    div
        h1 axios请求
</template>
<script>
export default {
  mounted() {
    // this.axios
    //   .get("localhost:5000/login")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    // this.axios
    //   .post("localhost:5000/login")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.axios
      .get(
        "http://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10"
      )
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>