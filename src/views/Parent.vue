<template>
  <div>
    <h2>组件通信</h2>
    <p>{{receive}}</p>
    <p>{{text}}</p>
    <button @click="clickHandle">获取ref</button>
    <hr />
    <child :msg="msg" @fn="changeHandle" v-model="text" ref="comp"/>
  </div>
</template>
<script>
import child from "@/components/Child.vue";
export default {
  data() {
    return {
      text: "",
      msg: "父组件传递给子组件",
      receive: "接受"
    };
  },
  components: {
    child
  },
  methods: {
    changeHandle(val) {
      this.receive = val;
    },
    clickHandle(){
      console.log(this.$refs)
    }
  }
};
</script>