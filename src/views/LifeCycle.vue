<template>
  <div>
    <input type="text" v-model="test" />
    <p>{{test}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: "",
      obj: {
        name: "赵云龙",
        sex: "男"
      }
    };
  },
  beforeCreate() {
    console.log("开始创建虚拟dom beforeCreate");
  },
  created() {
    console.log("虚拟dom创建完成 created");
  },
  beforeMount() {
    console.log("开始渲染真实dom beforeMount");
  },
  mounted() {
    console.log("真实dom渲染完成 mounted");
    this.$nextTick(() => {
      console.log("等待真实dom添加完成后执行");
    });
    this.$set(this.obj, "age", "20");
    console.log(this.obj);
    const _this = this;
    setTimeout(() => {
      _this.$delete(_this.obj, "sex");
      console.log(_this.obj);
    }, 2000);
  },
  beforeUpdate() {
    console.log("开始更新数据 beforeUpdate");
  },
  updated() {
    console.log("更新数据完成 updated");
  },
  beforeDestroy() {
    console.log("开始销毁dom beforeDestroy");
  },
  destroyed() {
    console.log("销毁dom完成 destroyed");
  }
};
</script>