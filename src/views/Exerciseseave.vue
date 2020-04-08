<template>
  <div id="container">
    <card :list="list" />
  </div>
</template>
<script>
import card from "@/components/card.vue";
export default {
  data() {
    return {
      list: [
        {
          name: "张一",
          tele: 123456,
          job: "项目总监"
        },
        {
          name: "钱二",
          tele: 134567,
          job: "项目经理"
        },
        {
          name: "孙三",
          tele: 145678,
          job: "高级程序员"
        },
        {
          name: "李四",
          tele: 156789,
          job: "技术顾问"
        }
      ]
    };
  },
  components: {
    card
  }
};
</script>
<style lang="scss" scoped>
#container > div {
  display: flex;
  justify-content: space-around;
}
</style>