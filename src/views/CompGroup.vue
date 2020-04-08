<template>
  <div>
    递归啦
    <recursion :num="num" />
    <hr />
    <button @click="clickHandle('hellworld')">hellworld</button>
    <button @click="clickHandle('child')">child</button>
    <component :is="view" />
  </div>
</template>
<script>
import recursion from "@/components/Recursion.vue";
import hellworld from "@/components/HelloWorld.vue";
import child from "@/components/Child.vue";
export default {
  data() {
    return {
      num: 1,
      view: ""
    };
  },
  components: {
    recursion,
    hellworld,
    child
  },
  methods: {
    clickHandle(str) {
      this.view = str;
      this.$nextTick(() => {
        console.log(document.getElementsByTagName("h1"));
      });
    }
  }
};
</script>