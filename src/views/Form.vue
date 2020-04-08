<template>
  <div>
    文本：
    <input type="text" v-model.trim="text" />
    <br />数字：
    <input type="number" v-model.number="num" />
    <br />日期：
    <input type="date" v-model="date" />
    <br />
    <div>
      选一种谁水果
      <select v-model="sele">
        <option value="香蕉">香蕉</option>
        <option value="苹果">苹果</option>
        <option value="草莓">草莓</option>
        <option value="葡萄">葡萄</option>
      </select>
    </div>
    <div>
      <label for="man">
        男
        <input type="radio" name="sex" id="man" value="男" v-model="sex" />
      </label>
      <label for="wuman">
        女
        <input type="radio" name="sex" id="wuman" value="女" v-model="sex" />
      </label>
    </div>
    <label for="ok">
      你行吗？
      <input type="checkbox" v-model="singe" id="ok" />
    </label>
    <div>
      <label for="a">
        A
        <input type="checkbox" id="a" value="A" v-model="checkArr" />
      </label>
      <label for="b">
        B
        <input type="checkbox" id="b" value="B" v-model="checkArr" />
      </label>
      <label for="c">
        C
        <input type="checkbox" id="c" value="C" v-model="checkArr" />
      </label>
      <label for="d">
        D
        <input type="checkbox" id="d" value="D" v-model="checkArr" />
      </label>
    </div>
    <button @click="submit">提交</button>
    <p>{{msg}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: "",
      num: "",
      date: "",
      sele: "",
      sex: "",
      singe: "",
      ok: "会",
      no: "不会",
      msg: "",
      checkArr: []
    };
  },
  methods: {
    submit() {
      this.msg = `
      我是${this.text},我是${this.sex}的,今年${this.num}岁,我出生于${this.date},
      我最喜欢吃${this.sele},我${this.singe ? this.ok : this.no},我选的是${
        this.checkArr
      }

      `;
    }
  }
};
</script>
<style lang="scss" scoped>
</style>