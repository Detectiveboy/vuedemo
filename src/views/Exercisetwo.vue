<template>
  <div id="warp">
    <h2>请添加员工信息</h2>
    <label for="name">
      姓名：
      <input type="text" name="name" v-model.trim="name" />
    </label>
    <label for="age">
      年龄：
      <input type="number" name="age" v-model.number="age" />
    </label>
    <label for="sex">
      性别：
      <select name="sex" v-model="sex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </label>
    <button @click="submit">提交</button>
    <div>
      <p v-for="(item,index) in list" :key="index">
        {{`
        姓名：${item.name} 年龄：${item.age} 性别：${item.sex}
        `
        }}
        <button
          @click="deleteone(item.id)"
        >删除</button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      age: "",
      sex: "",
      list: []
    };
  },
  methods: {
    submit() {
      if (this.name == "") {
        alert("姓名不得为空");
        return false;
      }
      if (this.age == "") {
        alert("年龄不得为空");
        return false;
      }
      if (Number(this.age) <= 0) {
        alert("年龄不得为负数");
        return false;
      }
      if (this.sex == "") {
        alert("性别不得为空");
        return false;
      }
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].name === this.name) {
          if (this.list[i].age === this.age) {
            if (this.list[i].sex === this.sex) {
              alert("不能重复添加");
              return false
            }
          }
        }
      }
      let obj = {
        name: this.name,
        age: this.age,
        sex: this.sex,
        id: new Date().getTime()
      };
      this.list.push(obj);
    },
    deleteone(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (id === this.list[i].id) {
          this.list.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#warp {
  label {
    display: block;
  }
}
</style>